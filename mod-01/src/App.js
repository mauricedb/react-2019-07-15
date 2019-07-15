import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greeter from "./components/Greeter";
import Clock from "./components/Clock";
import Editor from "./components/Editor";
import Jokes from "./components/Jokes";

function App() {
  const person = {
    firstName: "Maurice"
  };

  return (
    <div className="App">
      <Greeter message="Hello from App again" person={person} />
      <Clock />
      <Editor />
      <Jokes />
    </div>
  );
}

export default App;
