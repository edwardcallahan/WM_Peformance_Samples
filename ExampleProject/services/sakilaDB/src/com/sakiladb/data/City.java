
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.City
 *  01/24/2012 10:56:58
 * 
 */
public class City {

    private Short cityId;
    private Country country;
    private String city;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Address> addresses = new HashSet<com.sakiladb.data.Address>();

    public Short getCityId() {
        return cityId;
    }

    public void setCityId(Short cityId) {
        this.cityId = cityId;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<com.sakiladb.data.Address> addresses) {
        this.addresses = addresses;
    }

}
