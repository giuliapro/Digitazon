// scrivere una funzione che prende in ingresso un array di stringhe a,
// la funzione deve ritornare una mappa dove ogni chiave corrisponde
// ad ogni stringa in a e il valore corrisponde alla lunghezza della stringa

function funcMap(arr) {
    let mapStr = {} // creo una mappa
    for (let i = 0; i < arr.length; i++) { // per ogni elemento di arr
        let key = arr[i] // creo una variabile key con il valore corrente di rr
        let value = key.length // creo una variabile value con la lunghezza di key
        mapStr[key] = value // nella mappa, per ogni key avrò il corrispondente value
    }
    return mapStr // ritorno la mappa
}

console.log(funcMap(["aaa", "bbbbb", "cc"]))