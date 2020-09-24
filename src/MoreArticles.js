import React from "react";
import "./moreArticles.css";
import data from "./data.json";
import {Link} from "react-router-dom"

function MoreArticles() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behaviour:"smooth"
    });
  }

  const list = [];
  for (let i = 5; i < data.articles.length; i++) {
    list.push(data.articles[i]);
    console.log(list)
  }

  return (
    <div className="moreArticles">
        <h2>More articles</h2>
      <ul>
        {list.map((item) => (
          <Link to={`/article?id=${item.id}`} onclick = {scrollTop()}><li id={item.id} key={item.id} >{item.title}</li></Link>
          
        ))}
      </ul>
    </div>
  );
}

export default MoreArticles;
