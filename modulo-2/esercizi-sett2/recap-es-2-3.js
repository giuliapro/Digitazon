// date due mappe create a piacere
// creare una terza mappa che sia la fusione delle due

let m1 = {
    name: 'Alex',
    surname: 'Garskarth',
}

let m2 = {
    name: 'Justin',
    surname: 'Bieber',
    nickname: 'kidrauhl',
    birthDate: '1st March 1994'
}

// esercizio 2: la terza mappa deve sovrascrivere i valori delle chiave ripetute

let m3 = {}

let keys = Object.keys(m1) // variabile con tutte le chiavi di m1
for (let i = 0; i < keys.length; i++) {
    let key = keys[i] // variabile che serve per identificare la chiave nella posizione corrente
    m3[key] = m1[key] // questa variabile viene inserita in m3
}

keys = Object.keys(m2) // riassegno la variabile con le chiavi di m2
for (i = 0; i < keys.length; i++) {
    key = keys[i]
    m3[key] = m2[key] // sovrascrivo i valori delle variabili di m3 con quelle di m2]
}

console.log(m3)



// esercizio 3: la terza mappa deve contenere sia i valori di m1 che quelli di m2 nelle chiavi ripetute

let m4 = {}

let keyss = Object.keys(m1) // variabile con tutte le chiavi di m1
for (let i = 0; i < keyss.length; i++) {
    let keyy = keyss[i] // variabile che serve per identificare la chiave nella posizione corrente
    m4[keyy] = m1[keyy] // questa variabile viene inserita in m4
}

let keyss2 = Object.keys(m2) // creo una nuova variabile con le chiavi di m2
let keysCheck = Object.keys(m4) // variabile che serve per confrontare le chiavi di m4 (che sono quelle di m1) con quelle di m2
let newKey = false // variabile per vedere se la chiave incontrata è nuova

for (i = 0; i < keyss2.length; i++) {
    for (let j = 0; j < keyss2.length; j++) {
        if (keyss2[i] !== keysCheck[j]) {
            newKey = true
        } else {
            m4[keyss2[i]] = [m4[keyss2[i]]] // (se noti ci sono due [] in più, vuol dire che è un array)
            m4[keyss2[i]].push(m2[keyss2[i]])
            newKey = false
            break
        }
        if (j == keysCheck.length -1 && newKey == true) {
            m4[keyss2[i]] = m2[keyss2[i]]
        }
    }
}

console.log(m4)
