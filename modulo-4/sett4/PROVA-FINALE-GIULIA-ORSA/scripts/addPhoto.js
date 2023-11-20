async function addPhoto() {

    let res = await fetch('http://localhost:3000/albums/album2/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "photo67",
            hashtags: ["#landscape", "#pappagallo"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

addPhoto()