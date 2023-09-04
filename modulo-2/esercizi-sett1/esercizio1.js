// scrivere del codice che crea una variabile che contiene un numero
// e verificare se quel numero è maggiore di 50, se invece è minore sommo 100
// se il numero è uguale a 50, torna a 0

let a = 34

if (a < 50) {
    a = a + 100
}

if (a == 50) {
    a = 0
}

console.log(a)