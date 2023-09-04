// trovare bug (hint: non è nella funzione)

let input = 3
let xsToDraw = 1


for (let row = 0; row < input; row++) {
  drawXs(xsToDraw)
  xsToDraw++
}

xsToDraw -= 2
for (let row = input - 1; row > 0; row--) {
  drawXs(xsToDraw)
  xsToDraw--
}

function drawXs(howMany) {
  let xs = ""
  for (let i = 0; i < howMany; i++) {
    xs += "x"
  }
  console.log(xs)
}