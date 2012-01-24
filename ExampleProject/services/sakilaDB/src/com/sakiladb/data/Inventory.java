
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Inventory
 *  01/24/2012 10:56:57
 * 
 */
public class Inventory {

    private Integer inventoryId;
    private Store store;
    private Film film;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Rental> rentals = new HashSet<com.sakiladb.data.Rental>();

    public Integer getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(Integer inventoryId) {
        this.inventoryId = inventoryId;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
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

}
