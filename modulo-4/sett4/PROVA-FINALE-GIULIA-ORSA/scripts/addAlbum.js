async function addAlbum() {

    let res = await fetch('http://localhost:3000/albums', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "album3",
            photos: [],
            hashtags: ["#primo", "#prova"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

addAlbum()