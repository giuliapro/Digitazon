const undici = require('undici')

async function prova() {

  let res = await fetch('http://localhost:3000/contatti', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      nome: 'Anna',
      cognome: 'Verdi',
      numero: '3311624067'
    })
  })
  let text = await res.text()
  console.log(res.status)

}
prova()