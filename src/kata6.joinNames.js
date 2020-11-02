const joinNames = namesObj => {
return namesObj.map(x => x.name).join(", ").replace(/,(?=[^,]*$)/, ' &');

};

module.exports = joinNames;

/*
const joinNames = namesObj => {
let nM = namesObj.map(x => x.name).join(", ");
return nM.replace(/,(?=[^,]*$)/, ' &');
*/

