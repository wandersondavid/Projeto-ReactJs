import React from 'react';

import './App.css';
import logo from './assets/logo.svg'
function App() {
  return (
  <div className="container">
    <img src={logo} alt="AirCnC"></img>

    <div className="content">
    <p>
      Ofereça <strong>spots</strong>para progamadores e encontre <strong>talentos</strong> para sua empresa
    </p>
    <form>
      <label htmlFor="email"> E-mail *</label>
      <input type="email" id="email" placeholder="Seu melho e-mail"/>

      <button type="submit">Entrar</button>
    </form>
    </div>
  </div>
  );
}

export default App;
