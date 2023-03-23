// import { useRef } from "react";
import { useState } from "react";

function App() {
  //todo state (etat, donnees):

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("Sam");

  //? le hook "useRef" permet de creer une reference a un element
  // const inputRef = useRef();
  //? JSX et variable, En react,une variable peut contenir du JSX !
  // const voiture = <li>Tesla</li>;
  // const voitures = [<li>Audi</li>, <li>BMW</li>, <li>Mercedes</li>];

  //todo comportements :

  const handleDelete = (id) => {
    console.log(id);

    //1. copie du state
    const fruitsCopy = [...fruits]; //? .slice() fonctionne aussi

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3.modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("HandleSubmit");
    // console.log(inputRef.current.value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  //todo affichage (render) :

  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;

// Gestion du formulaire
// 1. creation du formulaire
// 2. soumission du formulaire
// 3.collecte des donnees du formulaire
//! En React, on ne manipule pas le DOM ! On laisse React manipuler le DOM et l'affichage pour nous.
//! On ne peu donc pas utiliser documentGetElementById() et querrySelector() de JavaScript
//? 3.a methode 1 : documentGetElementById "React"
//? 3.b methode 2 : synchronisation descendante et ascendante
