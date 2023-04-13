import React from "react";
import ButtonTest from "./Condition_Log/ButtonTest";

const Welcome = ({ nom, children }) => {
  return (
    <div>
      <h1>
        Bonjour {nom}, {children}
      </h1>
    </div>
  );
};

export default Welcome;
