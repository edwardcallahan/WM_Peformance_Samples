
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Staff
 *  01/24/2012 10:56:58
 * 
 */
public class Staff {

    private Byte staffId;
    private Address address;
    private com.sakiladb.data.Store store;
    private String firstName;
    private String lastName;
    private byte[] picture;
    private String email;
    private Boolean active;
    private String username;
    private String password;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Rental> rentals = new HashSet<com.sakiladb.data.Rental>();
    private Set<com.sakiladb.data.Payment> payments = new HashSet<com.sakiladb.data.Payment>();
    private Set<com.sakiladb.data.Store> stores = new HashSet<com.sakiladb.data.Store>();

    public Byte getStaffId() {
        return staffId;
    }

    public void setStaffId(Byte staffId) {
        this.staffId = staffId;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public com.sakiladb.data.Store getStore() {
        return store;
    }

    public void setStore(com.sakiladb.data.Store store) {
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

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public Set<com.sakiladb.data.Store> getStores() {
        return stores;
    }

    public void setStores(Set<com.sakiladb.data.Store> stores) {
        this.stores = stores;
    }

}
