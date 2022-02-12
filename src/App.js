import React from "react";
import CrupApp from "./Componentes/CrupApp";
import CrupApi from "./Componentes/CrupApi";
import "./App.css";
import SongSearch from "./Componentes/SongSearch";

function App() {
  return (
    <div>
      <h1>ejercicio de Crup</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrupApi />
      <hr />
      <CrupApp />
      <hr />
    </div>
  );
}

export default App;
