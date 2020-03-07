const AdminSchema            = require('./Admin')
const MultipleChoiceSchema   = require('./MultipleChoice')
const SectionQuestionSchema = require('./SectionQuestions')

module.exports = keystone => {
  keystone.createList('MultipleChoice', MultipleChoiceSchema)
  keystone.createList('SectionQuestion', SectionQuestionSchema)
  keystone.createList('User',AdminSchema)
}
