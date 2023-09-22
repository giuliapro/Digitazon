// Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
// richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
// con i relativi importi totali.
// Una stringa racchiusa da backtick (`) puo’ estendersi su piu’ righe, ogni riga e’ separata dalle
// altre dal carattere di a capo (\n), se avete difficolta’ a suddividere la stringa, consideratela un
// array, dove i reparti sono separati da un elemento che sara’ sempre il carattere spazio (“ “).

// Esempio stringa:
// '
// Cancelleria
// 500
// 40
// 60

// Servizi igienici
// 1000
// 1
// 200

// Vendite
// 0
// '

// Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
// in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
// i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.

// PSEUDOCODICE
// creo una funzione che prende in ingresso una stringa
// dentro la funzione mi creo un array per i reparti
// divido la stringa in sottostringhe usando lo spazio come separatore
// utilizzo le posizioni delle sottostringhe per muovermi in quella principale,
// prendo le sottostringhe con i numeri degli importi e le traformo in numeri per sommarle
// creo un oggetto per ogni reparto
// pusho tutto nell'array

// non mi piace questa soluzione perché è troppo specifica,
// se aggiungo sottostringhe va tutto in m*****

function sommaSpesa(str) {
    let reparti = []
    let substring = str.split(' ') // metodo per suddividere le stringhe tramite seprataore specificato

    // uso il metodo parseInt() per trasformare le stringhe che contengono nei numeri in valori numerici
    let importo1 = parseInt(substring[1]) + parseInt(substring[2]) + parseInt(substring[3])
    let importo2 = parseInt(substring[6]) + parseInt(substring[7]) + parseInt(substring[8])
    let importo3 = parseInt(substring[10])

    reparto1 = {
        reparto: substring[0],
        spesa: importo1.toString()
    }

    reparto2 = {
        reparto: substring[4] + ' ' + substring[5],
        spesa: importo2.toString()
    }

    reparto3 = {
        reparto: substring[9],
        spesa: importo3.toString()
    }

    reparti.push(reparto1, reparto2, reparto3)

    return reparti
}

console.log(sommaSpesa('Cancelleria 500 40 60 Servizi igienici 1000 1 200 Vendite 0'))


// ho provato a farlo con i singoli reparti, non riesco a capire come dividere la mega stringa però

// PSEUDOCODICE
// creo una funzione che prende in ingresso una stringa
// dentro la funzione mi creo un array per i reparti
// divido la stringa in sottostringhe usando lo spazio come separatore
// se le sottostringhe che contengono lettere,
//      creo variabile reparto per il nome del reparto
// se le stringhe contengono numeri,
//      le traformo in numeri effettivi per sommarli
// creo un oggetto per ogni reparto
// pusho tutto nell'array

function sommaSingoloReparto(str) {
    let substring = str.split(' ') // metodo per suddividere le stringhe tramite seprataore specificato
    let nomeReparto
    let importo = 0

    for (let i = 0; i < substring.length; i++) {
        let parola = substring[i]
        if (parola.match(/[a-z]/i)) { // se la sottostringa contiene lettere
            nomeReparto = parola
        } else { // se contiene numeri
            importo = importo + parseInt(parola)
        }

    }

    reparto ={
        reparto: nomeReparto,
        spesa: importo
    }

    return reparto
}


console.log(sommaSingoloReparto('Cancelleria 500 40 60'))