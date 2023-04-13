import React from "react";
import Membre from "./Membre";
import Button from "./Button"; // import du composant Button

const famille = {
  membre1: {
    nom: "Yoann",
    age: 22,
  },
  membre2: {
    nom: "Jimmy",
    age: 26,
  },
  membre3: {
    nom: "Rhobalass",
    age: 26,
  },
  membre4: {
    nom: "Alderiate",
    age: 27,
  },
};

class App4 extends React.Component {
  state = { famille };
  
  handleClick = () => {
    const famille = { ...this.state.famille };
    famille.membre1.age += 1;
    this.setState({ famille });
  };
  
  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    
    return (
      <div className="App4">
        <h1>{titre}</h1>
        <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
        <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
        <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
        <Membre nom={famille.membre4.nom} age={famille.membre4.age} />
        <strong>Le chaudron de monster</strong>
        <Button viellir={() => this.handleClick(2)} /> {/* Utilisation du composant Button */}
      </div>
    );
  }
}

export default App4;
