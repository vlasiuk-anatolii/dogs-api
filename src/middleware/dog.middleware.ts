import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export class DogMiddleWare {
  validate(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = schema.validate({ ...req.body });
        if (result.error) {
          return res.send(result.error);
        }
        return next();
      } catch (err) {
        return res.status(500).send();
      }
    };
  }

  isExistsName(getDogByName: (name: string) => Promise<Document | null>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const currentName = req.body.name;

      const dog = await getDogByName(currentName);
      if (dog) {
        return res.send(`Dog with name: ${currentName} already exists`);
      }
      next();
    };
  }

  tryCatch<Req extends Request, Res extends Response, Next extends NextFunction>(
    fn: (req: Req, res: Res, next: Next) => Promise<any>
  ): (req: Req, res: Res, next: Next) => Promise<void> {
    return async (req: Req, res: Res, next: Next) => {
      try {
        const result = await fn(req, res, next);
        res.send(result);
      } catch (err) {
        next(err);
      }
    };
  }
}

export const dogMiddleWare = new DogMiddleWare();


// async verifyExistingDog(req: Request<{ name: string }, {}, IDog>) {
//   const { name } = req.body;
//   const dog = await this.dogService.getByName(name);
//   return dog;
// }