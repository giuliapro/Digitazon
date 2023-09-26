// Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
// “pazza”.
// Una stringa e’ “pazza” se:
// * non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
// * finisce con “?!?”
// * contiene la stringa “Cthulhu”
// * inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
// * inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”
// Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”;
// A MENO CHE la stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
// * Church
// * mare

// PSEUDOCODICE
// creo una funzione che accetta una stringa in ingresso
// con il costrutto if imposto le condizioni per le eccezioni di pazzia
// con il costrutto if imposto le condizioni per la stringa pazza

// metodi utilizzati:
// includes(): mi dice se un elemento è presente nella stringa
// startsWith(): mi dice con cosa inizia la stringa
// endsWith(): mi dice con cosa finisce la stringa
// split(): mi divide una stringa in sottostringhe usando il carattere che voglio


function strIncludes(str, parole) {
    for (let i = 0; i < parole.length; i++) {
        let parolaCorrente = parole[i]
        if (str.includes(parolaCorrente)) {
            return true
        }
    }
    return false
}


function isPazza(str) {

    // inizio a definire le eccezioni perché sennò verrebbero sovrascritte

    // controllo se la stringa contiene uno dei soggetti validi
    let soggettiValidi = ["Lui", "Lei", "Egli", "Ella"]
    if (strIncludes(str, soggettiValidi)) {
        return false
    }

    // controllo se la stringa contiene parole proibite
    let paroleProibite = ["Church", "mare"]
    if (strIncludes(str, paroleProibite)) {
        return false
    }

    // controllo se la stringa inizia con una punteggiatura
    let punteggiaturaIniziale = [",", ".", "!", "?", ":", ";", "-", "~"]
    for (let i = 0; i < punteggiaturaIniziale.length; i++) {
        let carattereCorrente = punteggiaturaIniziale[i];
        if (str.startsWith(carattereCorrente)) {
            return true
        }
    }

    // controllo se la stringa contiene "Cthulhu"
    if (str.includes("Cthulhu")) {
        return true
    }

    // controllo se la stringa termina con "?!?"
    if (str.endsWith("?!?")) {
        return true
    }

    // controllo se la stringa inizia e finisce con una parola che termina in "are", "ere" o "ire"
    let parole = str.split(' ') // mi divido la stringa in sottostringhe usando lo spazio
    if (parole.length >= 2) { // se la stringa ha più di una parola
        let primaParola = parole[0]
        let ultimaParola = parole[parole.length - 1]
        if (
            (primaParola.endsWith("are") || primaParola.endsWith("ere") || primaParola.endsWith("ire")) &&
            (ultimaParola.endsWith("are") || ultimaParola.endsWith("ere") || ultimaParola.endsWith("ire"))
        ) {
            return true
        }
    }

    return false

}


console.log(isPazza(".Quando guardi a lungo nell'abisso, l'abisso ti guarda dentro.")) // true
console.log(isPazza("Andare a rimirare")) // true
console.log(isPazza("Lui e' pazzo.")) // false
console.log(isPazza("~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano")) // false
console.log(isPazza("~ Papa', come sta Church? ~")) // false
console.log(isPazza('ciao')) // false
