// I numeri romani sono rappresentati da sette diversi simboli: I, V, X, L, C, D e M.
// Simbolo Valore
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// Per esempio, il numero 2 è scritto come II in numeri romani, semplicemente due uno
// aggiunti insieme.
// Il numero 12 è scritto come XII, che è semplicemente X + II. Il numero 27 è scritto come
// XXVII, che è XX + V + II.
// I numeri romani sono di solito scritti dal più grande al più piccolo da sinistra a destra.
// Tuttavia, il numero romano per quattro non è IIII. Invece, il numero quattro è scritto come IV.
// Poiché il numero uno è prima del cinque, lo sottraiamo per ottenere quattro. Lo stesso
// principio si applica al numero nove, che viene scritto come IX.
// Ci sono sei casi in cui viene usata la sottrazione: I può essere posto prima di V (5) e X (10)
// per fare 4 e 9. X può essere posto prima di L (50) e C (100) per fare 40 e 90. C può essere
// posto prima di D (500) e M (1000) per fare 400 e 900.
// Dato un numero intero, convertirlo in un numero romano.

// analizzo i casi d'eccezione:
// 4 e 9 -> inserisco anche questi numeri nel definire quelli iniziali
// (e tutti i numeri multipli di 10 corrispondenti, quindi anche 40,90,400,900)

function intToRoman(num) {
    // Definisci le corrispondenze tra i numeri arabi e i numeri romani
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let result = ''

    for (let i = 0; i < values.length; i++) { // per ogni valore presente in values,
        while (num >= values[i]) { // finché il num è maggiore del value corrente,
            result += numerals[i] // aggiungo il corrispondente numero romano in result
            num -= values[i] // tolgo quel value dal num (se ad esempio ho 45, tolgo 40 e mi rimane 5)
        } // ripeto il ciclo finche non arrivo a 0
    }

    return result
}

// Esempio di utilizzo:
let numero = 45
let numeroRomano = intToRoman(numero)
console.log(numeroRomano) // Output: "XXVII"
