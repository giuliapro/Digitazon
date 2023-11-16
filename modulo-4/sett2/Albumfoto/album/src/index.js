import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Album from './components/Album';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App-header'>
      <Album />
    </div>
  </React.StrictMode>
);

