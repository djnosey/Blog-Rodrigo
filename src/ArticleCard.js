import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ArticleCard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function ArticleCard(props) {
  




  return (
    <div className="articleCard">
      
      <Card >
        <CardContent>
          <Typography className="title" variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className="date" color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
          <Typography className ="headline" variant="body2" component="p">
            {props.headline}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/article">
          <Button variant="outlined" size="small" key = {props.id}>
            Artigo completo
          </Button>
          </Link>
          
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleCard;

