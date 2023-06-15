import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { dogMiddleWare } from '../../middleware/dog.middleware';
import { dogJoiSchema } from '../../schemas/dog.schema';
import { dogController } from '../../controllers/dog.controller';
import { dogRepository } from '../../repository/dog.repository';

const dogsRouter: Router = Router();

dogsRouter.get(
  '/dogs',
  dogMiddleWare.tryCatch(dogController.getAllDogs.bind(dogController))
);

dogsRouter.post(
  '/dog',
  dogMiddleWare.validate(dogJoiSchema),
  dogMiddleWare.isExistsName(dogRepository.getOne),
  dogMiddleWare.tryCatch(dogController.createDog.bind(dogController))
);

dogsRouter.get(
  '/ping',
  dogMiddleWare.tryCatch(async (_req: Request, res: Response) => {
    res.send('Dogshouseservice.Version1.0.1');
  }
));

export default dogsRouter;
