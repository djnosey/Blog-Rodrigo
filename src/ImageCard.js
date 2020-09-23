import React from 'react'
import "./imageCard.css"
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import articleImage1 from "./images/articleImage1.jpg"
import data from "./data.json"

function ImageCard() {
    return (
        <div className ="imageCard">

<Card >
      <CardActionArea>
        <CardMedia
          
          component= "img"
          image = {articleImage1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.articles[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.articles[0].headline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" varient="outlined">
          Artigo completo
        </Button>
        
      </CardActions>
    </Card>
            
        </div>
    )
}

export default ImageCard
