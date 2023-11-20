async function modifyPhoto() {

    let res = await fetch('http://localhost:3000/albums/album2/photos/photo67', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            hashtags: ["#work"]
        })
    })
    console.log(res.status)
    res = await res.json()
    if (res.error) {
        console.log(res.msg)
    }
}

modifyPhoto()