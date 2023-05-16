import React, { useState } from 'react';

const LivrePage = () => {
  const [livres, setLivres] = useState([
    {
      id: 1,
      titre: "Les Secrets de l'Univers",
      description: "Une exploration fascinante de l'univers et de ses mystères.",
      image: "../composants/image1.jpg"
    },
    {
      id: 2,
      titre: "Le Chemin de la Sagesse",
      description: "Un guide pratique pour trouver le bonheur et l'épanouissement.",
      image: "../composants/image2.jpg"
    },
    {
      id: 3,
      titre: "Le Mystère du Manoir Hanté",
      description: "Une aventure captivante dans un manoir rempli de secrets effrayants.",
      image: "../composants/image3.jpg"
    }
  ]);

  const ajouterLivre = (nouveauLivre) => {
    setLivres([...livres, nouveauLivre]);
  };

  const supprimerLivre = (livreId) => {
    const nouveauxLivres = livres.filter(livre => livre.id !== livreId);
    setLivres(nouveauxLivres);
  };

  return (
    <div className="container">
      <h1>Liste des Livres</h1>

      {/* Affichage de la liste des livres */}
      {livres.map(livre => (
        <div key={livre.id} >
          <img src={livre.image}  />
          <h2>{livre.titre}</h2>
          <p>{livre.description}</p>

          {/* Bouton pour supprimer le livre */}
          <button className="bouton-grand" onClick={() => supprimerLivre(livre.id)}>
            Supprimer ce livre
          </button>
        </div>
      ))}
      {/* Bouton pour ajouter un livre */}
      <button className="bouton-grand" onClick={() => ajouterLivre({ id: 4, titre: "Nouveau Livre", description: "Description du nouveau livre", image: "../composants/image4.jpg" })}>
        Ajouter un livre
      </button>
      
    </div>
    
  );
};

export default LivrePage;
