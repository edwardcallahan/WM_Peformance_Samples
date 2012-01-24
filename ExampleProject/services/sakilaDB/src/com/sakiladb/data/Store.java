
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Store
 *  01/24/2012 10:56:58
 * 
 */
public class Store {

    private Byte storeId;
    private com.sakiladb.data.Staff staff;
    private Address address;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Inventory> inventories = new HashSet<com.sakiladb.data.Inventory>();
    private Set<com.sakiladb.data.Customer> customers = new HashSet<com.sakiladb.data.Customer>();
    private Set<com.sakiladb.data.Staff> staffs = new HashSet<com.sakiladb.data.Staff>();

    public Byte getStoreId() {
        return storeId;
    }

    public void setStoreId(Byte storeId) {
        this.storeId = storeId;
    }

    public com.sakiladb.data.Staff getStaff() {
        return staff;
    }

    public void setStaff(com.sakiladb.data.Staff staff) {
        this.staff = staff;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(Set<com.sakiladb.data.Inventory> inventories) {
        this.inventories = inventories;
    }

    public Set<com.sakiladb.data.Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<com.sakiladb.data.Customer> customers) {
        this.customers = customers;
    }

    public Set<com.sakiladb.data.Staff> getStaffs() {
        return staffs;
    }

    public void setStaffs(Set<com.sakiladb.data.Staff> staffs) {
        this.staffs = staffs;
    }

}
