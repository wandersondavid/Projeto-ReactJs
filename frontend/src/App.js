import React from 'react';

import './App.css';
import logo from './assets/logo.svg'
import Routes from './routes'
function App() {

  

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes/>
      </div>
    </div>
  );

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong>para progamadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form>
          <label htmlFor="email"> E-mail *</label>
          <input type="email" id="email" placeholder="Seu melho e-mail" />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
   );

  }

export default App;
