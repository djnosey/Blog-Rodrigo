import React from "react";
import "./moreArticles.css";
import data from "./data.json";

function MoreArticles() {

  const list = [];
  for (let i = 0; i < data.articles.length; i++) {
    list.push(data.articles[i].title);
  }

  return (
    <div className="moreArticles">
        <h2>More articles</h2>
      <ul>
        {list.map((item) => (
          <li key={item} >{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoreArticles;
