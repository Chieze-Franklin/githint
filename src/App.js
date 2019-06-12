import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BranchPage from "./components/pages/Branch";
import CommitPage from "./components/pages/Commit";
import HomePage from "./components/pages/Home";

import { Provider, state } from './context';

function App() {
  return (
    <Provider value={state}>
      <React.StrictMode>
        <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/branch" component={BranchPage} />
          <Route exact path="/commit" component={CommitPage} />
        </Switch>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
