import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button, Typography, Grid } from '@material-ui/core'
import { Link } from "react-router-dom";

const CardMediaCss = {
  height: 140,
}

const CardCss = {
  maxWidth: 345,
}

const SectionCard = ({imgSrc, bio, title, id}) => {
  let link = title.replace(/ /g, "_")
  return(
    <Grid item>
      <Card style={CardCss}>
        <CardActionArea>
          <CardMedia image={imgSrc} title={title} style={CardMediaCss} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={"section/" + link} state={id}>Study</Link>
            </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default SectionCard
