var NewStocks;
function StockController(){randomizer=new Randomizer();
this.timer=new Timer();
view=new StockView();
stockprovider=new StockProvider();
function a(){NewStocks=randomizer.firstData();
view.buildStockTable(NewStocks)
}this.main=function(){a.call(this);
this.timer.start(stockprovider)
}
};