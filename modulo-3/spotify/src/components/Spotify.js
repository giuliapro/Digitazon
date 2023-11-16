// per gestire stati e side effects
import { useState, useEffect } from 'react'
// per la navigazione all'interno dell'applicazione
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Info from './Info'

export default function Spotify() {

    // lo stato viene usato per gestire due variabili:
    // playlists, che è un array che conterrà le informazioni sugli artisti e le loro playlist;
    // songPlaying, che contiene i dettagli della canzone attualmente in riproduzione
    const [playlists, setPlaylists] = useState([])
    const [songPlaying, setSongPlaying] = useState({})

    // controllo login:
    // verifica se un utente è loggato utilizzando il valore memorizzato in localStorage con la chiave 'login':
    // se il valore è 'true', viene effettuata una navigazione all'URL principale ("/") utilizzando la funzione navigate;
    // questo sembra essere un controllo preliminare per assicurarsi che l'utente sia autenticato
    const getLogin = localStorage.getItem('login')
    const navigate = useNavigate()
    if (getLogin === 'true') {
        navigate("/")
    } 

    // useEffect serve al componente per fare una richiesta HTTP GET a un'API locale per ottenere le informazioni sulle playlist
    // una volta ricevute le risposte, queste vengono convertite in formato JSON e poi utilizzate per impostare lo stato di playlists utilizzando setPlaylists
    useEffect(() => {
        async function get() {
            let response = await fetch("http://localhost:3030/playlists")
            response = await response.json()
            setPlaylists(response)
        }
        get()
    }, [])

    return (
        <div>
            {/* mostra il logo di spotify */}
            <header class="spotify-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png" alt="Spotify Logo" class="spotify-logo" />
            </header>
            {/* a Sidebar vengono passate le props playlists e setSongPlaying per consentire agli utenti di
            selezionare un artista e avviare la riproduzione di una canzone */}
            <Sidebar playlists={playlists} setSongPlaying={setSongPlaying} />
            <div className="details">
                {/* a Info vengono passate le props playlists, setSongPlaying, e songPlaying;
                questo componente mostra le informazioni sull'artista selezionato e le dettagliate sulle canzoni dell'album */}
                <Info playlists={playlists} setSongPlaying={setSongPlaying} songPlaying={songPlaying}/>
            </div>
        </div>
    )
}
