import { useState, useEffect, useRef } from 'react'
import {
    BsPlayFill, BsFillPauseFill, BsFillSkipForwardFill, BsFillSkipBackwardFill,
    BsFillVolumeMuteFill, BsFillVolumeUpFill
} from 'react-icons/bs'

export default function NowPlaying({ songPlaying, setSongPlaying, playlists }) {
    const [isPaused, setIsPaused] = useState(false)
    const audioRef = useRef()
    const [songIndex, setSongIndex] = useState(0)
    const [timeProgress, setTimeProgress] = useState(0)
    const [isMuted, setIsMuted] = useState(false)

    const playlist = playlists.find((playlist) => playlist.songs.includes(songPlaying))


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = songPlaying.mp3Url
            setIsPaused(false)
            audioRef.current.load()
            audioRef.current.play()
            setTimeProgress(0)
        }
    }, [songPlaying])

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

    function toggleMute() {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

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

    function previous() {
        if (playlist && songIndex > 0) {
            const previousIndex = songIndex - 1
            setSongPlaying(playlist.songs[previousIndex])
            setSongIndex(previousIndex)
            setIsPaused(false)
        }
    }


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

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <div className="player">
            {(songPlaying && playlist) && (
                <div className="container player-info">
                    <div className="player-info__text">
                        <h3>{songPlaying.songname}</h3>
                        <p><i>{playlist.artist}</i></p>
                    </div>
                    {songPlaying.time && (
                        <div className='music-player'>
                            <div className='progress'>
                                <p>{formatTime(timeProgress)}</p>
                                <progress max={songPlaying.time} value={timeProgress} id="progressBar"></progress>
                                <p>{formatTime(Number(songPlaying.time))}</p>
                            </div>
                            <div className='player-controls'>
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
                    <audio ref={audioRef} autoPlay id="meuPlayer" type='audio/mp3' />
                </div>
            )}
        </div>
    )
}