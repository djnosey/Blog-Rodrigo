import React from 'react'
import data from "./data.json"
import ArticleCard from "./ArticleCard"

function LeftSide() {

    const featuredArticles = data.articles.map(elem => <ArticleCard 
        title={elem.title}
        date ={elem.date}
        headline = {elem.headline} />)
    return (
       [featuredArticles]
    )
}

export default LeftSide
