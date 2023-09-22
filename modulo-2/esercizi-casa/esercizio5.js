// data una stringa ritornare un array di array
// con tutte le possibili combinazioni in ordine
// es "ciao" array = [[c, ci, cia, ciao], [i, ia, iao], [a, ao], [o]]

function array(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            arr.push(estraiSottostringa(str, i, j))
        }
    }
    return arr
}

function estraiSottostringa(str, i, j) {
    let substring = ''
    for (let k = i; k <= j; k++) { // k va da i a j
        let current = str[k]
        substring = substring + current
    }
    return substring
}

console.log(array('ciao'))