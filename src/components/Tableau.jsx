import React from "react";

function Tableau({ listePrenoms, listeMatieres, eleveListe }) {
  // Fonction pour calculer la moyenne d'un élève
  const calculerMoyenneEleve = (eleve) => {
    const matieres = eleve?.matieres;
    if (matieres && matieres.length > 0) {
      const notes = matieres.flatMap((m) => m.notes);
      if (notes && notes.length > 0) {
        const sommeNotes = notes.reduce((total, note) => total + note, 0);
        const moyenne = sommeNotes / notes.length;
        return moyenne.toFixed(2);
      }
    }
    return "-";
  };

  // Fonction pour calculer la moyenne d'une matière
  const calculerMoyenneMatiere = (matiere) => {
    const matiereNotes = eleveListe.flatMap(
      (eleve) => eleve.matieres.find((m) => m.matiere === matiere)?.notes
    );
    if (matiereNotes && matiereNotes.length > 0) {
      const sommeNotes = matiereNotes.reduce((total, note) => total + note, 0);
      const moyenne = sommeNotes / matiereNotes.length;
      return moyenne.toFixed(2);
    }
    return "-";
  };

  // Rendu du composant
  return (
    <div className="module">
      <h1>Tableau des notes</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            {listePrenoms.map((prenom, index) => (
              <th key={index}>{prenom}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listeMatieres.map((matiere, index) => (
            <tr key={index}>
              <td>{matiere}</td>
              {listePrenoms.map((prenom, index) => (
                <td key={index}>
                  {/* Affiche les notes de l'élève pour la matière actuelle ou "-" s'il n'y a pas de notes */}
                  {eleveListe
                    .find((eleve) => eleve.eleve === prenom)
                    ?.matieres.find((m) => m.matiere === matiere)
                    ?.notes.join(", ") || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {console.log(listePrenoms)}
            {listePrenoms.length !== 0 && listeMatieres.length !== 0 ? (
              <th>Moyenne</th>
            ) : (
              <th>Pas de moyenne</th>
            )}

            {listePrenoms.map((prenom, index) => (
              <th key={index}>
                {/* Affiche la moyenne de l'élève pour toutes les matières */}
                {calculerMoyenneEleve(
                  eleveListe.find((eleve) => eleve.eleve === prenom)
                )}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Tableau;
