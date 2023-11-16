import React, { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.status === 201) {
          // Registrazione riuscita
          setRegistrationMessage('Registrazione riuscita!');
          // Puoi anche reimpostare il modulo di registrazione
          setFormData({ username: '', email: '', password: '' });
        } else if (response.status === 400) {
          // Gestisci errori di validazione
          setRegistrationMessage('Devi fornire username, email e password.');
        } else if (response.status === 409) {
          // Utente esistente
          setRegistrationMessage('L\'utente con questa email è già registrato.');
        } else {
          // Gestisci altri errori
          setRegistrationMessage('Errore sconosciuto durante la registrazione.');
        }
      });
  };

  return (
    <div>
      <h2>Registrazione</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Registrati</button>
      <p>{registrationMessage}</p>
    </div>
  );
}