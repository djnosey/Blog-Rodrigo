import React from 'react';
import ArticleCard from './ArticleCard';
import Navbar from './Navbar';
import "./app.css"


//BEM

function App() {
  return (
    <div className="app">
        <Navbar />
        <div className ="app__left">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        </div>
        {/*left side*/}
        
        {/*right side*/}
        {/*sidebar*/}
    </div>
  );
}

export default App;
