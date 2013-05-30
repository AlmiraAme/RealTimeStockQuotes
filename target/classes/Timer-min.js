function Timer(){var a=5000;
this.start=function(b){this.interval=setInterval(b.getData,a)
};
this.stop=function(){clearInterval(this.interval)
}
};