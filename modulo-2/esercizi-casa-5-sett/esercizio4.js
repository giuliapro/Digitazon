// scrivere una funzione che data una stringa in ingresso
// ritorna solo i caratteri che al piu' compaiono una volta
// (ritornare solo i caratteri che non sono duplicati)

function func(str) {
    let str2 = []
    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        let check1 = str2.indexOf(current)
        if (check1 == -1) {
            str2.push(current)
        } else {
            str2.shift(current)
        }
    }
    return str2
}

console.log(func("abcdefgabc"))