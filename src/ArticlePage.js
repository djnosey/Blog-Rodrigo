import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./articlepage.css";
import data from "./data.json";
import Footer from "./Footer";
import MoreArticles from "./MoreArticles";
import YouTube from 'react-youtube-embed'

function ArticlePage(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentCard =
    data.articles.filter((card) => card.id === params.get("id"))[0] || {};

  return (
    <div className="articlepage">
      <img src={currentCard.image} alt={currentCard.title} />
      <h1>{currentCard.title}</h1>
      <h3>{currentCard.headline}</h3>

      <div className="articlepage__paragraphs">
        <p>{currentCard.paragraph1}</p>
        <p>{currentCard.paragraph2}</p>
        <p>{currentCard.paragraph3}</p>
        <p>{currentCard.paragraph4}</p>
        <p>{currentCard.paragraph5}</p>
        <p>{currentCard.paragraph6}</p>
        <p>{currentCard.paragraph7}</p>
        <p>{currentCard.paragraph8}</p>
        <p>{currentCard.paragraph9}</p>
        <p>{currentCard.paragraph10}</p>
      </div>

      {currentCard.secondImage === "" ? <div></div> : <img src={currentCard.secondImage}></img>}
      {currentCard.iframe === "" ? <div></div> : <YouTube className = "ariclePage__video" id={currentCard.iframe} />}

      <div className="articlepage__paragraphs">
        <p>{currentCard.paragraph11}</p>
        <p>{currentCard.paragraph12}</p>
        <p>{currentCard.paragraph13}</p>
        <p>{currentCard.paragraph14}</p>
        <p>{currentCard.paragraph15}</p>
        <p>{currentCard.paragraph16}</p>
        <p>{currentCard.paragraph17}</p>
        <p>{currentCard.paragraph18}</p>
        <p>{currentCard.paragraph19}</p>
        <p>{currentCard.paragraph20}</p>
      </div>

      <MoreArticles className ="articlePage__more" />
      <Footer />

      <div className="articlePage__back ">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default ArticlePage;
