import React, {useState} from "react";
import "./moreArticles.css";
import data from "./data.json";
import {Link} from "react-router-dom"
import  { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";


function MoreArticles(props) {


const all = data.articles
const one = data.articles.filter( item => item.category === "1")
const two = data.articles.filter(item => item.category === "2")
const three = data.articles.filter(item => item.category === "3")

const [category, setcategory] = useState(all)

const handleChange = (e) => setcategory(e.target.value)
console.log(category)

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behaviour:"smooth"
    });
  }


  

  return (
    <div className="moreArticles">
        <h2>More articles</h2>


        <div>
            <FormControl variant="outlined" >
        <InputLabel>Article Category</InputLabel>
        <Select
         
          value={category}
          onChange={handleChange}
          label="All"
        >
          <MenuItem value={all}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={one}>one</MenuItem>
          <MenuItem value={two}>Two</MenuItem>
          <MenuItem value={three}>Three</MenuItem>
        </Select>
      </FormControl>
            
        </div>




       
      <ul>
        {category.map((item) => (
          <Link to={`/article?id=${item.id}`} onClick = {scrollTop()}><li id={item.id} key={item.id} >{item.title}</li></Link>
          
        ))}
      </ul>
    </div>
  );
}

export default MoreArticles;
