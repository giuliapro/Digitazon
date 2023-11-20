async function deleteAlbum() {

    let res = await fetch('http://localhost:3000/albums/album1', {
        method: 'DELETE'
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

deleteAlbum()