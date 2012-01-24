
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Customer
 *  01/24/2012 10:56:57
 * 
 */
public class Customer {

    private Short customerId;
    private Address address;
    private Store store;
    private String firstName;
    private String lastName;
    private String email;
    private Boolean active;
    private Date createDate;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Rental> rentals = new HashSet<com.sakiladb.data.Rental>();
    private Set<com.sakiladb.data.Payment> payments = new HashSet<com.sakiladb.data.Payment>();

    public Short getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Short customerId) {
        this.customerId = customerId;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.Rental> getRentals() {
        return rentals;
    }

    public void setRentals(Set<com.sakiladb.data.Rental> rentals) {
        this.rentals = rentals;
    }

    public Set<com.sakiladb.data.Payment> getPayments() {
        return payments;
    }

    public void setPayments(Set<com.sakiladb.data.Payment> payments) {
        this.payments = payments;
    }

}
