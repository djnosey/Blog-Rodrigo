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

function ImageCard(props) {

    


    return (
        <div className ="imageCard">

<Card >
      <CardActionArea>
        <CardMedia
          
          component= "img"
          image = {articleImage1}
          title = {props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.headline}
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
