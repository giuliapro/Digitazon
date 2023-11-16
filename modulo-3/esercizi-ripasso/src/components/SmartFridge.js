import "../App.css";

import { useState } from 'react';

export default function SmartFridge() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [num, setNum] = useState(0)
  const [info, setInfo] = useState([])

  const handleClick = () => {
    const newInfo = {
      Nome: name,
      Tipologia: type,
      Quantità: num
    }
    setInfo([...info, newInfo])
    setName('');
    setType('');
    setNum(0);
  }

  return (
    <>
      <div className='fridge'>
        <input
          type='text'
          placeholder='Nome prodotto'
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <input
          type='text'
          placeholder='Tipologia prodotto'
          onChange={(e) => {
            setType(e.target.value)
          }}
          value={type}
        />
        <input
          type='number'
          placeholder='Quantità prodotto'
          onChange={(e) => {
            setNum(e.target.value)
          }}
          value={num}
        />
        <button onClick={handleClick}>Aggiungi prodotto</button>
        <h2>I miei prodotti:</h2>
        {/* mappo l'array info per renderizzare ogni oggetto separatamente */}
        <ul>
          {info.map((item, index) => (
            <li key={index}>
              Nome: {item.Nome},
              Tipologia: {item.Tipologia},
              Quantità: {item.Quantità}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
