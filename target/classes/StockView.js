/**
 * Created with JetBrains PhpStorm.
 * User: Almira
 * Version: 1.0
 */

/**
 * Dit is de constructor van de StockView,
 * De StockView kan zo vaak als je wil worden aangemaakt.
 * Ik maak er een constructor van om een specifieke object van te maken die zijn eigen methodes en variabels heeft.
 * De Stockview is er om een tabel te maken met data erin maar ook om de tabel te updaten indien de stocks zijn verandert.
 *
 * De reden dat ik alle functies en variables in de constructor zet is om het zoveel mogenlijk op een class te laten lijken met zijn eigen methodes/variables.
 * Om het erin te zetten zien het er ook meer uit als een class.
 * @constructor : Constructor van de StockView class.
 */
function StockView(){
    /**
     * Het Aantal bedrijven (stocks).
     * @type {Number} : 24 bedrijven.
     */
    var numberOfCompanies = 24;

    /**
     * het aantal kolommen.
     * @type {Number} : 4 is het aantal kolommen dat een rij mag hebben.
     */
    var numberOfColoms = 4;

    /**
     * Hier wordt een stock table gemaakt met data erin.
     * Eerst wordt er een tabel gemaakt en een tbody,
     * Dat worden er rijen gemaakt door de functie createrows te roepen waarin de cellen worden ingezet in de rijen.
     * Nadat de rijen met cellen in de tbody zitten word de tbody in de tabel geplaats en de tabel in de body.
     * @param arraylist : arraylijst met de default stocks.
     */
    this.buildStockTable = function(arraylist){
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        this.createRows(tbody,arraylist);
        table.appendChild(tbody);
        document.body.appendChild(table);
    };

    /**
     * Dit is de functie createRows dit et aantal rijen creert die er nodig zijn( voor alle bedrijven).
     * Eerst wordt eer een loop gemaakt voor het aantal bedrijven waarbij de rijen eerst worden gemaakt.
     * Éen rij wordt er extra gemaakt voor de header row.
     * Eerst worden de headers gemaakt en in de eerst rij geplaatst.
     * Nadat de headers zijn geplaatst worden de overige cellen gecreërt door de functie createCells te roepen.
     * Aan de functie geef je elke rij mee met de stock die erin moet worden geset.
     * Nadat de cellen zijn gemaakt word elk rij in de tbody gezet.
     * @param tbody : De tbody van de tabel
     * @param allStocks : de arraylist met de default stocks.
     */
    this.createRows = function(tbody, allStocks) {
        for (var i = 0; i <= numberOfCompanies; i++) {
            var row = document.createElement('tr');

            if (i === 0) {
                this.createHeaders(row);
            } else {
                row.id = allStocks[i-1].stock[0];
                this.createCells(row, allStocks[i-1].stock);
            }
            tbody.appendChild(row);
        }
    };

    /**
     * Dit is de functie createHeaders waar de headers worden gemaakt van de tabel.
     * Eerst wordt er een loop gemaakt voor elk kolom.
     * Voor elk kolom wordt er een header gemaakt.
     * het aantal kolommen staan vast en de arraylijst met de headertekst.
     * Elke keer dat de header wordt gemaakt wordt de tekst ook gemaakt dan wordt de tekst in de headercel geplaatst en de headercel in de rij.
     * @param row : de rij in de tbody/tabel
     */
    this.createHeaders = function(row) {
        /**
         * Een arraylijst met de tekst dat in de header moet komen.
         * @type {Array} : een array met tekst dat in de header moet komen.
         */
        var textArray = ['Name','Rate', 'Change +/-', '%+/-'];
        for (var j = 0; j < numberOfColoms; j++) {
            var tableHeader = document.createElement('th');
            var text = document.createTextNode(textArray[j]);
            tableHeader.appendChild(text);
            row.appendChild(tableHeader);
        }
    };

    /**
     * Dit is de createCells functie waarbij de overige cellen worden gemaakt met de value erin.
     * De rij en de stock worden meegegeven.
     * Dit weer wordt gezet in de loop en eerst wordt de tablecell gecreeërt en daarna de value.
     * Dan wordt de achtergrond kleur geset aan de hand van de change.
     * Aan het einde wordt eerst de value/text in de tablecell gezet en de cell in de rij.
     *
     * @param row : de rij van de tabel/tbody waar de cellen in worden gezet.
     * @param stock : de stock waar de waardes van in de rij moeten worden gezet.
     */
    this.createCells = function(row, stock) {
        for (var k = 0; k < numberOfColoms; k++) {
            var tableCell = document.createElement('td');
            var text = document.createTextNode(stock[k]);
            this.setBackgroundColor(stock, row);
            tableCell.appendChild(text);
            row.appendChild(tableCell);
        }
    };

    /**
     * Dit is de SetBackgroundColor functie.
     * De stock en rij wordt meegegeven aan de functie om zo erachter te komen of de achtergrond kleur rood, groen of blauw moet worden.
     * Eerst wordt er gechecket of er geen verandering is (indien wel wordt de classname verandert naar noChange waarbij de achtergrondkleur blauw wordt)
     * Dan wordt er gechecket of er wel verandering is en dus groter dan 0 is(indien wel wordt de classname verandert naar Up waarbij de achtergrondkleur groen wordt)
     * Als laatst wordt er gechecket of er wel verandering is  maar kleiner dan 0 is(indien wel wordt de classname verandert naar Down waarbij de achtergrondkleur Rood wordt)
     * @param stock : de stock waarbij wordt gekeken of er verandering is in de prijs.
     * @param row : de rij waar de kleur van wordt verandert door behulp van verandering van classname.
     */
    this.setBackgroundColor = function(stock, row) {
        var changeIndex = 2;
        if (stock[changeIndex] === 0) {
            row.className = 'noChange';
        } else if (stock[changeIndex] > 0.00) {
            row.className = 'up';
        } else if (stock[changeIndex] < 0.00) {
            row.className = 'down';
        }
    };

    /**
     * De updateTable functie verandert de waarde in de cellen indien die verschillend zijn.
     * De nieuwe data wordt meegegeven om mee te vergelijken maar ook om de nieuwe data value in de tabel te zetten.
     * Eerst wordt er een loop gemaakt om door alle stocks heen te gaan en te updaten,
     * dan wordt er per rij gechecked of de colom value verandert zijn indien dit zo is wordt dit bijgewerkt in de tabel.(dit door de setChangedValues methode te roepen)
     * @param newdata : de nieuwe data dat in de tabel moet worden gezet(geupdate).
     */
    this.updateTable= function(newdata){
        for(var i = 0; i < numberOfCompanies ; i++){
            for(var j = 0; j < numberOfColoms ; j++) {
                this.setChangedValues(j, newdata[i].stock);
            }
        }
    };
    /**
     * Dit is de setChangedValues functie waarbij de nieuwe waarde wordt gechecked naar de waarde in de cell.
     * indien de waardes anders zijn word de cell waar de waarde anders in is verandert in de nieuwe waarde.
     * dit door de oude waarde te verwijderen en een nieuwe tekstnode te maken en in de cell te zetten.
     * ook wordt de achtergrondkleur van de rij geupdate door de functie setBackgroundcolor te roepen.
     * @param j : de index van de waarde die verandert moet worden indien nodig
     * @param newstock : de nieuwe stock.
     */
    this.setChangedValues = function(j, newstock) {
        var tablecell = (document.getElementById(newstock[0])).childNodes[j];
        var oldValue = document.getElementById(newstock[0]).childNodes[j].textContent;
        if (oldValue !== newstock[j]) {
            var newValue = document.createTextNode(newstock[j]);
            this.setBackgroundColor(newstock,(document.getElementById(newstock[0])));
            this.checkIfHasText(tablecell);
            tablecell.appendChild(newValue);
        }
    };

    /**
     * Dit is een extra check om te kijken of er een tekstelement in de cell zit, indien de value niet null is wordt de tekstnode verwijdert uit de cell.
     * @param tablecell : de cell waar de check moet worden gedaan.
     */
    this.checkIfHasText = function(tablecell) {
        var oldText = tablecell.childNodes[0];
        if (oldText !== null) {
            tablecell.removeChild(oldText);
        }
    };
}