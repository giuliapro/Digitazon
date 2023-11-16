import { useState, useEffect } from 'react'
import mole from './mole.png'

export default function HitTheMole() {
    const [showMole, setShowMole] = useState(false)
    const [score, setScore] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setShowMole(!showMole)
        }, 3000);
        return () => clearInterval(interval)
    }, [showMole])


    return (
        <>
            <Score score={score} />
            <div className='row'>
                <Hole showMole={showMole} setShowMole={setShowMole}
                    setScore={setScore} />
                <Hole showMole={showMole} setShowMole={setShowMole}
                    setScore={setScore} />
                <Hole showMole={showMole} setShowMole={setShowMole}
                    setScore={setScore} />
            </div>
            <div className='row'>
            </div>
        </>
    )
}

function Hole(props) {


    function handleClick() {
        if (props.showMole) {
            props.setShowMole(false)
            props.setScore((score) => score + 1)
        }
    }

    return (
        <div className='hole' onClick={handleClick}>
            {props.showMole && <span className='mole'>
                <img src={mole} width="60px" height="60px" alt="" />
            </span>}
        </div>
    )
}

function Score({ score }) {

    return (
        <>
            <h3><bold>Score</bold></h3>
            <p>{score}</p>
        </>
    )
}