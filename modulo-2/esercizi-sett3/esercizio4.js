// creare un array palindromo
// firma della funzione: function isPalindrome(arr, sx, dx)
// la funzione deve ritornare true o false
// scheletri:
// console.log(isPalindrome([1,2,3,2,1], ?, ?))
// console.log(isPalindrome([1,2,4,1,5], ?, ?))

function isPalindrome(arr, sx, dx) {
    if (sx >= dx) {
        return true
    }
    
    return arr[sx] == arr[dx] && isPalindrome(arr, sx + 1, dx - 1)
    // sono due valori booleani, quindi usando && risolvo più velocemente
}

console.log(isPalindrome([1,2,3,2,1], 0, 4))
console.log(isPalindrome([1,2,4,1,5], 0, 4))