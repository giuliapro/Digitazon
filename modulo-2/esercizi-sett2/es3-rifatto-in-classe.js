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

// travaso di relazioni da m1 a m3
for (let i = 0; i < keys.length; i++) { 
    let key = keys[i] // per ogni chiave che ho in m1
    m3[key] = [m1[key]] // dentro la mappa m3, alla voce key metti il valore che hai in m1 alla voce key
    // MODIFICA (rispetto a es2 e es3): aggiungendo le parentesi [], ho già creato un array che mi servirà dopo
}

let keys2 = Object.keys(m2) // variabile per le chiavi che ho in m2
let m3keys = Object.keys(m3)
for (let i = 0; i < m3.length; i++) {
    let currentm2Key = m2keys[i] // creo una variabile per la chiave corrente di m2
    // a questo punto bisogna chiedersi:
    // currentm3Key è dentro l'array delle chiavi di m2?
    let found = false // parti ipotizzando che non ho trovato currentm3Key in m2, creando una variabile per verificarlo
    for (let j = 0; j < keys2.length; j++) { // scorro le chiavi di m2
        let currentm3Key = keys3[j] // creo una variabile per la chiave corrente di m3
        if (currentm2Key === currentm3Key) { // comparo le due current keys e se sono uguali
            found = true // l'ho trovata!
            break // quindi mi fermo
        }
    }
    if (found) {
        m3[currentm2Key].push(m2[currentm2Key])
    } else {
        m3[currentm2Key] = m2[currentm2Key] // assegno il valore della chiave corrente di m2 alla chiave corrente di m3
    }

}

console.log(m3)