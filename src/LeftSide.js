import React from "react";
import data from "./data.json";
import ImageCard from "./ImageCard";

function LeftSide() {
  const imageCardArray = [];

  for (let i = 3; i < 6; i++) {
    imageCardArray.push(data.articles[i]);
  }

  const featuredArticles = imageCardArray.map((elem) => (
    <ImageCard
      title={elem.title}
      date={elem.date}
      headline={elem.headline}
      key={elem.id}
      id={elem.id}
      image={elem.image}
    />
  ));

  return featuredArticles;
}

export default LeftSide;
