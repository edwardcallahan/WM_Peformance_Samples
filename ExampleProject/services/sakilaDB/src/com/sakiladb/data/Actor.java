
package com.sakiladb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  sakilaDB.Actor
 *  01/24/2012 10:56:57
 * 
 */
public class Actor {

    private Short actorId;
    private String firstName;
    private String lastName;
    private Date lastUpdate;
    private Set<com.sakiladb.data.FilmActor> filmActors = new HashSet<com.sakiladb.data.FilmActor>();

    public Short getActorId() {
        return actorId;
    }

    public void setActorId(Short actorId) {
        this.actorId = actorId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

}
