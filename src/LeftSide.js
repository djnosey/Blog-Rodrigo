import React from "react";
import data from "./data.json";
import ImageCard from "./ImageCard";


/* 

loops through the data.json and chooses articles 3-6 and pushes them to ImageCardArray,
to create imageCard elements to display in left sidebar,
function can be adjusted by changing the numbers in the for loop. eg. i<7 instead of i<6 will
choose the next 4 articles. If the data source is changed the props should 
be changed to reflect the real data in here and the imagecard.js file

*/

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
