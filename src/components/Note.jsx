import React, { useState } from "react";

function Note({ listePrenoms, listeMatieres, eleveListe, setEleveListe }) {
  // Déclaration des états locaux avec useState
  const [selectedEleve, setSelectedEleve] = useState(""); // État pour le nom de l'élève sélectionné
  const [selectedMatiere, setSelectedMatiere] = useState(""); // État pour la matière sélectionnée
  const [note, setNote] = useState(""); // État pour la note entrée

  // Fonction pour ajouter une note
  const ajouterNote = () => {
    // Vérification que tous les champs obligatoires sont remplis
    if (selectedEleve && selectedMatiere && note !== "") {
      // Copie de la liste des élèves pour éviter de modifier l'état original
      const newEleveListe = eleveListe.map((eleve) => ({ ...eleve }));

      // Recherche de l'index de l'élève sélectionné dans la nouvelle liste
      const eleveIndex = newEleveListe.findIndex(
        (eleve) => eleve.eleve === selectedEleve
      );

      // Si l'élève est déjà présent dans la liste
      if (eleveIndex !== -1) {
        // Recherche de l'index de la matière sélectionnée dans la liste des matières de l'élève
        const matiereIndex = newEleveListe[eleveIndex].matieres.findIndex(
          (m) => m.matiere === selectedMatiere
        );

        // Si la matière est déjà présente dans la liste des matières de l'élève
        if (matiereIndex !== -1) {
          // Ajout de la note à la liste des notes de la matière
          newEleveListe[eleveIndex].matieres[matiereIndex].notes.push(
            parseFloat(note)
          );
        } else {
          // Si la matière n'est pas présente, création d'une nouvelle entrée pour la matière avec la note
          newEleveListe[eleveIndex].matieres.push({
            matiere: selectedMatiere,
            notes: [parseFloat(note)],
          });
        }
      } else {
        // Si l'élève n'est pas présent dans la liste, création d'une nouvelle entrée pour l'élève avec la matière et la note
        newEleveListe.push({
          eleve: selectedEleve,
          matieres: [{ matiere: selectedMatiere, notes: [parseFloat(note)] }],
        });
      }

      // Mise à jour de la liste des élèves avec la nouvelle liste
      setEleveListe(newEleveListe);
      // Réinitialisation de l'état de la note à une chaîne vide
      setNote("");
    }
  };

  // Génère les options pour le dropdown des élèves
  const eleveOptions = listePrenoms.map((prenom, index) => (
    <option key={index} value={prenom}>
      {prenom}
    </option>
  ));

  // Génère les options pour le dropdown des matières
  const matiereOptions = listeMatieres.map((matiere, index) => (
    <option key={index} value={matiere}>
      {matiere}
    </option>
  ));

  // Rendu du composant
  return (
    <div className="module">
      <h1>Ajouter une note</h1>
      <div>
        <label htmlFor="eleve">Élève :</label>
        <select
          id="eleve"
          value={selectedEleve}
          onChange={(e) => setSelectedEleve(e.target.value)}
        >
          <option value="">Sélectionner un élève</option>
          {eleveOptions}
        </select>
      </div>
      <div>
        <label htmlFor="matiere">Matière :</label>
        <select
          id="matiere"
          value={selectedMatiere}
          onChange={(e) => setSelectedMatiere(e.target.value)}
        >
          <option value="">Sélectionner une matière</option>
          {matiereOptions}
        </select>
      </div>
      <div>
        <label htmlFor="note">Note :</label>
        <input
          type="number"
          id="note"
          min="0"
          max="20"
          step="0.25"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button onClick={ajouterNote}>Ajouter</button>
    </div>
  );
}

export default Note;
