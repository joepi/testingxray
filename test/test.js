var Xray = require('x-ray');
var fs = require('fs');
var wstream = fs.createWriteStream('results.json',{flags: 'a'});

var x = Xray()
//.driver(phantom());
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
.limit(3)

t.write().pipe(wstream);
