// boh fiori e rampicanti
// es. fiore: ---@ (fiore lungo 3)
// rampicante: struttura ricorsiva, per ogni fiore al suo interno
// ci sono altri due fiori ai lati che sono lunghi la sua metà
// es. rampicante:
// -@
// --@
// -@
// ----@ (rampicante lungo 4)
// -@
// --@
// -@

function creaFiore(lunghezza) {
    if (lunghezza === 0) {
        return ''
    }
    return '-'.repeat(lunghezza) + '@'
}

function creaRampicante(lunghezza) {
    if (lunghezza < 1) {
        return
    }
    creaRampicante(lunghezza/2)
    console.log(creaFiore(lunghezza))
    creaRampicante(lunghezza/2)
}

console.log(creaRampicante(4))
