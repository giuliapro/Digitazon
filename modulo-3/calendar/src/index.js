import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  </React.StrictMode>
);
