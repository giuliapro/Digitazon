// data una stringa in ingresso s
// data una stringa in ingresso replace (presente in s)
// data una stringa in ingresso replacer
// sostituisco replace con replacer dentro s

// metodo con puntatori:
// creo una variabile che conterrà la stringa di ritorno (res)
// ciclo su s
//      mi chiedo se il carattere attuale è uguale al primo carattere di replace
//      se sì,
//          allora inizio un altro ciclo in cui controllo se
//          tutti i caratteri della sottostringa che sto guardando sono
//          uguali a replace
//              se sì, allora metto replacer dentro res
//              se no, metto quella originale
//      se no, metto dentro res tutta la stringa su cui sto ciclando
//      (che in sostanza vuol dire arrivare allo spazio)
// ritorno res

function findAndReplace(s, replace, replacer) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === replace[0]) {
            let fromS = ''
            let all = true // parto 'ottimista', considerando che sono tutti uguali
            for (let j = 0; j < replace.length; j++) {
                fromS += s[j]
                if (s[i + j] !== replace[j]) {
                    // i + j e j come indici:
                    // i => lo stato di avanzamento in s
                    // j => controllo stringa sotto
                    all = false
                }
            }
            if (all) {
                res += replacer + ' '
            } else {
                res += fromS
            }
            i += replace.length
        } else {
            res += s[i]
        }
    }
    return res
}

// let res = findAndReplace('Ciao sono io', 'sono', 'sarò')
// console.log(res)



// opzione 2:
// assumiamo che si possano sostituire solo parole intere
// dove una parola è una stringa separata da spazi

// divido i problemi:

// 1. trovare i candidati alla sostituzione:
// i candidati alla sostituzione sono tutte le stringhe che
// sono seprate da spazi
// creo una variabile candidates conterrà i candidati
// ciclo sulla stringa
//      allora accumulo i caratteri correnti in curr
//      il carattere attuale è uno spazio?
//      se sì, allora metto curr dentro candidati
//          scuoto curr
//      se no, metto il carattere corrente dentro curr
// ritorno candidati

function candidates(s) {
    let candidates = []
    let curr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            candidates.push(curr)
            curr = ''
        } else {
            curr += s[i]
        }
    }
    candidates.push(curr)
    return candidates
}

// 2. l'ennesimo candidato è da sostituire?
// ciclo sui candidati
//      prendo il candidato corrente in una variabile candidato
//      candidato è uguale a replace?
//          se sì, metto replacer dentro res con uno spazio dopo
//          se no, metto candidato dentro res con uno spazio dopo
// ritorno res

function substitute(candidates, replace, replacer) {
    let res = ''
    for (let i = 0; i < candidates.length; i++) {
        let candidate = candidates[i]
        if (candidate === replace) {
            res += replacer + ' '
        } else {
            res += candidate + ' '
        }
        
    }
    return res
}

let cand = candidates('ciao sono io')
let res = substitute(cand, 'sono', 'sarò')
console.log(res)