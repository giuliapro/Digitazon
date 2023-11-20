async function modifyAlbum() {

    let res = await fetch('http://localhost:3000/albums/album1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            hashtags: ["#ciao", "#ok", "#secondaprova"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

modifyAlbum()