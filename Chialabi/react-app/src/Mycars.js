import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("Ne pas copier svp");
  };
  addStyle = (e) => {
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };
  render() {
    return (
      <div className="Cars">
        <h1 onMouseMove={this.addStyle}>{this.props.titre}</h1>

        <p onCopy={this.noCopy}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
          veritatis maxime, perferendis accusantium laudantium accusamus.
          Molestiae architecto perferendis nobis, unde aspernatur reiciendis
          dolor quidem autem laboriosam excepturi consectetur quaerat dolore!
        </p>

        <Cars color=" rouge">Ford</Cars>
        <Cars color=" bleu">Peugoet</Cars>
        <Cars></Cars>
      </div>
    );
  }
}

// Toujours ajouter cette ligne pour exporter un composant
export default Mycars;
