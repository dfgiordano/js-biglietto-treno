// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var percorso = prompt("Quanti km devi percorerre?");
//console.log("Durata del viaggio: " + percorso + " km");
var eta = prompt("Quanti anni hai?");
//console.log("Età del passeggero " + eta + " anni");
//trasformazione stringhe in numeri
var percorsoInNumero = parseInt(percorso);
//console.log(percorsoInNumero + " km");
var etaInNumero = parseInt(eta);
//console.log(etaInNumero + " anni");
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = percorso * 0.21 ;
//console.log(prezzo + " € prezzo del biglietto");
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if ( etaInNumero < 18 ) {
    var costoFinale = prezzo * 80 / 100 ;
    //console.log(costoFinale + " €");
} else if ( etaInNumero > 65 ) {
    var costoFinale = prezzo * 60 / 100 ; 
    //console.log(costoFinale + " €"); 
} else {
    var costoFinale = prezzo;
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//convertire in decimale
var costoFinale = costoFinale.toFixed (2);
//output pagina
document.getElementById("costo_finale").innerHTML = costoFinale + " € E' il costo del tuo biglietto.";
