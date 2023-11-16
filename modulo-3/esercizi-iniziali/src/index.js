import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import PlusMinus from './components/PlusMinus';
import Hello from './components/Hello';
import Chat from './components/Chat';
import ToDoList from './components/ToDoList';
import Categories from './components/Categories';
import HitTheMole from './components/HitTheMole/HitTheMole';
import InputText from './components/InputText';
import Reservation from './components/Reservation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App" >
      <header className="App-header" >
        <Reservation />
      </header>
    </div>
  </React.StrictMode>
);
