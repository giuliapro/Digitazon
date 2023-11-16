// date due mappe create a piacere
// creare una terza mappa che sia la fusione delle due
// con uso di funzione

let m1 = {
    name: 'Giulia',
    surname: 'Orsa'
}

let m2 = {
    name: 'Camilla',
    surname: 'Bianchi',
    age: '24',
    birthDate: '30 luglio 1999'
}

// voglio creare una mappa m3 tale che:
// * deve avere tutte le chiavi di tutte e due le mappe
// * eventuali duplicati vengono sovrscritti dalla seconda mappa


function mergeMaps(m1, m2) { // qua scelgo i nomi delle variabili con cui chiamerò le variabili delle funzioni (in questo caso ho scelto di chiamarli uguali)
    let m3 = {
        // prendo tutte le keys che mi servono (della prima mappa)
        // dalla seconda mappa queste due keys devono essere
        // sovrascritte con nuovi valori (della seconda mappa)
    }

    let keys = Object.keys(m1)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i] // per ogni chiave che ho in m1
        m3[key] = m1[key] // dentro la mappa m3, alla voce key metti il valore che hai in m1 alla voce key
    }

    keys = Object.keys(m2) // (uso la stessa variabile perché devo sovrascrivere)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i] // per ogni chiave che ho in m2
        m3[key] = m2[key] // dentro la mappa m3, alla voce key SOVRASCRIVI il valore che hai in m2 alla voce key
    }
    return m3 // nuova keyword, ci dice che questa funzione ritorna questo valore MA NON STAMPA
}

let m3 = mergeMaps(m1, m2) // questi sarebbero i nomi delle variabili fuori dalla funzione non dentro (acnche se sono uguali)
// notare come m3 NON è lo stesso m3 racchiuso nella funzione, per questo dobbiamo ridefinire la variabile
// lo scope è diverso !!!

console.log(m3) // questo è il comando che stampa