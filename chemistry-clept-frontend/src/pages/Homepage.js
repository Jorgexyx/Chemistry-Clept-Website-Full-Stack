import React, { useEffect } from "react"
import { useQuery } from '@apollo/react-hooks';
import { Typography, Grid } from '@material-ui/core'
import { GET_SECTIONS } from '../queries/section'
import LinearProgress from '@material-ui/core/LinearProgress';
import SectionCard from '../components/SectionCard'

const HomePage = () => {
  const { loading, error, data: sectionData } = useQuery(GET_SECTIONS)

  useEffect(() => {
    error && console.error("Error fetching the data: ", error)
  }, [error])

  return(
    <Grid container spacing={3} style={{"paddingTop":"20px"}}>
      {error && <Typography style={{"color":"red"}}>There was an error fetching the data</Typography>}
      {loading && <LinearProgress variant="query" style={{"display": "contents"}}/> }
      {sectionData && sectionData.allSectionQuestions.map( ({bio, id, name, imageSrc}) => 
        <SectionCard imgSrc={imageSrc} bio={bio} title={name} key={id} id={id}/>
      )}
    </Grid>
  )
}

export default HomePage
