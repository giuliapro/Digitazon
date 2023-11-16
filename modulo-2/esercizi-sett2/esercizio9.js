// scrivere del codice che data una stringa stampi a video
// la stringa più lunga che non ha ripetizioni

// pseudocodice:
// scrivo una stringa fatta di caratteri a caso
// inizio a passare ogni carattere della stringa
// confronto ogni carattere col precedente
// se è diverso, lo aggiungo ad una stringa (ho già incontrato quel carattere?)
// se è uguale, mando indietro i puntatori (con indexOf()) e mi salvo la sottostringa fatta
// ricomincio dal'indice di partenza successivo
// confronto poi le sottostringhe salvate per vedere la più lunga

let string = "abcabbcda"
let stringCurrent = ""
let stringMax = ""

for (let i = 0; i < string.length; i++) { // ciclo sulla stringa partendo dal primo carattere
    let current = string[i] // creo una variabile temporanea
    if (stringCurrent.indexOf(current) === -1) { // il carattere corrente è dentro stringCurrent?
        stringCurrent += current // se no, lo aggiungo a stringCurrent
    } else { // se sì
        if (stringCurrent.length > stringMax.length) { // stringCurrent è maggiore di stringMax?
            stringMax = stringCurrent // se sì, metto stringCurrent dentro stringMax
            stringCurrent = "" // la strinCurrent viene svuotata
            i = string.lastIndexOf(current, i) // torno indietro all'occorrenza precedente
            // si usa lastIndexOf() perché devo tornare indietro, e questo metodo va da dx verso sx
        }
    }
}

if (stringCurrent.length > stringMax.length) {
    stringMax = stringCurrent
}

console.log(stringMax)