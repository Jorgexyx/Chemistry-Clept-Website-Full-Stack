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
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/section/:id">
            s
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
