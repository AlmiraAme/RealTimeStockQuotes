/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de Randomzier,
 * De Randomizer kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De Randomizer is er om random data te maken en dit te updaten.
 * Ook wordt er default data gemaakt met de methode firstdata.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @constructor : Constructor van de Randomizer class.
 */
function Randomizer(){
    /**
     * De firstData functie is een prototype functie van de randomizer.
     * Eerst wordt er een lege array gemaakt voor de defaultData variable.
     * Dan zet ik voor de namen, prijs, verandering en verandering in procenten een array met vaste data.
     * Dan wordt een methode createDefaultStock opgeroepen en de array's worden meegegeven.
     * De createdefault set alle data's als een stock in een array en geeft dit meet.
     * @return {Array} : Dit is een array lijst met de default data.
     */
    this.firstData= function (){
        var defaultData = [];
        var names = ["BCS","STT","JPM","LGEN.L","UBS","DB","BEN","CS","BK","KN.PA","GS","LM","MS","MTU","NTRS","GLE.PA","BAC","AV","SDR.L","SLF","SL.L","NMR","ING","BNP.PA"];
        var prices = [18.03,60.73,49.10,171.30,15.53,42.04,149.27,29.50,28.27,3.183,150.03,32.04,22.65,6.18,54.72,28.19,12.79,10.00,2137.00,29.50,369.70,6.37,7.93,42.24];
        var changes = [-0.05,1.27,-0.08,0.80,-0.07,0.22,1.24,0.09,0.05,0.00,1.29,0.42,0.35,0.06,0.56,0.35,0.07,0.001,38.00,0.12,1.90,0.16,0.10,1.28];
        var changeInPercentages = [-0.28+"%",2.14+"%",-0.16+"%",0.47+"%",-0.45+"%",0.53+"%",0.84+"%",0.33+"%",0.18+"%",0.00+"%",0.87+"%",1.34+"%",1.56+"%",1.00+"%",1.04+"%",1.26+"%",0.55+"%",0.01+"%",1.81+"%",0.44+"%",0.52+"%",2.66+"%",1.28+"%",3.14+"%"];
        createDefaultStock.call(this,defaultData, names, prices, changes, changeInPercentages);
        return defaultData;
    };

    /**
     * Dit is de functie createDefaultStock,
     * Eerst wordt hij in een loop gezet om door alle data te gaan,
     * Voor elke index (i) wordt er een nieuwe StockModel gemaakt,
     * de waardes worden meegegeven aan de Stockmodel zodat er stocks worden gemaakt.
     * Elke stock worden dan opgeslagen en in de defaultData geset.
     * @param defaultData : De arraylijst voor de default data.
     * @param names : De arraylijst  met de namen van alle bedrijven.
     * @param prices : De arraylijst  met de prijs per stock van alle bedrijven.
     * @param changes : De arraylijst  met de verandering per stock van alle bedrijven.
     * @param changeInPercentages : De arraylijst  met de verandering in procenten per stock van alle bedrijven.
     */
    function createDefaultStock(defaultData, names, prices, changes, changeInPercentages) {
        for (var i = 0; i < names.length; i++) {
            defaultData[i] = new StockModel(names[i], prices[i], changes[i], changeInPercentages[i]);
        }
    }

    /**
     * Dit is de functie generateRandomStocks (prototype functie van de Randomizer)
     * De oude stocks waar random data van gemaakt moet worden wordt meegegeven als parameter.
     * Eerst set ik alle variable voor de magic numbers, ook wordt er een array aangemaakt voor de nieuwe stocks.
     * Dan roep ik de functie createRandom aan en geef de oude stocks en overige variable mee.
     * Nadat de functie createrandom klaar is wordt de nieuwe stocks gereturnt
     *
     * @param oldStocks : De oude stocks;
     * @return {Array} : De nieuwe array met stocks met random waardes.
     */
    this.generateRandomStocks = function(oldStocks){
        /**
         * Maximale en minimale prijsverandering
         * @type {Number} : 3
         */
        var maxMinPrice=3;
        /**
         * Het aantal komma's achter de punt
         * @type {Number} : 100
         */
        var roundToDouble=100;
        /**
         * Gedeeld door hondert(maximale) procent.
         * @type {Number} 100
         */
        var percent = 100;
        /**
         * Een legearray waar de nieuwe stocks in moeten komen.
         * @type {Array} : array met nieuwe stocks.
         */
        var newStocks=[];
        createRandom.call(this,oldStocks, roundToDouble, maxMinPrice, percent, newStocks);
        return newStocks;
    };

    /**
     * Dit is de createRandom functie.
     * De variable oldStocks, roundToDouble, maxMinPrice, Percent, Newstocks moeten worden meegeven om de random stocks te maken.
     * Als eerst wordt er een loop gemaakt voor elke stock in de oude stock array ( om door elke stock heen te gaan)
     * De stock wordt er in een locale variable opgeslagen.
     * Eerst wordt er een nieuwe priceStock gemaakt door de functie getRandomPrice op te roepen en de return waarde op te slaan.
     * Dan wordt de verandering berekend, om ervoor de zorgen dat het een double wordt heb ik gebruik gemaakt van de website's hieronder.
     * De rekensom ja die ken ik nog van de middelbare school (wiskunde).
     * De verandering in procenten heb ik ook gebruik gemaakt van de math.round, De berekening ken ik van de middelbare school(economie)
     * Na elke stock wordt er dus de prijs verandert en de change + change in procent berekend en opgeslagen in de newStocks.
     * Voor elke nieuwe stock wordt er ook een nieuwe StockModel gemaakt en de variables meegegeven.
     *
     * Gebruikt: http://www.javascripter.net/faq/mathfunc.htm en -> http://www.javascripter.net/faq/rounding.htm
     * @param oldStocks : De array met oude stocks.
     * @param roundToDouble : Het aantal nummers dat achter de komma mag.
     * @param maxMinPrice : maximale/minimale price verandering.
     * @param percent : Het aantal procent.
     * @param newStocks : De array met nieuwe Stocks.
     */
    function createRandom(oldStocks, roundToDouble, maxMinPrice, percent, newStocks) {
        var priceIndex = 1;
        var symbolIndex = 0;
        for (var i = 0; i < oldStocks.length; i++) {
            var stock = oldStocks[i].stock;
            var newPriceStock = getRandomPrice.call(this, roundToDouble, stock[priceIndex], maxMinPrice);
            var newChange = Math.round(roundToDouble * (newPriceStock - stock[priceIndex])) / roundToDouble;
            var newChangePercent = Math.round(roundToDouble * (((newPriceStock - stock[priceIndex]) / stock[priceIndex]) * percent)) / roundToDouble + '%';
            newStocks[i] = new StockModel(stock[symbolIndex], newPriceStock, newChange, newChangePercent);
        }
    }

    /**
     * Dit is de getRandomPrice functie.
     * Deze functie is er om ervoor de zorgen dat de prijs niet gelijk of lager dan 0 is.
     * De prijs wordt random gemaakt en gerturnt
     *
     * @param roundToDouble : Het aantal nummers dat achter de komma mag.
     * @param stockPrice : de oude stockprijs.
     * @param maxMinPrice : maximale/minimale price verandering.
     * @return {Number} : de nieuwe prijs van de stock;
     */
    function getRandomPrice(roundToDouble, stockPrice, maxMinPrice) {
        var price = Math.round(roundToDouble * (stockPrice + (Math.random() * (maxMinPrice - (-maxMinPrice))) + (-maxMinPrice))) / roundToDouble;
        while (price <= 0) {
            price = Math.round(roundToDouble * (stockPrice + (Math.random() * (maxMinPrice - (-maxMinPrice))) + (-maxMinPrice))) / roundToDouble;
        }
        return price;
    }
}