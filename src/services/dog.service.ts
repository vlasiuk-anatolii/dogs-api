import { ParsedQs } from 'qs';
import { DogRepository } from '../config/dog.repository';
import { IDog } from '../types/dog.type';
import { FindOptions } from 'sequelize';

export class DogService {
  private dogRepository: DogRepository;

  constructor() {
    this.dogRepository = new DogRepository();
  }

  public async getAllDogsFromDB(queryOptions: FindOptions<any> | undefined) {
    const dogs = await this.dogRepository.getAll(queryOptions);
    console.log("Service queryOptions", queryOptions);
    return dogs;
  }

  public async getByName(name: string) {
    const dog = await this.dogRepository.getOne(name);
    return dog;
  }

  public async createDog(dog: IDog) {
    const createdDog = await this.dogRepository.createOne(dog);
    return createdDog;
  }
}

