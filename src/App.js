import React from 'react';
import { Route, Switch } from 'react-router';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
