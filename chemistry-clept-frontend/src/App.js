import React from 'react';
import Layout from './components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            ss
          </Route>

          <Route path="/:section">
            s
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
