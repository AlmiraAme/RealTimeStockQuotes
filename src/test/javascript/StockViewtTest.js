describe('The buildStockTable function',function(){
    it('should create table',function(){
        anRandomizer = new Randomizer();
        view = new StockView();
        var arraylijst = anRandomizer.firstData();
        view.buildStockTable(arraylijst);
        var expected = document.getElementsByTagName('table');
        expect(expected).toNotBe(null);
    });
});

describe('The updateTable function',function(){
    it('should update table with new data',function(){
        var arraylijstOld = anRandomizer.firstData();
        var arraylijstNew = anRandomizer.generateRandomStocks(arraylijstOld);
        view.buildStockTable(arraylijstOld);
        view.updateTable(arraylijstOld,arraylijstNew);
        var expected = document.getElementById('BCS');
        var value = expected.childNodes[3].firstChild.nodeValue;
        expect(expected).toNotBe("-0.28%");
    });
});

describe('The CreatRows function',function(){
    it('should create rows',function(){
        var stockview = new StockView();
        var arraylijst = anRandomizer.firstData();
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        stockview.createRows(tbody,arraylijst);
        table.appendChild(tbody);
        document.body.appendChild(table);
        var row = document.getElementById(arraylijst[0].stock[0]).id;
        expect(row).toBe("BCS");
    });
});

describe('The creatheaders function',function(){
    it('should create rows',function(){
        var stockview = new StockView();
        var arraylijst = anRandomizer.firstData();
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        var row = document.createElement('tr');
        tbody.appendChild(row);
        stockview.createHeaders(row);
        table.appendChild(tbody);
        document.body.appendChild(table);
        var result = document.getElementsByTagName('tr')[0].firstChild.textContent;
        expect(result).toBe("Name");
    });
});