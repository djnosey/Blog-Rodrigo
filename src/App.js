import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import NewHome from "./NewHome";
import NewArticlePage from "./NewArticlePage";
//BEM

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/article">
          <NewArticlePage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <NewHome />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
