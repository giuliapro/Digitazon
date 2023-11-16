// un anno contiene 12 mesi

import Month from "./Month";

let months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

let today = new Date()
let currentMonth = today.getUTCMonth() + 1
let currentDay = today.getUTCDate()
let currentYear = today.getUTCFullYear()

today = currentDay + "/" + currentMonth + "/" + currentYear

export default function Year() {
    return (
        <div className="year">
            {months.map((month, i) => <Month today={today} months={months} i={i}/>)}
        </div>
    )
}