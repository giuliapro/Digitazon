import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Spotify from './components/Spotify';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Info from './components/Info'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Spotify />}>
            <Route path="/playlist/:artist" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode >
);
