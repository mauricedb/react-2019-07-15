import React from "react";

import { Provider } from "react-redux";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Display from "./components/Display";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Counter />
        <Person />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
