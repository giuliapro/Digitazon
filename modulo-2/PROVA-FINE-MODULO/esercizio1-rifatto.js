// soluzione per dividere la stringa gigante in sottostringhe


function divideString(str) {
    // Dividi la stringa iniziale in base agli spazi
    let parts = str.split(/\s+/)

    // Inizializza un array vuoto per i risultati
    let resultArrays = []

    // Inizializza un array vuoto per la categoria corrente
    let currentCategory = []

    // Itera attraverso le parti della stringa
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i]

        // Se la parte non è un numero, la consideriamo parte del nome della categoria
        if (isNaN(part)) {
            currentCategory.push(part)
        } else {
            // Altrimenti, la parte è un numero e la aggiungiamo all'array della categoria corrente
            currentCategory.push(part)
        }

        // Se abbiamo trovato tre numeri, consideriamo la categoria corrente completa
        if (currentCategory.length === 4) {
            resultArrays.push(currentCategory)
            currentCategory = []; // Resetta l'array per la prossima categoria
        }
    }

    // Aggiungi l'ultima categoria se non è vuota
    if (currentCategory.length > 0) {
        resultArrays.push(currentCategory);
    }

    return resultArrays
}

console.log(divideString('Cancelleria 500 40 60 Servizi igienici 1000 1 200 Vendite 0'))