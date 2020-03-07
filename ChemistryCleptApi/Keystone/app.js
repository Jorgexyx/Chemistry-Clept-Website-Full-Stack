const { Keystone } = require('@keystonejs/keystone')
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')

const lists = require('./Lists/list')
const initialiseData = require('./initial-data')

/********************* Init Keystone ******************/
const PROJECT_NAME = "ChemistryCleptAPI";
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData
});

lists(keystone)
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User'
});

module.exports =  {
  keystone,
  authStrategy
}
