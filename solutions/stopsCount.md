let stopsCount = busStops => {

    let totalPeople = 0;
  for (let i=0; i<busStops.length; i++) {
    for (let j=0; j < busStops.length; j++) {
      
}
 totalPeople += busStops[i][0];
 totalPeople -= busStops[i][1];
    
}
return totalPeople;

};

module.exports = stopsCount;
