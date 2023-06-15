import { Sequelize, DataTypes  } from 'sequelize';
import { dogsData } from '../initial-data';

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: 'mssql'
  }
);
export const MyModelDog = sequelize.define('dogs', {
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
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
  tableName: 'doggy',
});

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('The table was created and synchronized with the database.');
    
    await MyModelDog.bulkCreate(dogsData);
    console.log('Records were created in the table.');
  } catch (error) {
    console.error('Error synchronizing or creating records:', error);
  }
})();

