import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Year from './components/Year';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App" >
      <header className="App-header" >
        <div>
          <Year />
        </div>
      </header>
    </div>
  </React.StrictMode>
);
