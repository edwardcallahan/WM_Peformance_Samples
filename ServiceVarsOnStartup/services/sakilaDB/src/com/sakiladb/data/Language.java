
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Language
 *  01/23/2012 16:45:13
 * 
 */
public class Language {

    private Byte languageId;
    private String name;
    private Date lastUpdate;
    private Set<com.sakiladb.data.Film> filmsForOriginalLanguageId = new HashSet<com.sakiladb.data.Film>();
    private Set<com.sakiladb.data.Film> filmsForLanguageId = new HashSet<com.sakiladb.data.Film>();

    public Byte getLanguageId() {
        return languageId;
    }

    public void setLanguageId(Byte languageId) {
        this.languageId = languageId;
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

    public Set<com.sakiladb.data.Film> getFilmsForOriginalLanguageId() {
        return filmsForOriginalLanguageId;
    }

    public void setFilmsForOriginalLanguageId(Set<com.sakiladb.data.Film> filmsForOriginalLanguageId) {
        this.filmsForOriginalLanguageId = filmsForOriginalLanguageId;
    }

    public Set<com.sakiladb.data.Film> getFilmsForLanguageId() {
        return filmsForLanguageId;
    }

    public void setFilmsForLanguageId(Set<com.sakiladb.data.Film> filmsForLanguageId) {
        this.filmsForLanguageId = filmsForLanguageId;
    }

}
