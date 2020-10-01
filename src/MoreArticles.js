import React, { useState } from "react";
import "./moreArticles.css";
import data from "./data.json";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

/* 

loops through the data.json and creates 4 arrays filtered by key: category in the data.json
(named all ,one, two and three)

state was needed (named "category") to make the dropdown filter work, state is updated in 
handleChange function which targets the 
"value" property of the dropdown menu, which then corresponds to the array names.
Then it maps through the selected array and displays those articles. <ul>category.map()</ul>

*/

function MoreArticles() {
  const all = data.articles;
  const one = data.articles.filter((item) => item.category === "1");
  const two = data.articles.filter((item) => item.category === "2");
  const three = data.articles.filter((item) => item.category === "3");

  const [category, setcategory] = useState(one);

  const handleChange = (e) => setcategory(e.target.value);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="moreArticles">
      <div className="more__head">
        <h3><strong>Mais artigos</strong></h3>

        <FormControl color="primary">
          <InputLabel><small>Categoria de artigo</small></InputLabel>
          <Select
            value={category}
            onChange={handleChange}
            label="All"
            fullWidth={true}
          >
            <MenuItem value={all}>
              <em><small>All</small></em>
            </MenuItem>
            <MenuItem value={one}><small>Economics one</small></MenuItem>
            <MenuItem value={two}><small>Economics Two</small></MenuItem>
            <MenuItem value={three}><small>Economics Three</small></MenuItem>
          </Select>
        </FormControl>
      </div>

      <ul>
        {category.map((item) => (
          <Link to={`/article?id=${item.id}`} onClick={scrollTop()}>
            <li>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MoreArticles;
