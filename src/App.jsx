import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Face from "./Face";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl ">
    <Face />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
