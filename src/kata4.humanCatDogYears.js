const humanCatDogYears = number => {



let hcd = [];



if(number === 1) {
     hcd = [1, 15, 15];
} else if(number === 2) {
     hcd =[2, 24, 24];
     
} else if(number > 2) {
     hcd[0]= number;
     hcd[1] = (number - 2) * 4 + 24;
    hcd[2] = (number - 2) * 5 + 24;

}
return hcd;



};

module.exports = humanCatDogYears;
