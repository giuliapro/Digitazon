// scrivere una funzione chiamata reverse che 
// data una stringa in ingresso
// ritorni la stringa inversa

// ad esempio "ciao" deve ritornare "oaic"
// ad esempio "Jessica" deve ritornare "acisseJ"


function reverse(string) {
    let res = ''
    for (let i = string.length; i--;) {
        res += string[i]
    }
    return res
}

// console.log(reverse('ciao'))







// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l 
// contenente '#' e ' ', opportunamente alternati, che rappresentino 
// una scacchiera di lato l 

// la prima casella deve essere un '#'

function chessboard(l) {
    if (l <= 0) {
        return [];
    }

    const board = [];

    for (let i = 0; i < l; i++) {
        const row = [];
        for (let j = 0; j < l; j++) {
            // Alterna '#' e ' ' in base alla posizione
            if ((i + j) % 2 === 0) {
                row.push('#');
            } else {
                row.push(' ');
            }
        }
        board.push(row);
    }

    return board;
}

// Esempio di utilizzo con l = 4
// const lato = 4;
// const scacchiera = chessboard(lato);

// Stampa la scacchiera
// for (let i = 0; i < lato; i++) {
//     console.log(scacchiera[i].join(' '));
// }






// scrivere una funzione chiamata filterString
// che prende in ingresso una funzione e una stringa
// la funzione filterString deve ritornare una nuova stringa
// le cui lettere sono presenti solo se 
// l'applicazione della funzione alla i-esima lettera
// restituisce true

// ad esempio per l => l == "a" e "abc" deve 
// ritornare "a"
// ad esempio per l => l == "c" e "bbbbb" deve 
// ritornare ""
// ad esempio per l => l != "c"e "cabbac"  deve 
// ritornare "abba"

function filterString(funx, str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        const current = str[i]
        if (funx(current)) {
            res += current
        }
    }
    return res
}

// console.log(filterString(letter => letter == 'o', 'ciao'))



