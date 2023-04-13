import React, { useState } from "react";
import "./App.css";

const ExoCondition = () => {
  const [isLogin, setLoginState] = useState(false);
  const toggleFonction = () => {
    setLoginState(!isLogin);
  };
  return (
    <div className="Condition">
      <header className="ExoCondition-header">
        <div className="log">
          {isLogin === true ? "Bienvenue !" : "Veuillez vous inscrire"}
        </div>
        <button onClick={toggleFonction} className="button">
          {isLogin === true ? "connexion" : "déconnexion"}
        </button>
      </header>
    </div>
  );
};

export default ExoCondition;

const App = () => {
  const [input, setInput] = useState("");
  const handleClique = () => {
    alert("hello");
  };
  return (
    <div>
      <Welcome nom="Sarah"> tu es la bievenue </Welcome>
      <Welcome nom="Eric" />
    </div>
  );
};
