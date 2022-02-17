import React from "react";
import Coments from "./components/Coments";
import Greet from "./components/Greet";

function App() {
  return (
    <div>
      <h1>Proyecto desde 0</h1>
      <Greet people="Nancy" edad={26} />
      <Greet people="Arturo" edad={30} />
      <Greet people="Alejandro" edad={33} />
      <hr />
      <h3>Box coments</h3>
      <Coments
        urlImage="https://picsum.photos/64"
        subject="Nancy"
        text="hola mi nombre es Nancy"
      />
      <Coments
        urlImage="https://picsum.photos/64"
        subject="Arturo"
        text="hola mi nombre es Arturo"
      />
      <Coments
        urlImage="https://picsum.photos/64"
        subject="Alejandro"
        text="hola mi nombre es Alejandro"
      />
    </div>
  );
}

export default App;
