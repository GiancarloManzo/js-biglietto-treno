const km = prompt("quanti km vuoi percorrere?");
const eta = prompt("quanti anni hai?");

const kmNumber = parseInt(km);
const etaNumber = parseInt(eta);
console.log(kmNumber, typeof kmNumber);
console.log(etaNumber, typeof etaNumber);

const prezzoPerKm = 0.21;
const prezzoBase = kmNumber * prezzoPerKm;
console.log("km:", kmNumber);
console.log("eta", etaNumber);

console.log("prezzoPerKm:", prezzoPerKm, typeof prezzoPerKm);
console.log("prezzoBase:", prezzoBase, typeof prezzoBase);

let sconto = 0;

if (etaNumber < 18) {
  sconto = 0.2;
} else if (etaNumber > 65) {
  sconto = 0.4;
}
const prezzoFinale = prezzoBase - prezzoBase * sconto;
const prezzoFormattato = prezzoFinale.toFixed(2);

console.log("il prezzo finale del biglietto è : $" + prezzoFormattato);
