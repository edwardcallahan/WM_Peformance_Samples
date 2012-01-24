
package com.sakiladb.data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Film
 *  01/23/2012 16:45:13
 * 
 */
public class Film {

    private Short filmId;
    private com.sakiladb.data.Language languageByOriginalLanguageId;
    private com.sakiladb.data.Language languageByLanguageId;
    private String title;
    private String description;
    private Date releaseYear;
    private Byte rentalDuration;
    private BigDecimal rentalRate;
    private Short length;
    private BigDecimal replacementCost;
    private String rating;
    private String specialFeatures;
    private Date lastUpdate;
    private Set<com.sakiladb.data.FilmActor> filmActors = new HashSet<com.sakiladb.data.FilmActor>();
    private Set<com.sakiladb.data.FilmCategory> filmCategories = new HashSet<com.sakiladb.data.FilmCategory>();
    private Set<com.sakiladb.data.Inventory> inventories = new HashSet<com.sakiladb.data.Inventory>();

    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    public com.sakiladb.data.Language getLanguageByOriginalLanguageId() {
        return languageByOriginalLanguageId;
    }

    public void setLanguageByOriginalLanguageId(com.sakiladb.data.Language languageByOriginalLanguageId) {
        this.languageByOriginalLanguageId = languageByOriginalLanguageId;
    }

    public com.sakiladb.data.Language getLanguageByLanguageId() {
        return languageByLanguageId;
    }

    public void setLanguageByLanguageId(com.sakiladb.data.Language languageByLanguageId) {
        this.languageByLanguageId = languageByLanguageId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Date releaseYear) {
        this.releaseYear = releaseYear;
    }

    public Byte getRentalDuration() {
        return rentalDuration;
    }

    public void setRentalDuration(Byte rentalDuration) {
        this.rentalDuration = rentalDuration;
    }

    public BigDecimal getRentalRate() {
        return rentalRate;
    }

    public void setRentalRate(BigDecimal rentalRate) {
        this.rentalRate = rentalRate;
    }

    public Short getLength() {
        return length;
    }

    public void setLength(Short length) {
        this.length = length;
    }

    public BigDecimal getReplacementCost() {
        return replacementCost;
    }

    public void setReplacementCost(BigDecimal replacementCost) {
        this.replacementCost = replacementCost;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getSpecialFeatures() {
        return specialFeatures;
    }

    public void setSpecialFeatures(String specialFeatures) {
        this.specialFeatures = specialFeatures;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.FilmActor> getFilmActors() {
        return filmActors;
    }

    public void setFilmActors(Set<com.sakiladb.data.FilmActor> filmActors) {
        this.filmActors = filmActors;
    }

    public Set<com.sakiladb.data.FilmCategory> getFilmCategories() {
        return filmCategories;
    }

    public void setFilmCategories(Set<com.sakiladb.data.FilmCategory> filmCategories) {
        this.filmCategories = filmCategories;
    }

    public Set<com.sakiladb.data.Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(Set<com.sakiladb.data.Inventory> inventories) {
        this.inventories = inventories;
    }

}
