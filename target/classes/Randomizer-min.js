function Randomizer(){this.firstData=function(){var d=[];
var h=["BCS","STT","JPM","LGEN.L","UBS","DB","BEN","CS","BK","KN.PA","GS","LM","MS","MTU","NTRS","GLE.PA","BAC","AV","SDR.L","SLF","SL.L","NMR","ING","BNP.PA"];
var f=[18.03,60.73,49.1,171.3,15.53,42.04,149.27,29.5,28.27,3.183,150.03,32.04,22.65,6.18,54.72,28.19,12.79,10,2137,29.5,369.7,6.37,7.93,42.24];
var g=[-0.05,1.27,-0.08,0.8,-0.07,0.22,1.24,0.09,0.05,0,1.29,0.42,0.35,0.06,0.56,0.35,0.07,0.001,38,0.12,1.9,0.16,0.1,1.28];
var e=[-0.28+"%",2.14+"%",-0.16+"%",0.47+"%",-0.45+"%",0.53+"%",0.84+"%",0.33+"%",0.18+"%",0+"%",0.87+"%",1.34+"%",1.56+"%",1+"%",1.04+"%",1.26+"%",0.55+"%",0.01+"%",1.81+"%",0.44+"%",0.52+"%",2.66+"%",1.28+"%",3.14+"%"];
c.call(this,d,h,f,g,e);
return d
};
function c(d,j,g,h,f){for(var e=0;
e<j.length;
e++){d[e]=new StockModel(j[e],g[e],h[e],f[e])
}}this.generateRandomStocks=function(g){var d=3;
var e=100;
var f=100;
var h=[];
a.call(this,g,e,d,f,h);
return h
};
function a(g,j,f,k,l){var h=1;
var o=0;
for(var d=0;
d<g.length;
d++){var n=g[d].stock;
var e=b.call(this,j,n[h],f);
var p=Math.round(j*(e-n[h]))/j;
var m=Math.round(j*(((e-n[h])/n[h])*k))/j+"%";
l[d]=new StockModel(n[o],e,p,m)
}}function b(e,g,d){var f=Math.round(e*(g+(Math.random()*(d-(-d)))+(-d)))/e;
while(f<=0){f=Math.round(e*(g+(Math.random()*(d-(-d)))+(-d)))/e
}return f
}};