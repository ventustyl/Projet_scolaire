import React, { useState } from "react";
import Prenom from "./components/Prenom";
import Matiere from "./components/Matiere";
import Note from "./components/Note";
import Tableau from "./components/Tableau";
import "./App.css";

function App() {
  const [listePrenoms, setListePrenoms] = useState([]);
  const [listeMatieres, setListeMatieres] = useState([]);
  const [eleveListe, setEleveListe] = useState([]);

  return (
    <>
      <h1 className="titre">Projet scolaire</h1>
      <div className="container">
        <Prenom listePrenoms={listePrenoms} setListePrenoms={setListePrenoms} />
        <Matiere
          listeMatieres={listeMatieres}
          setListeMatieres={setListeMatieres}
        />
        <Note
          listePrenoms={listePrenoms}
          listeMatieres={listeMatieres}
          eleveListe={eleveListe}
          setEleveListe={setEleveListe}
        />
        <Tableau
          listePrenoms={listePrenoms}
          listeMatieres={listeMatieres}
          eleveListe={eleveListe}
        />
      </div>
    </>
  );
}

export default App;
