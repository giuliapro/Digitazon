// scrivere una funzione che prende in ingresso un array di stringhe a,
// la funzione deve ritornare una mappa dove ogni chiave corrisponde
// ad ogni stringa in a e il valore corrisponde alla lunghezza della stringa

function funcMap(arr) {
    let mapStr = {}
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let value = key.length
        mapStr[key] = value
    }
    return mapStr
}

console.log(funcMap(["aaa", "bbbbb", "cc"]))