
package com.worlddb.data;

import java.io.Serializable;


/**
 *  worldDB.CountryLanguageId
 *  01/23/2012 16:48:44
 * 
 */
public class CountryLanguageId
    implements Serializable
{

    private String countryCode;
    private String language;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof CountryLanguageId)) {
            return false;
        }
        CountryLanguageId other = ((CountryLanguageId) o);
        if (this.countryCode == null) {
            if (other.countryCode!= null) {
                return false;
            }
        } else {
            if (!this.countryCode.equals(other.countryCode)) {
                return false;
            }
        }
        if (this.language == null) {
            if (other.language!= null) {
                return false;
            }
        } else {
            if (!this.language.equals(other.language)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.countryCode!= null) {
            rtn = (rtn + this.countryCode.hashCode());
        }
        rtn = (rtn* 37);
        if (this.language!= null) {
            rtn = (rtn + this.language.hashCode());
        }
        return rtn;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

}
