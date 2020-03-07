import React from "react"
import { useQuery } from '@apollo/react-hooks';
import {Button, Typography, Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { GET_SECTIONS } from '../queries/section'
import LinearProgress from '@material-ui/core/LinearProgress';


const CardMediaCss = {
  height: 140,
}


const CardCss = {
  maxWidth: 345,
}


const SectionCard = ({imgSrc, bio, title}) => {
  console.log(imgSrc)
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
          <Button size="small" color="primary">Study</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

const HomePage = () => {
  const { loading, error, data: sectionData } = useQuery(GET_SECTIONS)
  return(
    <Grid container spacing={3} style={{"paddingTop":"20px"}}>
      {loading && <LinearProgress variant="query" style={{"display": "contents"}}/> }
      {sectionData && sectionData.allSectionQuestions.map( ({bio, id, name, imageSrc}) => 
        <SectionCard imgSrc={imageSrc} bio={bio} title={name} key={id} />
      )}
    </Grid>
  )
}

export default HomePage
