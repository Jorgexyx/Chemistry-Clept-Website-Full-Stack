import gql from 'graphql-tag';

const GET_SECTIONS = gql`
  {
    allSectionQuestions {
      bio,
      id,
      name,
      imageSrc
    }
  }
`

export {
  GET_SECTIONS
}
