import { DataTypes, ModelAttributes } from 'sequelize'

const todoModelName = 'Todo'
const todoAttributes: ModelAttributes = {
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

export { todoModelName, todoAttributes }
