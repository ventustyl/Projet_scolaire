import React, { useState } from "react";

function Prenom({ listePrenoms, setListePrenoms }) {
  const [prenom, setPrenom] = useState("");
  const [confirmationSuppression, setConfirmationSuppression] = useState(false);
  const [prenomASupprimer, setPrenomASupprimer] = useState("");

  const ajouterPrenom = () => {
    if (prenom.trim() !== "") {
      setListePrenoms([...listePrenoms, prenom]);
      setPrenom("");
    }
  };

  const supprimerPrenom = (prenom) => {
    setPrenomASupprimer(prenom);
    setConfirmationSuppression(true);
  };

  const confirmerSuppression = () => {
    const newListePrenoms = listePrenoms.filter((p) => p !== prenomASupprimer);
    setListePrenoms(newListePrenoms);
    setConfirmationSuppression(false);
  };

  const annulerSuppression = () => {
    setConfirmationSuppression(false);
  };

  return (
    <div className="module">
      <h1>Liste des prénoms</h1>
      <div>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Entrez un prénom"
        />
        <button onClick={ajouterPrenom}>Ajouter</button>
      </div>
      <ul>
        {listePrenoms.map((prenom, index) => (
          <li key={index} onClick={() => supprimerPrenom(prenom)}>
            {prenom}
          </li>
        ))}
      </ul>
      {confirmationSuppression && (
        <div>
          <p>Voulez-vous vraiment supprimer ce prénom {prenomASupprimer} ?</p>
          <button onClick={confirmerSuppression}>Oui</button>
          <button onClick={annulerSuppression}>Non</button>
        </div>
      )}
    </div>
  );
}

export default Prenom;
