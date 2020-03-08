import React from 'react';
import "./scss/loader.css"
import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/Homepage'
import SectionQuestions from './pages/SectionQuestions'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/section/:name">
            <SectionQuestions />
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
