import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Spotify from './components/Spotify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App" >
      <Spotify />
    </div>
  </React.StrictMode>
);
