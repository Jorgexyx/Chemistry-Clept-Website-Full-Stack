import React from "react"
import {Button, Typography, Grid } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const SectionCard = ({imgSrc, bio, title}) => {
  return(
    <Card>
      <CardActionArea>
        <CardMedia
          image={imgSrc}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  )
}

const HomePage = () => {
  return(
    <Grid item>

    </Grid>
  )
}

export default HomePage
