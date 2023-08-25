// stampare i numeri da 0 a 10 orizzontalmente per 3 volte


for (let i = 0; i < 3; i++) {
    let o = "" // va dichiarata a questo livello di specificità
    // vogliamo che ad ogni iterazione o ritorni allo stato iniziale, cioè allo stato di stringa vuota
    for (let count = 0; count <= 10; count++) {
        o = o + count // così abbiamo accumulato count dentro la stringa o, dentro la quale automaticamente entrano i numeri
    }
    console.log(o)
}