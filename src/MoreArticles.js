import React, { useState } from "react";
import "./moreArticles.css";
import data from "./data.json";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import ImageCard from "./ImageCard";

function MoreArticles(props) {
  const all = data.articles;
  const one = data.articles.filter((item) => item.category === "1");
  const two = data.articles.filter((item) => item.category === "2");
  const three = data.articles.filter((item) => item.category === "3");

  const [category, setcategory] = useState(one);

  const handleChange = (e) => setcategory(e.target.value);
  console.log(category);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="moreArticles">
      <h2>More articles</h2>
      <div className="moreArticles__selectBox">
        <FormControl color="secondary" fullWidth = {true} >
          <InputLabel>Article Category</InputLabel>
          <Select value={category} onChange={handleChange} label="All">
            <MenuItem value={all}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={one}>Economics one</MenuItem>
            <MenuItem value={two}>Economics Two</MenuItem>
            <MenuItem value={three}>Economics Three</MenuItem>
          </Select>
        </FormControl>
      </div>

      <ul>
        {category.map((item) => (
          <Link to={`/article?id=${item.id}`} onClick={scrollTop()}>
            <ImageCard
           
              headline={item.title}
              id={item.id}
              key={item.id}
            ></ImageCard>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MoreArticles;
