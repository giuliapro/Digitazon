
const undici = require('undici')

async function aggiungi() {

  let res = await fetch('http://localhost:3000/contatti', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: "Maria",
      cognome: "Rossi",
      numero: "324563245"
    })
  })
  let text = await res.text()
  console.log(res.status)

}
aggiungi()