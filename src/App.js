import React from "react";
import CrupApp from "./Componentes/CrupApp";
import CrupApi from "./Componentes/CrupApi";
import "./App.css";

function App() {
  return (
    <div>
      <h1>ejercicio de Crup</h1>
      <CrupApi />
      <hr />
      <CrupApp />
      <hr />
    </div>
  );
}

export default App;
