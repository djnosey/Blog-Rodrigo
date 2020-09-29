import React, {useState} from 'react';
import  { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import data from './data.json'

function CategoryFilter() {


const all = data.articles
const one = data.articles.filter( item => item.category === "1")
const two = data.articles.filter(item => item.category === "2")
const three = data.articles.filter(item => item.category === "3")

const [category, setcategory] = useState(all)

const handleChange = (e) => setcategory(e.target.value)
console.log(category)


    return (
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
    )
}

export default CategoryFilter
