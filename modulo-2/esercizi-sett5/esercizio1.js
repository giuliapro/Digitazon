// assumiamo che una parola non sia una sequenza di caratteri vuota
// e che può essere formata solo da lettere maiuscole:
// dato un pattern, cioè una sequenza di parole nella quale possono esserci
// uno o più # (es. p#zzo);
// e dato un array di parole;
// far ritornare solo le parole che matchano il pattern

// es. ['pazzo', 'pezzo', 'cane']
// pattern = 'p#zzo'
// ritorno solo 'pazzo' e 'pezzo', perché matchano il pattern

function checkPattern(arr, pattern) {
    // ciclo sugli elementi dell'array
    // ciclo sui caratteri dell'elemento e sui caratteri del pattern
    // se i caratteri dell'elemento sono uguali a quelli del pattern,
    // oppure se c'è un cancelletto,
    //      ritornare la l'elemento
    let res = []
    let checkedWords = ''
    pattern = pattern.toUpperCase() // così non è case sensitive
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        for (let j = 0; j < word.length; j++) {
            let currentChar = word[j]
            let patternChar = pattern[j]
            if (currentChar === patternChar || patternChar == '#') {
                checkedWords += currentChar
            } else {
                break
            }
        }
    }
    res.push(checkedWords)
    return res
}

console.log(checkPattern(['PAZZO', 'PEZZO', 'CANE', 'PUZZO'], 'p#zzo'))

// non funziona in tutti i casi però lo hai fatto da sola!!!
// poteva andare peggio dai