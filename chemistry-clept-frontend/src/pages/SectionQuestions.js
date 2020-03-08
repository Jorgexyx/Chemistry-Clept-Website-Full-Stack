import React, { useEffect } from "react"
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import { GET_SECTION_QUESTIONS } from '../queries/questions'
import { Typography, Grid } from '@material-ui/core'
import QuestionCard from '../components/QuestionCard'

const SectionQuestions = () => {
  let { name } = useParams();
  const { loading, error, data: questionsData } = useQuery(GET_SECTION_QUESTIONS,{
    variables: {
      name: name.includes("_") ? name.split("_")[0] : name
    }
  })

  useEffect(() => {
    error && console.error("Error fetching the data: ", error)
  }, [error])

  return(
    <Grid container spacing={3} style={{"paddingTop":"20px"}}>
      {error && <Typography style={{"color":"red"}}>There was an error fetching the data</Typography>}
      {loading && <LinearProgress variant="query" style={{"display": "contents"}}/> }
    </Grid>
  )
}


export default SectionQuestions
