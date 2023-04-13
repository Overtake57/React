import React, { Component } from "react";
import Cars from "./Cars";

const cars={
  voiture1: {
    name:"Ford",
    color:"bleu",
    year:2000
  },
  voiture2: {
    name:"Peugeot",
    color:"rouge",
    year:1999
  },
  voiture3: {
    name:"Nissan",
    color:"jaune",
    year:2020
  }
}


class Mycars extends Component {
  state={
    voitures:[
      {name:"ford",year:2000,color:"bleu"},
      {name:"Peugeot",year:2100,color:"rouge"},
      {name:"Nissan",year:2070,color:"jaune"}
    ]
  }
  render() {
    const {voitures}=this.state
    const liste = voitures.map((voiture,i)=>
    <Cars
    key={i}
    color={voiture.color}
    year={voiture.year}>
    {voiture.name}</Cars>
    )
    return (
      <div className="Mycars">
        <h1>Hello React</h1>
        {liste}
        {/* <Cars color="rouge" year="2000">Ford</Cars>
        <Cars color="bleu" year="1999">Peugeot</Cars>
        <Cars color="jaune" year="1245">Nissan</Cars> */}
        <button>Changer le nom en dur</button>
        <button>Via paramètre</button>
        <button>Mon catalogue de voiture</button>
      </div>
    );
  }
}
export default Mycars;