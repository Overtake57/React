import React from "react";

const Cars = (props) => {
  console.log(props.children);
  return (
    <div
      className="cars"
      style={{
        backgroundColor: "green",
        color: "white",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      <p>Marque : {props.children}</p>
      <p>Année : {props.year}</p>
      <p>Couleur : {props.color}</p>
    </div>
  );
};
export default Cars;
