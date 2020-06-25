import { Model, Sequelize } from 'sequelize'
import { todoAttributes, todoModelName } from './todo'
import { userAttributes, userModelName } from './user'

const databaseIP = '172.17.0.9'

interface DatabaseConnection {
  db: Sequelize
  models: {
    User: typeof Model
    Todo: typeof Model
  }
}

function databaseConnection (): DatabaseConnection {
  const db = new Sequelize('sqlite::memory')
  const User = db.define(userModelName, userAttributes)
  const Todo = db.define(todoModelName, todoAttributes)

  return { db, models: { User, Todo }}
}

export { databaseConnection }
