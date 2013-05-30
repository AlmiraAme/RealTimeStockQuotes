function YahooAjaxHelper(){var f=200;
var h=4;
var d=300;
var b=304;
var c=[];
this.getStockData=function(){var i="http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3Dbcs%2Bstt%2Bjpm%2Blgen.l%2Bubs%2Bdb%2Bben%2Bcs%2Bbk%2Bkn.pa%2Bgs%2Blm%2Bms%2Bmtu%2Bntrs%2Bgle.pa%2Bbac%2Bav%2Bsdr.l%2Bslf%2Bsl.l%2Bnmr%2Bing%2Bbnp.pa%26f%3Dsb3c6p2%26e%E2%80%8C%E2%80%8B%3D.csv'&format=json";
var j=g.call(this);
j.open("GET",i,true);
j.onreadystatechange=function(){if(j.readyState===h){if(((j.status>=f)&&j.status<d)||j.status===b){c=e.call(this,j.responseText);
if(c!==null){NewStocks=c;
view.updateTable(NewStocks)
}}}};
j.send(null)
};
function g(){var i;
if(window.XMLHttpRequest){i=new XMLHttpRequest();
return i
}else{i=new ActiveXObject("Microsoft.XMLHTTP");
return i
}}function e(i){i=JSON.parse(i);
var j=i.query.results;
j=j.row;
j=a.call(this,j);
return j
}function a(l){var k=[];
for(var j=0;
j<l.length;
j++){var m=l[j];
m=new StockModel(m.col0,m.col1,m.col2,m.col3);
k[j]=m
}return k
}};