/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * version: 1.0
 */

/**
 * Dit is de array met alle stocks.
 */
var NewStocks;

/**
 * Dit is de constructor van de StockController,
 * De stockcontroller kan zo vaak als je wil worden gemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * Ook gebruik ik de model view controller pattern dit omdat het gestructureerd wordt en makkelijk te begrijpen,
 * de controller roept de view aan en set een timer,
 * De Controller maakt een stockprovider aan en geeft dit door aan de methode start van het object Time.
 * De stockprovider is een factory die of een localhelper terug geeft of een yahoohelper, wanneer er nieuwe data is aangemaakt wordt de view geupdate.
 * @constructor : Constructor van de StockController class.
 */
function StockController(){
    /**
     * Hier wordt een nieuwe "instantie/class" class aangemaakt van een randomizer.
     * @type {Randomizer}
     */
    randomizer = new Randomizer();

    /**
     * Hier wordt een nieuwe "instantie/class" class aangemaakt van een timer.
     * @type {Timer}
     */
    this.timer = new Timer();

    /**
     * Hier wordt een nieuwe "instantie/class" class aangemaakt van een stockview;
     * Dit wordt gemaakt om een mvc pattern te gebruiken
     * @type {StockView}
     */
    view = new StockView();

    /**
     *  Hier wordt een nieuwe "instantie/class" class aangemaakt van een stockprovider;
     * @type {StockProvider}
     */
    stockprovider = new StockProvider();

    /**
     * Dit is een functie die alleen wordt gebruikt in de stockprovider.
     * Ik wil ook niet dat andere objecten deze functie kunnen oproepen.
     * Deze functie set eerst de nieuwe stocks,
     * waarbij de default data wordt opgehaald door de functie firstData op te roepen van de randomizer.
     *  Dan geeft de controller door aan de view (door de methode buildstocktable waarbij de stocks worden meegegeven) dat een tabel met data moet worden gemaakt.
     */
    function buildPage() {
        NewStocks = randomizer.firstData();
        view.buildStockTable(NewStocks);
    }

    /**
     * Dit is de main function, eerst wordt de buildpage opgeroepen om de tabel ta maken.
     * Daarna wordt de timer gestart door de class timer op te roepen en zijn start methode.
     * De stockprovider wordt meegegeven aan de start methode,
     * dit zodat de methode getdata van de stockprovider steeds kan worden aangeroepen om de 5 seconde.
     */
    this.main = function(){
        buildPage.call(this);
        this.timer.start(stockprovider);
    };
}

