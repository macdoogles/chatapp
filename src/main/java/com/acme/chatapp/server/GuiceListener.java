package com.acme.chatapp.server;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;

/**
 * Handles the web application startup event by setting up Guice dependency
 * injection.
 */
public class GuiceListener extends GuiceServletContextListener {

  @Override
  protected Injector getInjector() {
    return Guice.createInjector(new ServerModule());
  }
}
