import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App1 from './Components1/App1';
import App4 from "./components4/App4";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App4 title="Mon App React" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
