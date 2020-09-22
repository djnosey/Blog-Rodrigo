import React from "react";
import Navbar from "./Navbar";
import "./app.css";
import Footer from "./Footer";
import TwitterFeed from "./TwitterFeed";
import LeftSide from "./LeftSide";
import backgroundImage from "./images/backgroundImage.jpeg"


//BEM

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="app__container">

        <div className="app__left">
          <LeftSide />
        </div>
        <div className="app__right">
          <TwitterFeed />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
