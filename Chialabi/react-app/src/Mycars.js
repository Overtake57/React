// Mycars.js
import React, { Component } from "react";
import "./App.css";
import Cars from "./Cars";

class Mycars extends Component {
  render() {
    return (
      <div className="MyCars">
        <h1>Hello React</h1>
        <Cars>Ford</Cars>
        <Cars>Peugeot</Cars>
        <Cars>Nissan</Cars>
      </div>
    );
  }
}

export default Mycars;
