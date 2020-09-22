import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./ArticleCard.css"

function ArticleCard() {
    return (
        <div className ="articleCard">
            <Card >
      <CardContent>
      <Typography className="title" variant="h5" component="h2">
      “Ói nóis aqui traveis”
        </Typography>
        <Typography className="date"  color="textSecondary" gutterBottom>
        11 de Agosto de 2020
        </Typography>
        <Typography variant="body2" component="p">
        O Aviso em Dois está de volta, com nova cara, mas com o mesmo propósito, que é o oferecer instrução financeira e assessoria.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Artigo completo</Button>
      </CardActions>
    </Card>
            
        </div>
    )
}

export default ArticleCard;
