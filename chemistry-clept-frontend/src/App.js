import React from 'react';
import "./scss/loader.css"
import Layout from './components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/Homepage'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <HomePage />
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
