import React from "react";
import Greet from "./components/Greet";

function App() {
  return (
    <div>
      <h1>Proyecto desde 0</h1>
      <Greet people="Nancy" edad={26} />
      <Greet people="Arturo" edad={30} />
      <Greet people="Alejandro" edad={33} />
    </div>
  );
}

export default App;
