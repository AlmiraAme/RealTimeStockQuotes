/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Date: 19-3-13
 * Version: 1.0
 */
/**
 * Dit is de constructor van de YahooAjaxHelper,
 * De YahooAjaxHelper kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De yahooAjaxHelper is om data van yahoo op te halen door middel van ajax en json.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @constructor : Constructor van de YahooAjaxHelper class.
 */
function YahooAjaxHelper(){
    /**
     * De status is OK
     * @type {Number} : wanneer de status ok is staat hij gelijk aan 200.
     */
    var OK = 200;
    /**
     * De readyState is gelijk aan 4 ( de Request is finished en Response is Ready)
     * @type {Number} : Wanneer der de Request is finished en Response is Ready staat hij gelijk aan 4;
     */
    var ReqFinischedResReady = 4;
    /**
     * Wanneer de status niet Multichoices wordt.
     * @type {Number} : Multichoiced staat gelijk aan 300.
     */
    var MultiChoices = 300;
    /**
     * De NotModified is wanneer de status dus nog niet gemotified is
     * @type {Number} : Wanneer de status notModified is staat hij gelijk aan 304.
     */
    var NotModified = 304;
    /**
     * arraylijst van de yahoostocks.
     * @type {Array} : De array waar de yahoostocks in zitten
     */
    var yahooStocksArray = [];

    /**
     * Dit is de functie getStockData waarbij een request wordt gestuurt om een json object op te halen.
     * Eerst wordt de url in een variable gezet. daarna wordt de xhr object gecreeërt en in de variable gezet.
     * Dan wordt de functie open opgeroepen met als request get en de url wordt meegegeven.
     * Wanneer de request klaar is en er is een response moet hij de stocks parsen door de functie parseStocks te roepen en de xhr.responseTest mee te geven.
     * Zodat de json kan worden geparsed en in een arraylijst kan worden gezet en deze dan te updaten met de functie updateTable van de StockView waarbij de newstocks wordt meegegeven.
     *
     * Used: book 2 editie hoofdstuk ajax en json.
     * Used site: http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
     * Used site: http://msdn.microsoft.com/en-us/library/windows/desktop/ms767625(v=vs.85).aspx
     */
    this.getStockData = function(){
        var url= "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3Dbcs%2Bstt%2Bjpm%2Blgen.l%2Bubs%2Bdb%2Bben%2Bcs%2Bbk%2Bkn.pa%2Bgs%2Blm%2Bms%2Bmtu%2Bntrs%2Bgle.pa%2Bbac%2Bav%2Bsdr.l%2Bslf%2Bsl.l%2Bnmr%2Bing%2Bbnp.pa%26f%3Dsb3c6p2%26e%E2%80%8C%E2%80%8B%3D.csv'&format=json";
        var xhr = createXHR.call(this);
        xhr.open("GET",url,true);
        xhr.onreadystatechange= function(){
            if (xhr.readyState === ReqFinischedResReady) {
                if (((xhr.status >= OK) && xhr.status < MultiChoices) || xhr.status === NotModified) {
                    yahooStocksArray = parseStocks.call(this,xhr.responseText);
                    if(yahooStocksArray!==null){
                        NewStocks = yahooStocksArray;
                        view.updateTable(NewStocks);
                    }
                }
            }
        };
        xhr.send(null);
    };

    /**
     * Hier wordt er gekeken welk browser je hebt normaal wordt het een nieuwe XMLHttpRequest().
     * Indien je een oudere versie hebt wordt de ActiveXObject meegegeven.
     * Used site: http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
     * @return {XMLHttpRequest}
     */
    function createXHR() {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            return xhr;
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            return xhr;
        }
    }

    /**
     * Hier worden de json geparsed en daaarna wordt er voor elke bedrijf een nieuwe StockModel gemaakt door de functie CreateStockArray op te roepen en de stocks mee te geven.
     * @param response De response die je krijgt (de responseText)
     * @return {*} Hij Returtn een array met alle nieuwgemaakte stocks.
     */
    function parseStocks(response) {
        response = JSON.parse(response);
        var stocks= response.query.results;
        stocks = stocks.row;
        stocks = createStockArray.call(this,stocks);
        return stocks;
    }

    /**
     * Hier word er voor alle stocks een stock (d.m.v een nieuwe StockModel te maken)aangemaakt en in een array gezet en gerturned.
     * @param stocks : Alle stocks waar een StockModel van gemaakt moet worden.
     * @return {Array} De array met alle stocks.
     */
    function createStockArray(stocks){
        var allStocks = [];
        for(var i = 0; i<stocks.length;i++){
            var stock = stocks[i];
            stock = new StockModel(stock.col0,stock.col1,stock.col2,stock.col3);
            allStocks[i] = stock;
        }
        return allStocks;
    }
}