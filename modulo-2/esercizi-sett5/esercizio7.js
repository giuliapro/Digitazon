// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti
// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore


function largestSwap(n) {
    //traformare in stringa n
    //estrarre sN[1] e sn[0]
    //metterli nelle posiioni invertite rispetto all'originale
    //trasformare sN in numero
    //confronto se maggiore o minore e ritorno true/false

    let sN = n + ''
    let sNinvertito = sN[1] + sN[0]
    let nInvertito = Number(sNinvertito) // metodo per trasformare stringa in numero
    return n > nInvertito

}

console.log(largestSwap(76))