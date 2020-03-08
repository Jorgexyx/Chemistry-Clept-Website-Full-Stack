const { Text, Relationship } = require('@keystonejs/fields')
const textType = { type: Text }

module.exports = {
  fields: {
    question: textType,
    correctAnswerLabel: textType,
    optionA: textType,
    optionB: textType,
    optionC: textType,
    optionD: textType,
    optionE: textType,
    section: { type: Relationship, ref: 'SectionQuestion'}
  }
}
