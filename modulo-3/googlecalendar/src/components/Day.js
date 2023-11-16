// una giornata contiene 24 ore

import Time from './Time'

let dayTimes = Array.from(Array(24).keys())

export default function Day({ day }) {
    return (
        <div className='day'>
            <span>{day}</span>
            {dayTimes.map(time => <Time time={time} />
            )}
        </div>
    )
}

