#!/usr/bin/env python

""""
This script calculates the checksum of static files and updates the src tags
in HTML files. We do this so that the browser will update the cache when the
content of the file has changed.
"""

import hashlib, os, re, optparse, sys, urllib, urlparse

STATIC_FILE_EXTENSIONS = ['.js', '.css']

def calculate_checksums(scan_dirs, web_context = ''):
  """Calculate the checksum for each static file in the specified directories.
  Last path specified takes precedence for entries repeated in scan_dirs.
  Entries in scan_dirs will be considered root web directories.
  Don't use relative dirs. In particluar ../ or even ./ notation will not work."""
  sums = {}
  for scan_dir in scan_dirs:
    for path, dirs, files in os.walk(os.path.abspath(scan_dir)):
      for file_name in files:
        if not os.path.splitext(file_name)[1] in STATIC_FILE_EXTENSIONS:
          continue
        abspath = os.path.join(path, file_name)
        checksum = hashlib.sha256(file(abspath, 'r').read()).hexdigest()

        # Key the checksum on the relative web URL of the file so we can
        # know what to update when we see it referenced in an HTML file.
        scan_dir = scan_dir + '/' if not scan_dir.endswith('/') else scan_dir
        webpath = abspath[abspath.index(scan_dir):].replace(scan_dir, '')
        sums[webpath] = checksum

        # Also key the checksum on the absolute web URL of the file.
        abs_webpath = '/' + web_context + '/' + webpath
        sums[abs_webpath] = checksum
  return sums


def update_html_files(checksums, html_in_dir, html_out_dir):
  """Update the src tags in HTML files by appending ?stamp=CHECKSUM."""
  for path, dirs, files in os.walk(os.path.abspath(html_in_dir)):
    for file_name in files:
      if os.path.splitext(file_name)[1] != '.html':
        continue
      html = file(os.path.join(path, file_name), 'r').read()
      script_tags = re.findall(r'<script .*>', html)
      new_html = html
      for script_tag in script_tags:
        # Find src.
        src_tag = re.findall(r'src=[\"|\'].*[\"|\']', script_tag)[0]
        src = src_tag.replace('src=', '').replace("'", '').replace('"', '')

        # Calculate the new src.
        url = urlparse.urlparse(src)
        if checksums[url.path] is None:
          print 'Did not find checksum for %s' % url.path
          continue
        query = {} if url.query == '' else dict(urlparse.parse_qsl(url.query))
        query.update({'stamp': checksums[url.path]})
        url_parts = list(url)
        url_parts[4] = urllib.urlencode(query)
        new_src = urlparse.urlunparse(url_parts)

        # Update html with the new src.
        new_script_tag = script_tag.replace(src, new_src)
        new_html = new_html.replace(script_tag, new_script_tag)
      # Write the html back to disk if there was a change.
      if new_html != html:
        # Output the new file, maintaining the existing directory structure.
        relative_dir = path.replace(os.path.abspath(html_in_dir), '')
        out_dir = os.path.normpath(html_out_dir + '/' + relative_dir)
        new_html_path = os.path.join(out_dir, file_name)
        if not os.path.exists(out_dir):
          os.makedirs(out_dir)
        out = file(new_html_path, 'w')
        out.write(new_html)
        out.close()
        print 'Cache-busted %s' % (new_html_path)


if __name__ == '__main__':
  flag_parser = optparse.OptionParser(description =
      '%prog calculates the checksum of static files and updates '
      'the script tags in HTML files so that browsers will update the cache '
      'only when the content of the file has changed.')
  flag_parser.add_option(
      '-c',
      '--context',
      dest='context',
      help='The web context, i.e. ${project.artifactId}.');
  flag_parser.add_option(
      '-i',
      '--html_output_directory',
      dest='html_output_directory',
      help='The directory to write updated HTML files.');
  (flags, args) = flag_parser.parse_args()

  if flags.context is None:
    flag_parser.print_help()
    exit(-1)

  checksums = calculate_checksums([
    os.path.normpath('src/main/javascript'),
    os.path.normpath('src/main/webapp'),
    os.path.normpath('target/javascript'),
  ],
  flags.context)
  
  html_in = os.path.normpath('src/main/webapp')
  html_out = (os.path.normpath(flags.html_output_directory)
      if flags.html_output_directory is not None 
      else os.path.normpath('target/%s' % flags.context))
  update_html_files(checksums, html_in, html_out)

