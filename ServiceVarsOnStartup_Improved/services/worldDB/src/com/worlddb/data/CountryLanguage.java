
package com.worlddb.data;



/**
 *  worldDB.CountryLanguage
 *  01/23/2012 16:48:44
 * 
 */
public class CountryLanguage {

    private CountryLanguageId id;
    private String isOfficial;
    private Float percentage;

    public CountryLanguageId getId() {
        return id;
    }

    public void setId(CountryLanguageId id) {
        this.id = id;
    }

    public String getIsOfficial() {
        return isOfficial;
    }

    public void setIsOfficial(String isOfficial) {
        this.isOfficial = isOfficial;
    }

    public Float getPercentage() {
        return percentage;
    }

    public void setPercentage(Float percentage) {
        this.percentage = percentage;
    }

}
