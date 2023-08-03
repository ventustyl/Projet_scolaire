import React, { useState } from "react";

function Matiere({ listeMatieres, setListeMatieres }) {
  const [matiere, setMatiere] = useState("");
  const [confirmationSuppression, setConfirmationSuppression] = useState(false);
  const [matiereASupprimer, setMatiereASupprimer] = useState("");

  const ajouterMatiere = () => {
    if (matiere.trim() !== "") {
      setListeMatieres([...listeMatieres, matiere]);
      setMatiere("");
    }
  };

  const supprimerMatiere = (matiere) => {
    setMatiereASupprimer(matiere);
    setConfirmationSuppression(true);
  };

  const confirmerSuppression = (matiere) => {
    const newListeMatieres = listeMatieres.filter(
      (m) => m !== matiereASupprimer
    );
    setListeMatieres(newListeMatieres);
    setConfirmationSuppression(false);
  };

  const annulerSuppression = () => {
    setConfirmationSuppression(false);
  };

  return (
    <div className="module">
      <h1>Liste des matières</h1>
      <div>
        <input
          type="text"
          value={matiere}
          onChange={(e) => setMatiere(e.target.value)}
          placeholder="Entrez une matière"
        />
        <button onClick={ajouterMatiere}>Ajouter</button>
      </div>
      <ul>
        {listeMatieres.map((matiere, index) => (
          <li key={index} onClick={() => supprimerMatiere(matiere)}>
            {matiere}
          </li>
        ))}
      </ul>
      {confirmationSuppression && (
        <div>
          <p>
            Voulez-vous vraiment supprimer cette matière {matiereASupprimer} ?
          </p>
          <button onClick={confirmerSuppression}>Oui</button>
          <button onClick={annulerSuppression}>Non</button>
        </div>
      )}
    </div>
  );
}

export default Matiere;
