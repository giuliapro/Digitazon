// data una stringa, contare il numero di vocali presenti

let stringa = "abecido5uo"
let countVocali = 0

for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] == "a" || stringa[i] == "e" || stringa[i] == "i" || stringa[i] == "o" || stringa[i] == "u") {
        countVocali++
    }
}
console.log(countVocali)