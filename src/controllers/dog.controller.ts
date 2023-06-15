import { Request, Response } from 'express';
import { IDog } from '../types/dog.type';
import { DogService } from '../services/dog.service';
import { FindOptions } from 'sequelize';

export class DogController {
  dogService: DogService;

  constructor() {
    this.dogService = new DogService();
  }

  async getAllDogs(req: Request<{ name: string }, {}, IDog>) {
    const { attribute, order, pageNumber, limit } = req.query as {
      attribute?: string;
      order?: string;
      pageNumber?: number;
      limit?: string;
    };

    let queryOptions: FindOptions = {};

    switch (true) {
      case !attribute && !order && !pageNumber && !limit:
        queryOptions = {};
        break;

      case attribute && order && !pageNumber && !limit:
        const sortingOrder = order === 'desc' ? 'DESC' : 'ASC';
        queryOptions = {
          order: attribute && order ? [[attribute, sortingOrder]] : [],
        };
        break;

      case !!(!attribute && !order && pageNumber && limit) === true:
        const keyValueArray = limit?.split('=');
        let numberValue = 3;
        
        if(keyValueArray) {
          numberValue = parseInt(keyValueArray[1], 10);
        }
        
        queryOptions = {
          offset: pageNumber && limit ? (pageNumber - 1) * numberValue : undefined,
          limit: numberValue ? numberValue : undefined,
        };
        break;
        
      default:
        throw new Error('Invalid query parameters');
    }

    const dogs = await this.dogService.getAllDogsFromDB(queryOptions);
    return dogs;
  }

  async createDog(req: Request<{}, {}, IDog>) {
    const dog = { ...req.body };

    const newDog = await this.dogService.saveDogToDB(dog);
    return newDog;
  }
}

export const dogController = new DogController();
