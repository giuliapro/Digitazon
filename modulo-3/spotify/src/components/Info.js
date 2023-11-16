// consentono di accedere ai parametri dell'url, per ottenere il nome dell'artista selezionato
import { useParams } from 'react-router-dom'
import NowPlaying from './NowPlaying'

// queste props sono prese dai componenti genitori, e vengono utilizzate per passare informazioni
// sulle playlist, la canzone in riproduzione e per aggiornare lo stato dell'app
export default function Info({ playlists, setSongPlaying, songPlaying }) {

    // estrazione nome dell'artista
    const { artist } = useParams()
    const playlist = playlists.find((playlist) => playlist.artist === artist)

    // funzione utilizzata per formattare la durata delle canzoni in minuti e secondi, come nel componente NowPlaying
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <>
            {/* questa sezione mostra informazioni sull'artista selezionato, come l'immagine, il nome dell'album e una descrizione */}
            <div className="hero">
                {playlist &&
                    <div>
                        <img src={playlist.image} alt={artist} /> {/* immagine */}
                        <div className='hero-content'>
                            <h1>{playlist.playlistname}</h1> {/* nome album */}
                            <p className='des'>{playlist.playlistdescription}</p> {/* descrizione */}
                            {/* se una playlist corrispondente all'artista è disponibile, verranno visualizzate le informazioni corrispondenti */}
                            {/* pulsante di riproduzione per avviare la prima canzone dell'album */}
                            <button className="play-icon" onClick={() => setSongPlaying(playlist.songs[0])}> ▶ </button>
                        </div>
                    </div>
                }
            </div>
            {/* lista con informazioni sulle canzoni dell'album */}
            <ul>
                {/* ogni elemento mostra il numero di traccia, il nome della canzone, l'artista e la durata */}
                <li>
                    <p>#</p>
                    <p></p>
                    <p>Name:</p>
                    <p>Artist:</p>
                    <p>Duration:</p>
                </li>
                {/* ista generata in base alle canzoni presenti nella playlist dell'artista */}
                {playlist &&
                    playlist.songs.map((song, i) => (
                        <li key={song.songname}>
                            <p>{i + 1}</p>
                            <p></p>
                            <p>{song.songname}</p>
                            <p>{playlist.artist}</p>
                            <p>{formatTime(Number(song.time))}</p>
                            {/* pulsante di riproduzione per avviare ogni canzone individualmente */}
                            <button className="play-icon" onClick={() => setSongPlaying(song)}> ▶ </button>
                        </li>
                    ))}
            </ul>
            {/* alla fine del rendering, il componente NowPlaying è incluso,
            passando le props songPlaying, playlists e setSongPlaying;
            questo componente consente di riprodurre la canzone selezionata */}
            <NowPlaying songPlaying={songPlaying} playlists={playlists} setSongPlaying={setSongPlaying} />
        </>
    )
}