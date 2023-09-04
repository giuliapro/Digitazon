// data una mappa creata a piacere, creare una nuova mappa
// che non abbia undefined o null come valori

let m = {
    name: 'Giulia',
    surname: 'Orsa',
    birthDate: undefined,
    city: undefined,
    student: null,
    sanitàMentale: null
}

let n = {}

let keys = Object.keys(m) // variabile che contiene tutte le chiavi di m
for (let i = 0; i < keys.length; i++) { // per ogni chiave contenuta in m
    let key = keys[i] // memorizzo il valore della chiave corrente
    if (m[key] != null) { // se la chiave ha un valore diverso da undefined e null
                         // (!= null comprende sia null che undefined)
        n[key] = m[key] // la inserisco nella mappa n
    } // sennò non faccio nulla
}

console.log(n)