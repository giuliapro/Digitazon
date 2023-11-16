// servono per gestire stato, side effects e i riferimenti audio
import { useState, useEffect, useRef } from 'react'
// libreria che serve per gestire le icone
import {
    BsPlayFill, BsFillPauseFill, BsFillSkipForwardFill, BsFillSkipBackwardFill,
    BsFillVolumeMuteFill, BsFillVolumeUpFill
} from 'react-icons/bs'

// le props coinvolte servono per gestire la canzone attual,ente in riproduzione e le playlist
export default function NowPlaying({ songPlaying, setSongPlaying, playlists }) {
    const [isPaused, setIsPaused] = useState(false) // controlla se la canzone è in pausa
    const audioRef = useRef() // riferimento audio HTML
    const [songIndex, setSongIndex] = useState(0) // indice della canzone attualmente in riproduzione nella playlis
    const [timeProgress, setTimeProgress] = useState(0) // progresso temporale della canzone
    const [isMuted, setIsMuted] = useState(false) // controlla se l'audio è in modalità silenziosa

    const playlist = playlists.find((playlist) => playlist.songs.includes(songPlaying))

    // questo useEffect viene attivato quando la prop songPlaying cambia
    // si assicura che l'elemento audio venga caricato con la nuova canzone ed inizi a riprodurla
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = songPlaying.mp3Url
            setIsPaused(false)
            audioRef.current.load()
            audioRef.current.play()
            setTimeProgress(0)
        }
    }, [songPlaying])

    // questo useEffect gestisce il progresso temporale della canzone e riproduce automaticamente quella successiva quando termina quella precedenteù
    // controlla se la riproduzione è in pausa o meno
    useEffect(() => {
        if (audioRef.current) {
            if (audioRef.current.ended) {
                next()
                setTimeProgress(0)
            } else {
                if (!isPaused) {
                    const interval = setInterval(() => {
                        setTimeProgress(timeProgress + 1)
                    }, 1000)
                    return () => clearInterval(interval)
                }
            }
        }
    }, [timeProgress, isPaused, next])

    // toggle del muto
    function toggleMute() {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    // funzione usata per il passaggio alla prossima canzone
    function next() {
        if (playlist) {
            const nextIndex = songIndex + 1
            if (nextIndex < playlist.songs.length) {
                setSongPlaying(playlist.songs[nextIndex])
                setSongIndex(nextIndex)
                setIsPaused(false)
            } else {
                setSongPlaying(playlist.songs[0])
                setSongIndex(0)
                setIsPaused(false)
            }
        }
    }

    // funzione usata per il passaggio alla precedente canzone
    function previous() {
        if (playlist && songIndex > 0) {
            const previousIndex = songIndex - 1
            setSongPlaying(playlist.songs[previousIndex])
            setSongIndex(previousIndex)
            setIsPaused(false)
        }
    }

    // toggle riproduzione
    function togglePlayback() {
        if (audioRef.current.paused) {
            audioRef.current.play().then(() => {
                setIsPaused(false)
            })
        } else {
            audioRef.current.pause()
            setIsPaused(true)
        }
    }

    // funzione usata per formattare il tempo in minuti e secondi
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <div className="player">
            {/* condizioni del rendering:
            il componente effettua il rendering solo se songPlaying e playlist esistono;
            altrimenti, l'area di riproduzione rimane vuota. */}
            {(songPlaying && playlist) && (
                <div className="container player-info">
                    <div className="player-info__text">
                        <h3>{songPlaying.songname}</h3> {/* mostra il nome della canzone */}
                        <p><i>{playlist.artist}</i></p> {/* mostra l'artista della canzone */}
                    </div>
                    {songPlaying.time && (
                        <div className='music-player'>
                            <div className='progress'> {/* mostra la progressione della barra temporale della canzone */}
                                <p>{formatTime(timeProgress)}</p> 
                                <progress max={songPlaying.time} value={timeProgress} id="progressBar"></progress>
                                <p>{formatTime(Number(songPlaying.time))}</p>
                            </div>
                            <div className='player-controls'> {/* mostra i controlli della canzone (come play, pausa, successivo, precedente, muto) */}
                                <button className="previous-button" onClick={previous}><BsFillSkipBackwardFill /></button>
                                <button className="playButton" onClick={togglePlayback}>
                                    {isPaused ? <BsPlayFill /> : <BsFillPauseFill />}
                                </button>
                                <button className="next-button" onClick={next}><BsFillSkipForwardFill /></button>
                                <button className="mute-button" onClick={toggleMute}>
                                    {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
                                </button>
                            </div>
                        </div>
                    )}
                    {/* elemento nascosto che gestisce la riproduzione effettiva della canzone */}
                    <audio ref={audioRef} autoPlay id="meuPlayer" type='audio/mp3' />
                </div>
            )}
        </div>
    )
}