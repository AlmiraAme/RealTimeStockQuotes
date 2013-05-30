/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de StockProvider,
 * De StockProvider kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De stockProvider is een factory pattern.
 * De stockprovider geeft een nieuwe Localhelper of YahooAjaxHelper door de functie getData op te roepen.
 * In mijn geval set ik al wanneer ik de yahoo wil of de local. Dit doe ik door ze om de 10 keer te wisselen.
 * Dus 10 keer geef ik de local dan 10 keer de yahoo en dit steeds om en om.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @constructor : Constructor van de StockProvider class.
 */
function StockProvider(){
    /**
     * Maakt een nieuwe YahooAjaxHelper aan en zet dat in de variable yahoo.
     * @type {YahooAjaxHelper} : Geeft een YahooAjaxHelper "class/object".
     */
    yahoo = new YahooAjaxHelper();

    /**
     * Maakt een nieuwe LocalHelper aan en zet dat in de variable local.
     * @type {LocalHelper} : Geeft een LocalHelper "class/object".
     */
    local = new LocalHelper();

    /**
     * Dit is om bij te houden het aantal keer dat de methode getdata is aan geroepen,
     * zodat er om en om de yahoo en local helpers worden gereturnt
     * @type {Number} : count begint met 1.
     */
    var count = 1;

    /**
     * De functie getData is om een nieuwe yahoo of local helper te returnen .
     * Na elke keer dat de functie wordt aangeroepen gaat de count omhoog.
     * Dan wordt er een if en else gezet, wanneer de getdata 10 keer is aangeroepen (die local mee geeft) geeft hij de yahoo terug.
     * Nadat de functie 20 keer is aangeroepen wordt de count gereset en zo geeft de StockProvider factory om en om de local en yahoo en roept de getStockData functie aan.
     *
     * @param count : het aantal keer dat getdata is opgeroepen.
     */
    function getData(count) {
        /**
         * Eerst 10 keer dat data wordt opgeroepen voor de local;
         * @type {Number} : 10 keer.
         */
        var localCount = 10;
        /**
         * de volgende 10 keer (maximum is dan dus 20 keer) voor de yahoo;
         * @type {Number} : 20e keer.
         */
        var yahooCount = 20;
        /**
         * reset de count terug naar 1
         * @type {Number} :  1 (gereset weer naar het begin)
         */
        var resetCount = 1;
        /**
         * hier wordt de functie getdata aangeroepen voor het returnen van de local of yahoo helper.
         * @return {*} Het hang van de count af wat hij returnt, of de local.getStockData() of de yahoo.getStockData
         */
        this.getData = function () {
            count++;
            if (count <= localCount) {
                return local.getStockData();
            }
            else {
                if (count === yahooCount) {
                    count = resetCount;
                }
                return yahoo.getStockData();
            }
        };
    }

    /**
     * Wanneer de functie getData wordt opgeroepen geeft hij de count mee.
     */
    getData.call(this, count);
}
