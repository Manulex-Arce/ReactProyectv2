// src/App.js

import React from "react";
import Menu from "./componentes/Menu";


function App() {
  return (
    <div className="App">
      <Menu /> {/* Incluir el componente de menú */}
      <header className="App-header">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es un sitio básico con React</p>
      </header>
    </div>
  );
}

export default App;
