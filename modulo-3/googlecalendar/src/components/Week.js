// una settimana contiene 7 giorni

import Day from './Day'

let weekDays = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']

export default function Week({ week }) {

    return (
        <div className='week'>
            {weekDays.map(day => <Day day={day} />)}
        </div>
    )
}
