var Xray = require('x-ray');
var fs = require('fs');
var Monitor = require('monitor');
var processMonitor = new Monitor({probeClass:'Process'});

// Now connect the monitor
processMonitor.connect(function(error) {
  if (error) {
    console.error('Error connecting with the process probe: ', error);
    process.exit(1);
  }
});



//console.log(processMonitor.toJSON());
var wstream = fs.createWriteStream('results.json',{flags: 'a'});

var x = Xray();
//.driver(phantom());
/*
var t = x('http://www.resto.fr/restaurants/france?searchPage=332&randomSeed=-1188518655','.businessCard'
,[{
name: '@data-restaurant-name',
lat: '@data-restaurant-latitude',
lon: '@data-restaurant-longitude',
link: 'a@href'
//d: x('a@href', '.address'),
//tel: x('a@href', '.address span'),
//site: x('a@href', '.gotosite a@href')

}]
)
.paginate(".pagination a:nth-child(6)@href")
.limit(20)
*/
var t = x('http://www.resto.fr/restaurants/france?searchPage=332&randomSeed=-1188518655','.businessCard',[{
name: '@data-restaurant-name',
lat: '@data-restaurant-latitude',
lon: '@data-restaurant-longitude',
link: 'a@href'
//d: x('a@href', '.address'),
//tel: x('a@href', '.address span'),
//site: x('a@href', '.gotosite a@href')

}])(function(err,obj){
  console.log(obj);
  console.log("free memory:"+processMonitor.get('freemem'));

});
t.paginate(".pagination a:nth-child(6)@href").limit(1);

/*
t.write().pipe(wstream);
*/
