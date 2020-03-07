const { Text, Password } = require('@keystonejs/fields')
const access = require('./listAccess')

module.exports = {
  fields: {
    name: { type: Text },
    password: {
      type: Password
    }
  },
  access: {
    read: access.userIsAdmin,
    update: access.userIsAdmin,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true
  }
}
