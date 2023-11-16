import { Link, Outlet } from 'react-router-dom'
import { BsFillPlayFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


export default function Sidebar({ playlists, setSongPlaying }) {
    const navigate = useNavigate()
    const log = localStorage.getItem('login')
    if (log !== "true") {
        navigate('/login')
        return
    }
    function logout() {
        const log = localStorage.setItem('login', false)
        if (log !== "true") {
            navigate('/login')
            return
        }
    }
    return (
        <div>
            <header class="spotify-header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png" alt="Spotify Logo" class="spotify-logo" />
            </header>
            <div className='menu-nav'>
                <nav>
                    <ul>
                        {playlists.map((playlist) => (
                            <li key={playlist.artist}>
                                <Link to={"/playlist/" + playlist.artist} >
                                    <section className="playlist-card">
                                        <img className="playlist-card-img" src={playlist.image} alt="" />
                                        <h2>{playlist.artist}</h2>
                                        <p className="play-icon" onClick={() => setSongPlaying(playlist.songs[[Math.floor(Math.random() * playlist.songs.length)]])}><BsFillPlayFill /></p>
                                    </section>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={logout}>logout</button>
                </nav>
                <div className="details">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}