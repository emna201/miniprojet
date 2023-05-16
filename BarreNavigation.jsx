import { Link } from 'react-router-dom';

function BarreNavigation   () {
  return (
    <div className="container">
      <h1>Barre de navigation </h1>
      <p>Bienvenue sur notre site de Livres !</p>
      <nav>
        <ul>
          <li>
            <Link to="/Accueil">Home</Link>
          </li>
          <li>
            <Link to="/livres">les livres</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BarreNavigation;