// stampare i numeri tra a e b scelti a piacere
// alternando la modifica dell'indice:
// una volta saltando di 1, una volta saltando di 2

// è sbagliato, guarda la soluzione di alberto

let a = 0
let b = 10

for (let i = a; i <= b; i++) {
    if (i % 3 == 0) {
    } else {
        console.log(i)
        console.log(i = i + 1)
    }

}
