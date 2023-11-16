// date due mappe create a piacere
// creare una terza mappa che sia la fusione delle due

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
// * eventuali duplicati vengono aggiunti in un array

let m3 = {}

let keys = Object.keys(m1)
for (let i = 0; i < keys.length; i++) { 
    let key = keys[i] // per ogni chiave che ho in m1
    m3[key] = m1[key] // dentro la mappa m3, alla voce key metti il valore che hai in m1 alla voce key
}

let keys2 = Object.keys(m2) // variabile per le chiavi che ho in m2
let keysCheck = Object.keys(m3) // variabile per confrontare le chiavi di m3 (che ha già le chiavi di m1) e m2
let newKey = false // variabile per vedere se la chiave è già presente o è nuova

for (let i = 0; i < keys2.length; i++) { // per ogni chiave della m2
    for (let j = 0; j < keysCheck.length; j++) { // per ogni chiave già presente in m3
        if (keys2[i] !== keysCheck[j]) { // se la chiave di m2 è diversa dalla chiave in m3
            newKey = true // la chiave è nuova
        } else { // sennò, se sono uguali
            m3[keys2[i]] = [m3[keys2[i]]] // trasformale in un array
            m3[keys2[i]].push(m2[keys2[i]]) // aggiungi alla fine di m3 il valore della chiave di m2
            newKey = false // alla chiave che già esisteva
            break // e poi esci dal ciclo
        }
        if (j == keysCheck.length -1 && newKey == true) { // quando la chiave è nuova
            m3[keys2[i]] = m2[keys2[i]] // va aggiunta in m3
        }
    }
}

console.log(m3)