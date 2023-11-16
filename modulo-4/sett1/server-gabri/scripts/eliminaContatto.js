async function elimina(id) {

    let res = await fetch(`http://localhost:3000/contatti/${id}`, {
        method: 'DELETE'
    })
    let text = await res.text()
    console.log(res.status)

}
elimina(1)