async function deletePhoto() {

    let res = await fetch('http://localhost:3000/albums/album2/photos/photo67', {
        method: 'DELETE'
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

deletePhoto()