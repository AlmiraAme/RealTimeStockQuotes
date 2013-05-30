function StockView(){var b=24;
var a=4;
this.buildStockTable=function(d){var e=document.createElement("table");
var c=document.createElement("tbody");
this.createRows(c,d);
e.appendChild(c);
document.body.appendChild(e)
};
this.createRows=function(c,e){for(var d=0;
d<=b;
d++){var f=document.createElement("tr");
if(d===0){this.createHeaders(f)
}else{f.id=e[d-1].stock[0];
this.createCells(f,e[d-1].stock)
}c.appendChild(f)
}};
this.createHeaders=function(g){var e=["Name","Rate","Change +/-","%+/-"];
for(var d=0;
d<a;
d++){var c=document.createElement("th");
var f=document.createTextNode(e[d]);
c.appendChild(f);
g.appendChild(c)
}};
this.createCells=function(e,g){for(var c=0;
c<a;
c++){var f=document.createElement("td");
var d=document.createTextNode(g[c]);
this.setBackgroundColor(g,e);
f.appendChild(d);
e.appendChild(f)
}};
this.setBackgroundColor=function(e,d){var c=2;
if(e[c]===0){d.className="noChange"
}else{if(e[c]>0){d.className="up"
}else{if(e[c]<0){d.className="down"
}}}};
this.updateTable=function(e){for(var d=0;
d<b;
d++){for(var c=0;
c<a;
c++){this.setChangedValues(c,e[d].stock)
}}};
this.setChangedValues=function(e,f){var c=(document.getElementById(f[0])).childNodes[e];
var d=document.getElementById(f[0]).childNodes[e].textContent;
if(d!==f[e]){var g=document.createTextNode(f[e]);
this.setBackgroundColor(f,(document.getElementById(f[0])));
this.checkIfHasText(c);
c.appendChild(g)
}};
this.checkIfHasText=function(d){var c=d.childNodes[0];
if(c!==null){d.removeChild(c)
}}
};