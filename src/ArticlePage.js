import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./articlepage.css";
import data from "./data.json";
function ArticlePage(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentCard =
    data.articles.filter((card) => card.id === params.get("id"))[0] || {};
console.log(currentCard.image)
console.log(currentCard.title)
  return (
    <div className="articlepage">
      <img
        src={currentCard.image}
        alt={currentCard.title} /*this should be data.articles.image*/
      />
      <h1>{currentCard.headline}</h1>
      {/*this should be data.articles.headline*/}
      <p>{currentCard.content}</p> {/*this should be data.articles.content*/}
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default ArticlePage;
