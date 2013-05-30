/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de LocalHelper,
 * De LocalHelper kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De localhelper is er om random data te maken en dit te updaten.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @constructor : Constructor van de LocalHelper class.
 */
function LocalHelper(){
    /**
     * Hier wordt een object randomizer aangemaakt,
     * Deze randomizer wordt opgeslagen in de prototype van de localhelper
     * @type {Randomizer} : een nieuwe randomizer voor de localhelper.
     */
    this.randomizer = new Randomizer();

    /**
     * Hier wordt de data geupdate en verandert in de tabel.
     * Eerst wordt er nieuwe stocks gemaakt door de randomizer's methode generateRandomStocks.
     * De Newstocks worden meegegeven waarbij er random data van gemaakt en opgeslagen weer in de NewStocks.
     * Daarna word de view opgeroepen en wordt het tabel geupdate door de updatetable methode te roepen en de stocks mee te geven.
     */
    this.getStockData =  function(){
        NewStocks = this.randomizer.generateRandomStocks(NewStocks);
        view.updateTable(NewStocks);
    };
}