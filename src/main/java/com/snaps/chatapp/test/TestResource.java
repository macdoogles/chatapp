package com.snaps.chatapp.test;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * A test resource that serves as a place holder and mini-sandbox until I have
 * real resources and I'm comfortable with everything.
 *
 * <p>Reminder: available via http://localhost:8080/weighttracker/rest/test
 */
@Path("/test")
public class TestResource {
  @GET
  @Path("{who}")
  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
  public Greeting sayGreeting(@PathParam("who") String name) {
    return new Greeting(name);
  }
}

@XmlRootElement
class Greeting {
  private String name;

  public Greeting() {
  }

  public Greeting(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
