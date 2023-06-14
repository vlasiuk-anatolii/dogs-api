import { Sequelize, DataTypes  } from 'sequelize';

const sequelize = new Sequelize('dogs', 'dog', 'dog', {
  host: 'localhost',
  port: 1433,
  dialect: 'mssql'
});
export const MyModelDog = sequelize.define('dogs', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  tail_length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'dogs',
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.::::::');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();
