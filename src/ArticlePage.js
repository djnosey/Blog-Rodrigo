import React from "react";
import { useLocation } from "react-router-dom";
import "./articlepage.css";
import data from "./data.json";
import MoreArticles from "./MoreArticles";
import YouTube from "react-youtube-embed";
import Table from "./Table";
import Twitter2 from './Twitter2'

function ArticlePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentCard =
    data.articles.filter((card) => card.id === params.get("id"))[0] || {};

  return (
    <div className="articlepage">
      {currentCard.image === "" ? (
        <div></div>
      ) : (
        <img src={currentCard.image} alt={currentCard.title} />
      )}

      <h1>{currentCard.title}</h1>
      <h4>
        Publicado em {currentCard.date} por {currentCard.author}
      </h4>
      <h3>{currentCard.headline}</h3>

      <div className="articlePage__top">
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
        <div className="articlePage__twitter">
          <Twitter2 />
        </div>
      </div>
      {currentCard.tablemiddle === "true" ? <Table /> : <div></div>}

      {currentCard.secondImage === "" ? (
        <div></div>
      ) : (
        <img alt={currentCard.title} src={currentCard.secondImage}></img>
      )}
      {currentCard.iframe === "" ? (
        <div></div>
      ) : (
        <YouTube className="ariclePage__video" id={currentCard.iframe} />
      )}

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
      {currentCard.tablemiddle !== "true" ? <Table /> : <div></div>}
      <MoreArticles className="articlePage__more" />
    </div>
  );
}

export default ArticlePage;
