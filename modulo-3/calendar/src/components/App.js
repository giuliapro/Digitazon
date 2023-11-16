import '../App.css'

import { useState, useEffect } from 'react'

export default function Calendar() {
  let yearMonths = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ]

  return (
    <>
      <div className='wrapper'>
        <div className='month'>
        {yearMonths.map(week => <div className='single-week'><Week week={week} /></div>)}
        </div>
      </div>
    </>
  )
}

function Week({ week }) {
  let weekDays = [
    'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'
  ]

  return (
    <>
      <h1>{week}</h1>
      <div className='week'>
        {weekDays.map(day => <div className='single-day'><Day day={day} /></div>)}
      </div>
    </>
  )
}

function Day({ day }) {
  let dayTimes = Array.from(Array(24).keys())

  return (
    <>
      <h2>{day}</h2>
      <div className='slot'>
        {dayTimes.map(time => <div className='single-slot'><Slot time={time} /></div>)}
      </div>
    </>
  )
}

function Slot({ time }) {
  const [showPopup, setShowPopup] = useState(false);
  const [events, setEvents] = useState([]); // Stato per gli eventi

  const openPopup = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className='hour'>
        <div className='event'>
          <p>Ora: {time}-{time + 1}</p>
          <button onClick={openPopup}>Aggiungi evento</button>
        </div>
      </div>
      {showPopup && <Popup events={events} setEvents={setEvents} setShowPopup={setShowPopup} />}
      {/* Mostra gli eventi */}
      <div className="event-list">
        <h2 className="event-item">Eventi:</h2>
          {events.map((event, index) => (
            <div className="p-container" key={index}>
              <p className="event-item">Nome: {event.title}</p>
              <p className="event-item">Luogo: {event.place}</p>
            </div>
          ))}
        
      </div>
    </>
  )
}

function Popup({ events, setEvents, setShowPopup }) {
  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')

  const handleAddEvent = () => {
    let newEvent = {
      titolo: title,
      place: place
    }
    let temp = JSON.parse(JSON.stringify(events))
    temp.push(newEvent)
    setEvents(temp)
    setShowPopup(false)
  }

  return (
    <div className='popup'>
      <div className='popup-content'>
        {/* Contenuto del popup */}
        <p>Il tuo evento:</p>
        <input
          type='text'
          placeholder='Nome evento'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type='text'
          placeholder='Luogo'
          onChange={(e) => setPlace(e.target.value)}
          value={place}
        />
        <button className='conferma' onClick={handleAddEvent}>Conferma</button>
      </div>
    </div>
  );
}