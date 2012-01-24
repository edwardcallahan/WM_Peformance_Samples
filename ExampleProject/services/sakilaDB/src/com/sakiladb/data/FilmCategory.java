
package com.sakiladb.data;

import java.util.Date;


/**
 *  sakilaDB.FilmCategory
 *  01/24/2012 10:56:58
 * 
 */
public class FilmCategory {

    private FilmCategoryId id;
    private Film film;
    private Category category;
    private Date lastUpdate;

    public FilmCategoryId getId() {
        return id;
    }

    public void setId(FilmCategoryId id) {
        this.id = id;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

}
