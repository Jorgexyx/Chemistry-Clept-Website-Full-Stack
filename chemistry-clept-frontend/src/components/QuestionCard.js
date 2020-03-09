import React, { useState } from "react"
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const correctStyle = {
  backgroundColor: "green",
  color: "white"
}
const wrongStyle = {
  backgroundColor: "red",
  color: "white"
}

const QuestionCard = ({id, question, optionA, optionB, optionC, optionD, optionE, correctAnswerLabel}) => {
  const [answer, setAnswer ] = useState(0)
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [displayStyle, setDisplayStyle] = useState(false)
  const [style, setStyle] = useState({})

  const options  = [ 
    {value: "a", label: optionA},
    {value: "b", label: optionB},
    {value: "c", label: optionC},
    {value: "d", label: optionD},
    {value: "e", label: optionE},
  ]

  const onSelectAnswer = (e) => {
    setAnswer(e.target.value)
    setStyle({})
  }

  const onCheckAnswer = () => {
    if(correctAnswerLabel === answer) {
      setStyle(correctStyle)
    } else {
      setStyle(wrongStyle)
    }
  }

  return(
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {question}
          </Typography>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="question" name={id} value={answer} onChange={onSelectAnswer}>
              {options.map( props => 
              <FormControlLabel 
                control={<Radio />}
                style={ 
                  props.value === answer ? style : 
                  displayAnswer && props.value === correctAnswerLabel ? correctStyle : {}
                } 
                {...props} 
              />
              )}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onCheckAnswer}>
          Submit
        </Button>
        <Button size="small" color="primary" onClick={() => setDisplayAnswer(!displayAnswer)}>
          {displayAnswer ? "Hide" : "Display"} Correct Answer
        </Button>
      </CardActions>
      </Card>
    </Grid>
  )
}

export default QuestionCard
