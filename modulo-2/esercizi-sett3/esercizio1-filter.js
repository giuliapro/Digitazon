// stessa cosa dell'esercizio con la correzione
// ma con filter anziché map

// il risultato deve ritornare solo i numeri negativi

function reduce(arr, init, funx) {
    let res = init
    for (let i = 0; i < arr.length; i++) {
        res = funx(res, arr[i])
    }
    return res
}

console.log(reduce([-3,-2,-1,0,1,2,3], [], (acc, n) => {
    if (n < 0) {
        acc.push(n)
    }
    return acc
}))