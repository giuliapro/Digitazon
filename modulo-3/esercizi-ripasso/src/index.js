import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SmartFridge from './components/SmartFridge';
import SmartFridge2 from './components/SmartFridge2';
import PariDispari from './components/PariDispari';
import Chart from './components/Chart';
import Cart from './components/Carrello';
import Alarm from './components/Alarm';
import Sum from './components/MathCalc/Sum';
import Division from './components/MathCalc/Division';
import Triangle from './components/MathCalc/Triangle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App" >
      <header className="App-header" >
        <Sum />
        <Division />
        <Triangle />
      </header>
    </div>
  </React.StrictMode>
);
