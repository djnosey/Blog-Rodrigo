import React from "react";
import Center from "./Center";
import LeftSide from "./LeftSide";
import MoreArticles from "./MoreArticles";
import Table from "./Table";
import TwitterFeed from "./TwitterFeed";

function Home() {
  return (
    <div>
      <div className="app">
        <div className="app__container">
          <div className="app__left">
            <LeftSide />
          </div>
          <div className ="app__line"></div>
          <div className="app__center">
            <Center />
          </div>
          <div className ="app__line"></div>
          <div className="app__right">
            <TwitterFeed />
          </div>
        </div>
        <Table />
        <h2>More articles</h2>
        <MoreArticles />
        
      </div>
    </div>
  );
}

export default Home;
