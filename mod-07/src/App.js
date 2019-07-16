import React from "react";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>Better React Components</h1>
      <Counter />
      <Person />
      <Clock interval={1000} />
    </div>
  );
}

export default App;
