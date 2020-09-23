import React from "react";
import "./app.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

//BEM

function App() {
  const listenScrollEvent = () => {
    console.log("Scroll event detected!");
  };

  listenScrollEvent();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
