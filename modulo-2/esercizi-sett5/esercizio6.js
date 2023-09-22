// creare una serie di numeri e restituire quanti numeri pari
// sono presenti tra numeri dispari

//pseudo
//ciclo su arr
//creo count
//se è pari
//      count +1
//altrimenti lo confronto con res
//      se count > di res
//          res = count
//          altrimenti count = 0

function distanzaTraDispari(n) {
    let count = 0
    let res = 0
    for (let i = 0; i < n.length; i++) {
        const current = n[i];
        if (current % 2 == 0) {
            count = count + 1
        } else {
            if (count > res) {
                res = count
            } 
            count = 0
        }
    }
    return res
}
console.log(distanzaTraDispari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 17, 17, 17, 17]))