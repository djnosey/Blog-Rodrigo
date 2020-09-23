import React from 'react'
import data from "./data.json"
import ArticleCard from "./ArticleCard"
import "./leftSide.css"

function LeftSide() {

    const imageCardArray =[];

    for(let i = 2 ;i< 5; i++){
        imageCardArray.push(data.articles[i])
    }

    const featuredArticles = imageCardArray.map(elem => <ArticleCard 
        title={elem.title}
        date ={elem.date}
        headline = {elem.headline}
        key = {elem.id} 
        />)



    return (
        <div>
            {featuredArticles}
        </div>
       
    )
}

export default LeftSide
