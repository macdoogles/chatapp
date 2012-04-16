package com.acme.chatapp.sandbox;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.common.collect.Lists;

/**
 * A resource for the phones app that is discussed in the angular tutorial.
 *
 * <p>Reminder: available via http://localhost:8080/chatapp/rest/sandbox/phones
 */
@Path("/sandbox/phones")
public class PhoneResource {
  List<Phone> phones;

  public PhoneResource() {
    this.phones = Lists.newArrayList(
        new Phone("123", "Nexus S", "Fast just got faster with Nexus S."),
        new Phone("456", "Motorola XOOM with Wi-Fi", "The Next, Next Generation tablet"),
        new Phone("678", "MOTOROLA XOOM",  "The Next, Next Generation tablet."));
  }

  @GET
  @Path("/")
  @Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
  public List<Phone> getPhones() {
    return this.phones;
  }
}