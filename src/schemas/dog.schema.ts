import Joi from 'joi';

export const dogJoiSchema = Joi.object({
  name: Joi.string().max(30).required(),
  color: Joi.string().max(30).required(),
  tail_length: Joi.number().positive().max(80).required(),
  weight: Joi.number().positive().max(100).required(),
});

