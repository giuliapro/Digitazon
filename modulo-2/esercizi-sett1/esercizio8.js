// stampare i numeri da 0 a 10 orizzontalmente per 6 volte
// ma le volte che sono pari (seconda, quarta, sesta) devono andare da 10 a 0

for (let i = 0; i < 6; i++) {
    let o = ""
    let j = 0
    if (i % 2 == 0) { // le istruzioni sono al contrario perché la prima volta che appare il sistema la legge 0, quindi che soddisfa questa condizione
        for (j = 0; j <= 10; j++) {
            o = o + j
        }
    } else {
        for (j = 10; j >= 0; j--) {
            o = o + j
        }
    }
    console.log(o)
}