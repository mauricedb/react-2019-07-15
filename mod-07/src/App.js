import React, { StrictMode } from "react";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>Better React Components</h1>
      <StrictMode>
        <Counter />
        <Person />
        <Clock interval={1000} message={{}} person={{ firstName: "" }} />
      </StrictMode>
    </div>
  );
}

export default App;
