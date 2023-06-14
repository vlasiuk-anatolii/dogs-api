import { Request, Response } from 'express';
import { IDog } from '../types/dog.type';
import { DogService } from '../services/dog.service';
import { FindOptions } from 'sequelize';

export class DogController {
  dogService: DogService;

  constructor() {
    this.dogService = new DogService();
  }

  async verifyExistingDog(req: Request<{ name: string }, {}, IDog>) {
    const { name } = req.body;
    const dog = await this.dogService.getByName(name);
    return dog;
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
        // Випадок без параметрів
        queryOptions = {};
        break;
      case attribute && order && !pageNumber && !limit:
        // Випадок з параметрами attribute і order
        const sortingOrder = order === 'desc' ? 'DESC' : 'ASC';
        queryOptions = {
          order: attribute && order ? [[attribute, sortingOrder]] : [],
        };
        break;
      case !!(!attribute && !order && pageNumber && limit) === true:
        const keyValueArray = limit?.split("=");
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
        // Випадок з невідомими або непідтримуваними параметрами
        throw new Error('Invalid query parameters');
    }

    const dogs = await this.dogService.getAllDogsFromDB(queryOptions);
    return dogs;
  }
  // async getSortedDogs (req: Request<{ name: string }, {}, IDog>, res: Response) {
  //   const attribute = req.query.attribute;
  //   const order = req.query.order;

  //   if (typeof attribute === 'string' && typeof order === 'string') {
  //     const dogs = await this.dogService.getAllSortedDogsFromDB(attribute, order);
  //     return dogs;
  //   } else {
  //     res.status(400).json({ error: 'Invalid parameters' });
  //   }
  // }
}

export const dogController = new DogController();
