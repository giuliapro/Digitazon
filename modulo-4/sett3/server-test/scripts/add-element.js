
async function aggiungi() {

  let res = await fetch('http://localhost:3000/array', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "elemento": "Paolo"
    })
  })
  let text = await res.text()
  console.log(res.status)

}
aggiungi()