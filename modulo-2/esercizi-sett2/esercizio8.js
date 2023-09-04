// dato un array dire se è omogeneo o meno
// omogeneo: un array composto da elementi tutti dello stesso tipo
// utilizzare typeof

let arr = [3, 4, 5, 7, 'ciao', undefined]
let omogeneo = true

for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    for (let j = 0; j < arr.length; j++) {
        let current2 = arr[j]
        if (typeof current !== typeof current2) {
            omogeneo = false
            break
        }
    }
}

console.log(omogeneo)

// soluzione più semplice:
// for (let i = 1; i < arr.length; i++) {
//      if (typeof (arr[0]) !== typeof (arr[i])) {
//          omogeneo = false
//          break
//      }
// }
// console.log(aomogeneo)