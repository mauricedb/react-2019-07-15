import React from "react";

import Person from "./components/PersonContainer";

const onSave = person => alert(JSON.stringify(person));

function App() {
  return (
    <div>
      <h1>Unit-testing React Components</h1>
      <Person onSave={onSave} />
    </div>
  );
}

export default App;
