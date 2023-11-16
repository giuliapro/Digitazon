// fare una clessidra a video con un carattere a piacere

let righe = 5
let x = righe
let s = 0

for (let h = 0; h < righe; h++) {
    let stringa = ""
    for (let j = 0; j < s; j++) { // mettendo < di s la prima volta il ciclo lo fa 0 volte
        stringa += " "
    }
    s += 1
    for (let i = 0; i < x; i++) {
        stringa += "x"
    }
    x -= 2

    console.log(stringa)

}

