import React from "react";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is starred page
      </Route>

      <Route >
        This is 404 page
      </Route>
    </Switch>
  );
}

export default App;
