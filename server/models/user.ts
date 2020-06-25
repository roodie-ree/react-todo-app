import { DataTypes, ModelAttributes } from 'sequelize'

const userModelName = 'User'
const userAttributes: ModelAttributes = {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}

export { userModelName, userAttributes }
