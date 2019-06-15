import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ConfigPage from "./components/pages/Config";
import DirectoryPage from "./components/pages/Directory";
import HomePage from "./components/pages/Home";
import PrivacyPage from "./components/pages/Privacy";
import SupportPage from "./components/pages/Support";

import { Provider } from './context-api-redux';
import store from './context-api-redux/store';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/config" component={ConfigPage} />
            <Route exact path="/branch" render={props => {
              return (<DirectoryPage object="branch" />)
            }} />
            <Route exact path="/commit" render={props => {
              return (<DirectoryPage object="commit" />)
            }} />
            <Route exact path="/pull" render={props => {
              return (<DirectoryPage object="pull" />)
            }} />
            <Route exact path="/tree" render={props => {
              return (<DirectoryPage object="tree" />)
            }} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/support" component={SupportPage} />
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
