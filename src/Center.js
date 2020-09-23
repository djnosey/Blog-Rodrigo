import React from 'react'
import data from "./data.json"
import ImageCard from "./ImageCard"


function Center() {
    const imageCardArray =[];

    for(let i = 0 ;i<2;i++){
        imageCardArray.push(data.articles[i])
    }

    const featuredArticles = imageCardArray.map(elem => <ImageCard 
        title={elem.title}
        headline = {elem.headline} 
        />)

    console.log(imageCardArray)
   

    return (
       featuredArticles
    )
}

export default Center
