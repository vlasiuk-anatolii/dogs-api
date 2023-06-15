import { DogRepository } from '../repository/dog.repository';
import { IDog } from '../types/dog.type';
import { FindOptions } from 'sequelize';

export class DogService {
  private dogRepository: DogRepository;

  constructor() {
    this.dogRepository = new DogRepository();
  }

  public async getAllDogsFromDB(queryOptions: FindOptions<any> | undefined) {
    const dogs = await this.dogRepository.getAll(queryOptions);
    return dogs;
  }

  public async getByName(name: string) {
    const dog = await this.dogRepository.getOne(name);
    return dog;
  }

  public async saveDogToDB(dog: IDog) {
    const createdDog = await this.dogRepository.createOne(dog);
    return createdDog;
  }
}

