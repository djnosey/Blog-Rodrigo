import React from "react";
import Center from "./Center";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import TwitterFeed from "./TwitterFeed";

function Home() {
  return (
    <div>
      <div className="app">
        <div className="app__container">
          <div className="app__left">
            <LeftSide />
          </div>
          <div className="app__center">
            <Center />
          </div>
          <div className="app__right">
            <TwitterFeed />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
