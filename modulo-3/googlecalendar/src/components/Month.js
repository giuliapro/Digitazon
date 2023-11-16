// un mese contiene 4 settimane

import { useEffect, useState } from 'react'
import Week from './Week'


export default function Month({ today, months, i }) {
    let currentDate = today.split('/')
    let currentMonth = currentDate[1] - 1

    const [monthDays, setMonthDays] = useState([1,2,3,4,5,6,7])
    const [weekNum, setWeekNum] = useState(0)

    function next() {
        if (weekNum < 5) {
            setWeekNum(weekNum + 1)
        }
    }

    function previous() {
        if (weekNum > 0) {
            setWeekNum(weekNum - 1)
        }
    }

    useEffect(() => {
        checkWeek(weekNum, setMonthDays)
    }, [weekNum])

    return (
        <div className='month'>
            <div>{months[currentMonth + i]}</div>
            <button onClick={next}>←</button>
            <div>
                <Week  monthDay={monthDays}/>
            </div>
            <button onClick={previous}>→</button>
        </div>
    )
}

function checkWeek(weekNum, setMonthDays) {
    if (weekNum === 0) {
        setMonthDays([1,2,3,4,5,6,7])
    }
    if (weekNum === 1) {
        setMonthDays([8,9,10,11,12,13,14])
    }
    if (weekNum === 2) {
        setMonthDays([15,16,17,18,19,20,21])
    }
    if (weekNum === 3) {
        setMonthDays([21,22,23,24,25,26,27])
    }
    if (weekNum === 4) {
        setMonthDays([28,29,30])
    }
}