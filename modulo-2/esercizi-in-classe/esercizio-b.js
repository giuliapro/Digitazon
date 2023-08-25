// date due variabili n e m stampare a video tutti i numeri inclusi nell'intervallo
// notare che non e' detto che n < m

let n = 20
let m = 40

if (n < m) {
    for (let i = n; i <= m; i++) {
        console.log(i)
    }
} else {
    for (let i = m; i <= n; i++) {
        console.log(i)
    }
}

