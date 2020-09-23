import React from 'react'
import './articlepage.css'

function ArticlePage(props) {



    return (



        <div className ="articlepage">

            <img 
            alt="..." /*data.article.title*/ 
            src ="..." /*this should be data.articles.image*//>
            <h1>article headline</h1> {/*this should be data.articles.headline*/}
            <p>content goes here</p>    {/*this should be data.articles.content*/}
            
            
        </div>
    )
}

export default ArticlePage
