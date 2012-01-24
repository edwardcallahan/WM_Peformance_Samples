
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Country
 *  01/24/2012 10:56:57
 * 
 */
public class Country {

    private Short countryId;
    private String country;
    private Date lastUpdate;
    private Set<com.sakiladb.data.City> cities = new HashSet<com.sakiladb.data.City>();

    public Short getCountryId() {
        return countryId;
    }

    public void setCountryId(Short countryId) {
        this.countryId = countryId;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.City> getCities() {
        return cities;
    }

    public void setCities(Set<com.sakiladb.data.City> cities) {
        this.cities = cities;
    }

}
