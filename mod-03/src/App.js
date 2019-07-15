import React from "react";
import "./App.css";

import { Route, Switch, Link } from "react-router-dom";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  return (
    <div>
      <header>
        <Link to="/cat">Cat</Link>
        <span> | </span>
        <Link to="/cat/Zorro">Cat</Link>
        <span> | </span>
        <Link to="/dog">Dog</Link>
      </header>

      {/* <Cat />
      <Dog /> */}
      <Switch>
        <Route path="/cat" exact component={Cat} />
        <Route path="/cat/:name" exact component={Cat} />
        <Route path="/dog" component={Dog} />
        <Route
          path="/"
          exact
          render={() => <div>The home page, make a choice</div>}
        />
        <Route render={() => <div>THis is not an animal</div>} />
      </Switch>
    </div>
  );
}

export default App;
