/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de Timer,
 * De Timer kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De timer class/object is er om de timer te starten zodat de data steeds wordt geupdate.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 *
 * Used site: http://www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/
 * @constructor : Constructor van de Timer class.
 */
function Timer(){
    /**
     * Het aantal seconde/minuten/uren dat de informatie moet worden geupdate.
     * @type {Number} : het aantal seconde/minuten/uren.
     */
    var delayTime = 5000;

    /**
     * De functie start is om de interval te starten,
     * De stockprovider moet meegegeven worden om de data steeds te updaten.
     * @param stockprovider : de stockprovider dat wordt meegegeven door de constructor waar de yahoo of local wordt opgehaald.
     */
    this.start = function(stockprovider){
        this.interval = setInterval( stockprovider.getData, delayTime);
    };

    /**
     * Deze functie kan de interval stoppen.
     */
    this.stop = function(){
        clearInterval(this.interval);
    };

}