package com.snaps.chatapp.server;

import javax.ws.rs.ext.MessageBodyReader;
import javax.ws.rs.ext.MessageBodyWriter;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;

import com.google.inject.servlet.ServletModule;
import com.snaps.chatapp.test.TestResource;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;

public class ServerModule extends ServletModule {
  @Override
  public void configureServlets() {
    // Bind converters for JAXB/JSON serialization.
    bind(MessageBodyReader.class).to(JacksonJsonProvider.class);
    bind(MessageBodyWriter.class).to(JacksonJsonProvider.class);

    // Bind REST resources.
    bind(TestResource.class);

    // The JSON REST API is available starting at /rest/*.
    serve("/rest/*").with(GuiceContainer.class);
  }
}
