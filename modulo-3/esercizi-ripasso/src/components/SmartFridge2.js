import "../App.css";

import { useState } from 'react';

export default function SmartFridge2() {
    const [prodotto, setProdotto] = useState({
        nome: '',
        tipologia: '',
        numero: 0
    })
    const [prodotti, setProdotti] = useState([])

    function addProduct(which) {
        return function (e) {
            let copy = JSON.parse(JSON.stringify(prodotto))
            copy[which] = e.target.value
            setProdotto(copy)
        }

    }

    const handleClick = () => {
        let copy = JSON.parse(JSON.stringify(prodotti))
        copy.push(prodotto)
        setProdotti(copy)
    }

    return (
        <>
            <div className="fridge">
                <input
                    type="text"
                    placeholder='Nome prodotto'
                    onChange={addProduct('nome')}
                />
                <input
                    type="text"
                    placeholder='Tipologia prodotto'
                    onChange={addProduct('tipologia')}
                />
                <input
                    type="number"
                    placeholder='Quantità prodotto'
                    onChange={addProduct('numero')}
                />
                <button onClick={handleClick}>Aggiungi prodotto</button>
                <h2>I miei prodotti:</h2>
                {prodotti.map((p) => 
                    <p>{p.nome} {p.tipologia} {p.numero}</p>
                )}
            </div>
        </>
    )
}