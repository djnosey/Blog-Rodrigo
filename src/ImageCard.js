import React from "react";
import "./imageCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom"

function ImageCard(props) {
  return (
    <div className="imageCard">
      <Link to={`/article?id=${props.id}`}>
      <Card>
        <CardActionArea>
          <CardMedia className = "imageCard__image"
            component="img"
            src={props.image}
            title={props.title}
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
       
      </Card>
      </Link>
    </div>
  );
}

export default ImageCard;
