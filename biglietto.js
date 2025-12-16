const km = prompt("quanti km vuoi percorrere?");
const età = prompt("quanti anni hai?");

const kmNumber = parseInt(km);
const etàNumber = parseInt(età);
console.log(kmNumber, typeof kmNumber);
console.log(etàNumber, typeof etàNumber);

const prezzoPerKm = 0.21;
const prezzoBase = kmNumber * prezzoPerKm;
console.log("km:", kmNumber);
console.log("prezzoPerKm:", prezzoPerKm, typeof prezzoPerKm);
console.log("prezzoBase:", prezzoBase, typeof prezzoBase);
