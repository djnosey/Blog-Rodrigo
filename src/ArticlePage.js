import React, {useContext} from 'react'
import './articlepage.css'
import {articleNumber} from "./ArticleCard"
import data from './data.json'

function ArticlePage(props) {


    const i = useContext(articleNumber)

    return (



        <div className ="articlepage">

            <img src = "https://images.freeimages.com/images/premium/previews/5623/5623964-podium-finish.jpg"></img>
            <h1>{data.articles[i].headline}</h1>
            <p>content goes here</p>
            
        </div>
    )
}

export default ArticlePage
