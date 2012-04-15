A web-based chat application. The functionality is simplistic and mostly
useless but the main purpose of doing it was to learn some new technologies.
Some of the main ones used are:

* Angular (http://angularjs.org)
Javascript MVC framework.

* Closure Compiler (https://developers.google.com/closure/compiler/)
Compiles javascript to javascript... Yeah as crazy as it sounds.

* Jasmine (http://pivotal.github.com/jasmine/)
BDD testing framework for javascript.
 
* JQuery (http://jquery.com)
Javascript library that has become the de-facto DOM manipulation framework of
the web.

* Jersey (http://jersey.java.org)
Java REST library. RESTful JSON has long surpassed SOAP and anything else as
the way to make a server-side AJAX API.  

* Maven (http://maven.apache.org)
Java build tool. Surprisingly works with Jasmine testing but apart from that
things get very weird when dealing with javascript. There's an unhealthy amount
of ant and python mixed in with this.


Javascript:

Things are very weird here and some of this is still a work in progress.
Ideally I'd like to use Closure's advanced compilation but that doesn't work
well with anything other than Closure's javascript library. I ended up
concluding that the cost was not worth the benefit but I still use the compiler
with simple optimizations which allow me to keep everything minified into one
single .js file (except for angular which I needed to load separately).

Besides minification the Closure compiler also allows me to do dependency
management. Except for angular all the third party libs are hacked to include a
goog.provide statement which allows me to import libraries only when I need
them and like I said, all in one js file since it's done at compile-time rather
than run time like requirejs does which optimizes performance.

A big concern of mine was not to interfere with daily development when doing
javascript "compilation" though. For Jasmine unit tests (mvn test or
mvn jasmine:bdd) and jetty runs (mvn jetty:run) the uncompiled javascript is
used and refreshing will get the latest code without rebuilding. For jetty
runs I use a file from the Closure Library which does depdency management at
run time.


Cache-busting:

At some point I'll create a maven plugin but for now I have a simple python
script that appends the checksum of static files to the <srcipt src tag in
HTML files so that the browser will cache static files until the contents of
the file changes. Like everything related to static HTML files, the build rules
get kind of hairy with this.
