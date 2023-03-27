import "./App.css";
import React, { Component } from "react";
import Mycars from "./Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue voiture",
  };
  changeTitre = (e) => {
    this.setState({ titre: "Mon nouveau titre" });
  };
  changeViaParam = (titre) => {
    this.setState({ titre: titre });
  };

  changeViaInput = (e) => {
    this.setState({ titre: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Mycars titre={this.state.titre} />
        <button onClick={this.changeTitre}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam("Titre via Param")}>
          <input
            onChange={this.changeViaInput}
            value={this.state.titre}
          ></input>
          Via parametre
        </button>
      </div>
    );
  }
}
// Toujour faire une export defaut App;
export default App;
