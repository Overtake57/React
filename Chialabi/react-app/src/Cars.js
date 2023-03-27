import React from "react";

const Cars = ({ color, children }) => {
  const colorInfo = color ? <p>Couleur:{color}</p> : <p>Couleur:Neant</p>;

  if (children) {
    return (
      <div
        className="Cars"
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Marque: {children}</p>
        {colorInfo}
      </div>
    );
  } else {
    return (
      <div
        className="Cars"
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p> No data</p>
      </div>
    );
  }
};
export default Cars;
