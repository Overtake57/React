import { useState } from "react";

export default function FruitForm ({handleAdd}){

    // state

    const [nouveauFruit, setNouveauFruit] = useState("");

    // comportements
    
  const handleSubmit = (event) => {
    event.preventDefault();

    //2. manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    // fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter)
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value); // update
  };

  // affichage (Render)
    return  <form action="submit" onSubmit={handleSubmit}>
    <input
      value={nouveauFruit}
      type="text"
      placeholder="Ajouter un fruit..."
      onChange={handleChange}
    />
    <button>Ajouter +</button>
  </form>
}