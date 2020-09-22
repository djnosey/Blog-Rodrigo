import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ArticleCard.css";


function ArticleCard(props) {
  return (
    <div className="articleCard">
      <Card>
        <CardContent>
          <Typography className="title" variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className="date" color="textSecondary" gutterBottom>
            {props.date}
          </Typography>
          <Typography variant="body2" component="p">
            {props.headline}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small">
            Artigo completo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleCard;
