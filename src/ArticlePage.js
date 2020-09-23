import React, {useContext} from 'react'
import './articlepage.css'
import data from './data.json'

function ArticlePage(props) {



    return (



        <div className ="articlepage">

            <img src /*this should be data.articles.image*/></img>
            <h1>article headline</h1> {/*this should be data.articles.headline*/}
            <p>content goes here</p>    {/*this should be data.articles.content*/}
            
            
        </div>
    )
}

export default ArticlePage
