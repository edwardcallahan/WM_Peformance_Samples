
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Address
 *  01/23/2012 16:45:13
 * 
 */
public class Address {

    private Short addressId;
    private City city;
    private String address;
    private String address2;
    private String district;
    private String postalCode;
    private String phone;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Store> stores = new HashSet<com.sakiladb.data.Store>();
    private Set<com.sakiladb.data.Staff> staffs = new HashSet<com.sakiladb.data.Staff>();
    private Set<com.sakiladb.data.Customer> customers = new HashSet<com.sakiladb.data.Customer>();

    public Short getAddressId() {
        return addressId;
    }

    public void setAddressId(Short addressId) {
        this.addressId = addressId;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.Store> getStores() {
        return stores;
    }

    public void setStores(Set<com.sakiladb.data.Store> stores) {
        this.stores = stores;
    }

    public Set<com.sakiladb.data.Staff> getStaffs() {
        return staffs;
    }

    public void setStaffs(Set<com.sakiladb.data.Staff> staffs) {
        this.staffs = staffs;
    }

    public Set<com.sakiladb.data.Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<com.sakiladb.data.Customer> customers) {
        this.customers = customers;
    }

}
