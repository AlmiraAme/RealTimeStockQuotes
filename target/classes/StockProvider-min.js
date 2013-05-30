function StockProvider(){yahoo=new YahooAjaxHelper();
local=new LocalHelper();
var b=1;
function a(f){var d=10;
var e=20;
var c=1;
this.getData=function(){f++;
if(f<=d){return local.getStockData()
}else{if(f===e){f=c
}return yahoo.getStockData()
}}
}a.call(this,b)
};