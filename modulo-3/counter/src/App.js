import './App.css';
import { useState, useEffect } from 'react'; // importo l'hook dello stato

function App() {
  const [count, setCount] = useState(0)
  // a sx: definisco lo stato con count e l'aggiornamento dello stato con setCount
  // a dx: invoco la funzione col valore iniziale (in questo caso 0)
  const [direction, setDirection] = useState(true)
  // stessa roba ma per la direzione
  // uso lo stato anche qui perché il cambio di direzione deve sopravvivere ai re-render,
  // una variabile non lo farebbe !!!!

  useEffect(() => { // hook che serve per gestire i side-effect
    if (count === 10 || count === 0) {
      setDirection(!direction) // inverto la direzione
    }
  }, [count])

  function counterOnChange() {
    if (direction) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }
  // da rivedere perché non va 
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p> {/* mi metto nel mondo js e richiamo la variabile */}
        <button onClick={counterOnChange}>click!</button>
      </header>
    </div>
  );
}

export default App;