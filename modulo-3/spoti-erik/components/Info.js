import { useParams } from 'react-router-dom'
import NowPlaying from './NowPlaying'


export default function Info({ playlists, setSongPlaying, songPlaying }) {

    const { artist } = useParams()
    const playlist = playlists.find((playlist) => playlist.artist === artist)





    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <>
            <div className="hero">
                {playlist &&
                    <div>
                        <img src={playlist.image} alt={artist} />
                        <div className='hero-content'>
                            <h1>{playlist.playlistname}</h1>
                            <p className='des'>{playlist.playlistdescription}</p>
                            <button className="play-icon" onClick={() => setSongPlaying(playlist.songs[0])}> ▶ </button>
                        </div>
                    </div>
                }
            </div>

            <ul>
                <li>
                    <p>#</p>
                    <p></p>
                    <p>Name:</p>
                    <p>Artist:</p>
                    <p>Duration:</p>
                </li>
                {playlist &&
                    playlist.songs.map((song, i) => (
                        <li key={song.songname}>
                            <p>{i + 1}</p>
                            <p></p>
                            <p>{song.songname}</p>
                            <p>{playlist.artist}</p>
                            <p>{formatTime(Number(song.time))}</p>
                            <button className="play-icon" onClick={() => setSongPlaying(song)}> ▶ </button>
                        </li>
                    ))}
            </ul>
            <NowPlaying songPlaying={songPlaying} playlists={playlists} setSongPlaying={setSongPlaying} />
        </>
    )
}