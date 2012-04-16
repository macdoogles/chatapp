package com.acme.chatapp.sandbox;

import javax.xml.bind.annotation.XmlRootElement;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import com.google.common.base.Objects;

/**
 * Phone model for the phone app thing discussed in the angular tutorial.
 *
 * <p>Note: I'm not doing getters/setters because I'm lazy but I'm not even
 * convinced they're necessary for value objects.
 */
@XmlRootElement
public class Phone {

  public String modelNumber;

  public String name;

  public String snippet;

  public Phone() { }

  public Phone(String modelNumber, String name, String snippet) {
    this.modelNumber = modelNumber;
    this.name = name;
    this.snippet = snippet;
  }

  @Override
  public boolean equals(Object obj) {
    return EqualsBuilder.reflectionEquals(this, obj);
  }

  @Override
  public int hashCode() {
    return HashCodeBuilder.reflectionHashCode(this);
  }

  @Override
  public String toString() {
    return Objects.toStringHelper(this)
        .add("modelNumber", this.modelNumber)
        .add("name", this.name)
        .add("snippet", this.snippet)
        .toString();
  }
}
