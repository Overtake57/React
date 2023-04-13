import React, { useState } from "react";

const Condition = () => {
  const [toggleState, setToggleState] = useState(false);
  const toggleFonction = () => {
    setToggleState(!toggleState);
  };
  return (
    <div className="Condition">
      <header className="Condition-header">
        <div
          onClick={toggleFonction}
          className={toggleState === false ? "Box" : "NotBox"}
        >
          Clique Me
        </div>
      </header>
    </div>
  );
};

export default Condition;
