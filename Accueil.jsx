import React from 'react';
import { Link } from 'react-router-dom';
import './accueil.css';
function Accueil() {
  return (
    <div className="container">
      <h1>Accueil</h1>
      <p>Bienvenue sur notre site !</p>
      <nav>
        <ul>
          <li>
            <Link to="/livres">Voir les livres</Link>
          </li>
          <li>
            <Link to="/contact">Contactez-nous</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Accueil;