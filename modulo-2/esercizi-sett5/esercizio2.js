// data una stringa ritornare un array
// con tutte le possibili combinazioni di caratteri

function tutteCombinazioni(stringa) {
    if (stringa.length === 1) { // se la lunghezza della stringa è uguale a 1
        return [stringa] // ritornare la stringa
    }

    let risultati = [];

    for (let i = 0; i < stringa.length; i++) { // per ogni carattere della stringa
        let char = stringa[i] // memorizzo il carattere corrente
        let rimanente = stringa.substring(0, i) + stringa.substring(i + 1)
        // estraggo i caratteri da 0 all'indice corrente
        // e sommo i caratteri compresi dall'indice corrente e indice corrente +1
        let combinazioniRimanenti = tutteCombinazioni(rimanente);

        for (let combo of combinazioniRimanenti) {
            risultati.push(char + combo);
        }
    }

    return risultati;
}

let input = 'ciao';
console.log(tutteCombinazioni(input))
