import gql from 'graphql-tag';

const GET_SECTION_QUESTIONS = gql`
  query GetSectionQuestions($name: String!) 
  {
    allMultipleChoices(where: { section: { name_contains: $name} }) {
      id,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      optionE
      correctAnswerLabel,
    }
  }
`

export {
  GET_SECTION_QUESTIONS
}
