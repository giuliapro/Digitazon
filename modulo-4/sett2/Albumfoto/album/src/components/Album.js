import { useEffect, useState } from 'react'

export default function Album() {

    const [album, setAlbum] = useState([])
    const [imageURL, setImageURL] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [place, setPlace] = useState("")

    useEffect(() => {
        async function get() {
            let res = await fetch('http://localhost:3001/album')
            res = await res.json()
            setAlbum(res)
        }
        get()
    }, [addImage])

    async function addImage() {
        let res = await fetch('http://localhost:3001/album', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                imgURL: imageURL,
                description: description,
                date: date,
                place: place
            })
        })
    }

    return (
        <>
            <div>
                {album.map(photo =>
                    <div>
                        <img src={photo.imgURL} alt='' />
                        <p>{photo.description}</p>
                        <p>{photo.date} - {photo.place}</p>
                    </div>
                )}
            </div>
            <div>
                <input type="text" placeholder='type an image URL' value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                <input type="text" placeholder='description of the image' value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder='place' value={place} onChange={(e) => setPlace(e.target.value)} />
                <button onClick={addImage}> ADD AN IMAGE</button>
            </div>
        </>
    )
}
