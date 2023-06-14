import sql from 'mssql';
import { IDog } from '../types/dog.type';

const sqlConfig = {
  user: 'dog',
  password: 'dog',
  database: 'dogs',
  server: 'localhost',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

export async function insertDogsData(dogsData: IDog[]) {
  try {
    const pool = await sql.connect(sqlConfig);

    const insertQuery = `
      INSERT INTO dogs (name, color, tail_length, weight)
      VALUES (@name, @color, @tail_length, @weight)
    `;

    for (const dog of dogsData) {
      await pool.request()
        .input('name', sql.NVarChar, dog.name)
        .input('color', sql.NVarChar, dog.color)
        .input('tail_length', sql.Int, dog.tail_length)
        .input('weight', sql.Int, dog.weight)
        .query(insertQuery);
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.log('Error inserting data:', error);
  }
}

export const initializeDatabase = async () => {
  const tableScripts = `
    CREATE TABLE dogs (
      id INT IDENTITY(1,1) PRIMARY KEY,
      name VARCHAR(50),
      color VARCHAR(50),
      tail_length INT,
      weight INT,
      createdAt DATETIME DEFAULT GETDATE(),
      updatedAt DATETIME DEFAULT GETDATE()
    )
  `;

  try {
    const pool = await sql.connect(sqlConfig);
    await pool.request().query(tableScripts);
    console.log('Table was created!');
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

export async function conectionToDb() {
  try {
    await sql.connect(sqlConfig);
    console.log('Connected to DB!!!');
  } catch (error) {
    console.log('Error connecting:', error);
  }
}

export const getDogRows = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request().query('SELECT * FROM dogs');
    console.log('Рядки таблиці dogs:', result.recordset);
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};


