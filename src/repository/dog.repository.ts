import { IDog } from '../types/dog.type';
import { MyModelDog } from '../models/Dogs';
import { FindOptions } from 'sequelize';

export class DogRepository {
  async getAll(queryOptions: FindOptions<any> | undefined) {
    try {
      const data = await MyModelDog.findAll(queryOptions)
      return data
    } catch (err) {
      throw new Error(`Something went wrong! Error: ${err}`);
    }
  }

  async getOne(name: string) {
    try {
      const data = await MyModelDog.findOne(
        {
          where: {
            name: `${name}`
          }
        }
      );
      return data;
    } catch (err) {
      throw new Error(`Something went wrong! Error: ${err}`);
    }
  }
 
  async createOne(dog: IDog) {
    try {
      const currentDateTime = new Date();
      const newDog = await MyModelDog.create({
        name: dog.name,
        color: dog.color, 
        tail_length: dog.tail_length, 
        weight: dog.weight, 
      });
      return newDog;
    } catch (err) {
      throw new Error(`Something went wrong! Error: ${err}`);
    }
  }
}

export const dogRepository = new DogRepository();
