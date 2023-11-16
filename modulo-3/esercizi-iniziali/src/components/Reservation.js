import { useState } from "react";

export default function Reservation() {
    const [nameRes, setNameRes] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [myInfo, setMyInfo] = useState('')
    const [myTable, setMyTable] = useState([])
    const [bookedTimes, setBookedTimes] = useState([])

    const handleNameChange = (e) => {
        setNameRes(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const handleMyInfo = () => {
        const newMyInfo = `Nome: ${nameRes}, Data: ${date}, Orario: ${time}`;
        setMyInfo(newMyInfo)
        if (bookedTimes.includes(time)) {
            alert("L'orario selezionato è già stato prenotato. Scegli un altro orario.");
            return;
        }
    }

    const generateUniqueTableNumber = () => {
        const maxTavolo = 30;
        let tavolo;

        do {
            tavolo = Math.round(Math.random() * maxTavolo) + 1;
        } while (myTable.some((item) => item.includes(`Tavolo: ${tavolo}`)));

        return tavolo;
    };

    const handleTable = () => {
        const tavolo = generateUniqueTableNumber();
        const newTable = `Nome: ${nameRes}, Tavolo: ${tavolo}`;
        setMyTable([...myTable, newTable]);
        setBookedTimes([...bookedTimes, time]);
    }

    const handleDelete = (index) => {
        const updatedTable = [...myTable]
        updatedTable.splice(index, 1)
        setMyTable(updatedTable)
    }

    return (
        <>
            <div className="wrapper">
                <div className="left-half">
                    <div className="reservation-input">
                        <div className="title">
                            <h1>Effettua prenotazione</h1>
                        </div>
                        <div className="reservation-text">

                            <input
                                type="text"
                                placeholder={`Nome e Cognome`}
                                onChange={handleNameChange}
                                value={nameRes}
                            />
                            <input
                                type="date"
                                placeholder={`Data`}
                                onChange={handleDateChange}
                                value={date}
                            />
                            <input
                                type="time"
                                onChange={handleTimeChange}
                                value={time}
                            />
                        </div>

                        <button onClick={handleMyInfo}>Prenota</button>

                    </div>

                    <div className="reservation-checkout">
                        <div className="title">
                            <h2>I tuoi dati:</h2>
                            <p>{myInfo}</p>
                        </div>
                        <button onClick={handleTable}>Conferma</button>
                    </div>
                </div>

                <div className="right-half">
                    <div className="reservation-table">
                        <div className="title">
                            <h2>Elenco prenotazioni:</h2>
                            {myTable.map((reservation, index) => (
                                <div key={index}>
                                    <p>{reservation}</p>
                                    <button onClick={() => handleDelete(index)}>Cancella</button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
