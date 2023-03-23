// export default App;
import { useState } from "react";

function App() {
  // state (etat, donnees)
  const [compteur, setCompteur] = useState(1);

  // comportements
  const handleClick = () => {
    //! compteur = compteur + 1
    setCompteur(compteur + 1);
  };

  //affichage (render)
  //? interpolation JSX : Permet d'inclure du Js dans du JSX , et Wrap sous une div entre () -> (ctrl + maj + p)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
