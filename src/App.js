import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DirectoryPage from "./components/pages/Directory";
import HomePage from "./components/pages/Home";

import { Provider } from './context-api-redux';
import store from './context-api-redux/store';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/branch" render={props => {
            return (<DirectoryPage object="branch" />)
          }} />
          <Route exact path="/commit" render={props => {
            return (<DirectoryPage object="commit" />)
          }} />
        </Switch>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
