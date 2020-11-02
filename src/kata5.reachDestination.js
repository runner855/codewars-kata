const reachDestination = (distance, speed) => {

let eat = distance / speed;
let answer =  Math.ceil(eat * 2)/2;
return "I will be there in " + answer + " hours";

 


};

module.exports = reachDestination;

/*
function roundHalf(num) {
    return Math.round(num*2)/2;
}
*/
