// implementare la funzione map utilizzando SOLO la funzione reduce
// utalizzare lo scheletro console.log([1,2,3], [], ?)

// dovete quindi scrivere una funzione anonima al posto di "?"
// che fa moltiplicare il numero * 2

function reduce(arr, init, funx) {
    let res = init
    for (let i = 0; i < arr.length; i++) {
        res.push(funx(arr[i])) // metto in res gli elementi dell'arr su cui ho eseguito funx
    }
    return res
}

console.log(reduce([1,2,3], [], n => n * 2))