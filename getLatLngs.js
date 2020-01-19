var lastVisitedCities = require('./places/2609.json');

var filtered = lastVisitedCities.filter(el=> el.countryCode==='BR')

const colorxjs = require('colorxjs')

var intervalo = interval(3000);

var maps = require('./maps')

colorxjs.intervalo(3000, filtered.length.subscribe(tempo=>{

    var cityToSearch = filtered[tempo]['City']
    if(cityToSearch!=='(not set)'){
        maps.getLatLng(cityToSearch).then(res=>{
        })
    }
    

})
