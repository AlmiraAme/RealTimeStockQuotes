/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de StockModel,
 * De StockModel kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * Wanneer een nieuwe stockmodel wordt gemaat moet de naam, prijs, verandering en procenten worden meegegven,
 * zodat er een nieuwe stock array kan worden aangemaakt.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @param name : Naam/symbool van een bedrijf.
 * @param price : De prijs van een bedrijf.
 * @param change : De verandering van een bedrijf.
 * @param changePrecentage : De verandering in procenten van een bedrijf.
 * @constructor : Constructor van de StockModel class.
 */
function StockModel(name,price, change, changePrecentage){
    /**
     * Een array met de stock informatie in (array prototype stock van de stockmodel.
     * @type {Array}
     */
    this.stock = [name,parseFloat(price),parseFloat(change),changePrecentage];
}