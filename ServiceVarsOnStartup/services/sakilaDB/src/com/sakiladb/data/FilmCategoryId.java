
package com.sakiladb.data;

import java.io.Serializable;


/**
 *  sakilaDB.FilmCategoryId
 *  01/23/2012 16:45:13
 * 
 */
public class FilmCategoryId
    implements Serializable
{

    private Short filmId;
    private Byte categoryId;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof FilmCategoryId)) {
            return false;
        }
        FilmCategoryId other = ((FilmCategoryId) o);
        if (this.filmId == null) {
            if (other.filmId!= null) {
                return false;
            }
        } else {
            if (!this.filmId.equals(other.filmId)) {
                return false;
            }
        }
        if (this.categoryId == null) {
            if (other.categoryId!= null) {
                return false;
            }
        } else {
            if (!this.categoryId.equals(other.categoryId)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.filmId!= null) {
            rtn = (rtn + this.filmId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.categoryId!= null) {
            rtn = (rtn + this.categoryId.hashCode());
        }
        return rtn;
    }

    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    public Byte getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Byte categoryId) {
        this.categoryId = categoryId;
    }

}
