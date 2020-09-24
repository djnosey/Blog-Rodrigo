import React from "react";
import "./app.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ArticlePage from "./ArticlePage";
import Footer from "./Footer";

//BEM

function App() {


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/article">
          <ArticlePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
