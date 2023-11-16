// importazione che serve per per creare link navigabili all'interno dell'applicazione
import { Link } from 'react-router-dom'
// importazione che serve per l'icona
import { BsFillPlayFill } from 'react-icons/bs'

// le props del componente sono ricevute dai relativi genitori:
// playlist contiene informazioni sugli artisti e le loro playlist;
// setSongPlaying è utilizzata per impostare la canzone da riprodurre quando l'utente seleziona un artista
export default function Sidebar({ playlists, setSongPlaying, }) {

    return (
        <>
            {/* menu di navigazione */}
            <div className='menu-nav'>
                <nav>
                    {/* lista generata da un array di oggetti playlist,
                    n cui ciascun oggetto rappresenta un artista e contiene informazioni come
                    l'immagine dell'artista, il nome dell'artista e una playlist di canzoni associate all'artista */}
                    <ul>
                        {playlists.map((playlist) => (
                            <li key={playlist.artist}>
                                {/* per ogni artista nella lista playlists, viene generato un elemento che contiene un link navigabile alla pagina dell'artista;
                                il link utilizza il componente Link di react-router-dom e imposta l'URL in base al nome dell'artista */}
                                <Link to={"/playlist/" + playlist.artist} >
                                    {/* all'interno di ciascuna voce, è visualizzata una sezione che include l'immagine dell'artista, il nome dell'artista,
                                    e un'icona di riproduzione che consente di avviare la riproduzione di una canzone casuale dalla playlist dell'artista */}
                                    <section className="playlist-card">
                                        <img className="playlist-card-img" src={playlist.image} alt="" />
                                        <h2>{playlist.artist}</h2>
                                        {/* l'evento di click sull'icona di riproduzione casuale attiva la funzione setSongPlaying e imposta una canzone casuale dall'array di canzoni associate all'artista come canzone da riprodurre */}
                                        <p className="play-icon" onClick={() => setSongPlaying(playlist.songs[[Math.floor(Math.random() * playlist.songs.length)]])}><BsFillPlayFill /></p>
                                    </section>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>

    )
}