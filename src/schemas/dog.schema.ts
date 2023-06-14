import Joi from 'joi';

export const dogJoiSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  color: Joi.string().required(),
  tail_length: Joi.number().required(),
  weight: Joi.number().required(),
});
