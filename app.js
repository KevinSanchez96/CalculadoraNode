const Chance = require('chance');

const chance = new Chance();

const NombreRandom = chance.name();
const EdadRandom = chance.age();
const EmailRandom = chance.email();

console.log("Nombre Aleatorio :",NombreRandom);
console.log("Edad Aleatorio : ",EdadRandom);
console.log("Email Random :",EmailRandom);
