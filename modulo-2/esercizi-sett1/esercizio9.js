// fare una sorta di quadrato strano boh con delle sequenze orizzontali e verticali

let max = 5;
let min = 1;
let num = "";
let k = max;
let numf = "";

for (let i = min; i <= max; i++) {
    if (i == min) { // oooo ocio doppio uguale non singolo !!!
        for (let start = min; start <= max; start++) {
            num = num + start
        }
        console.log(num)
    }
    if (i > min && i < max) {
        let row = "" + i
        for (let j = 0; j < (max - 2); j++) { // qua gli stiamo dicendo di generare max - 2 spazi ogni volta che entra nel for
            row = row + " "
        }
        k = k - 1 // basta solo la variabile perché all'interno di questo if passa 3 volte con i valori 2, 3 e 4
        // se inseriamo qua il codice ripeterà l'istruzione per 3 volte
        row = row + k
        console.log(row)
    }
    if (i == max) {
        for (let end = max; end >= min; end--) {
            numf = numf + end
        }
        console.log(numf)
    }
}