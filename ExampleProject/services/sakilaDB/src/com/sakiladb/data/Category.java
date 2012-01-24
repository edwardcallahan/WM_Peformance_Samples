
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Category
 *  01/24/2012 10:56:58
 * 
 */
public class Category {

    private Byte categoryId;
    private String name;
    private Date lastUpdate;
    private Set<com.sakiladb.data.FilmCategory> filmCategories = new HashSet<com.sakiladb.data.FilmCategory>();

    public Byte getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Byte categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Set<com.sakiladb.data.FilmCategory> getFilmCategories() {
        return filmCategories;
    }

    public void setFilmCategories(Set<com.sakiladb.data.FilmCategory> filmCategories) {
        this.filmCategories = filmCategories;
    }

}
