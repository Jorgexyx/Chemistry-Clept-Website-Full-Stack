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

const QuestionCard = ({id, question, optionA, optionB, optionC, optionD, optionE, correctAnswerLabel}) => {
  const [answer, setAnswer ] = useState(0)

  const onCheckAnswer = () => {

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
            <RadioGroup aria-label="question" name={id} value={answer} onChange={(e) => setAnswer(e.target.value)}>
              <FormControlLabel value="a" control={<Radio />} label={optionA} />
              <FormControlLabel value="b" control={<Radio />} label= {optionB}/>
              <FormControlLabel value="c" control={<Radio />} label={optionC} />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onCheckAnswer}>
          Submit
        </Button>
        <Button size="small" color="primary" onClick={onCheckAnswer}>
          Display Correct Answer
        </Button>
      </CardActions>
      </Card>
    </Grid>
  )
}

export default QuestionCard
