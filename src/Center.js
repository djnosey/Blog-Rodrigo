import React from "react";
import data from "./data.json";
import ImageCard from "./ImageCard";


/* 

loops through the data.json and chooses the newest 3 articles and pushes them to ImageCardArray,
to create imageCard elements from the array,
function can be adjusted by changing the numbers in the for loop. eg. i<4 instead of i<3 will
choose the first 4 articles. If the data source is changed the props should 
be changed to reflect the real data in here and the imagecard.js file

*/


function Center() {
  const imageCardArray = [];

  for (let i = 0; i < 3; i++) {
    imageCardArray.push(data.articles[i]);
  }

  const featuredArticles = imageCardArray.map((elem) => (
    <ImageCard
      title={elem.title}
      headline={elem.headline}
      image={elem.image}
      key={elem.id}
      id={elem.id}
    />
  ));

  return <div className="center">{featuredArticles}</div>;
}

export default Center;
