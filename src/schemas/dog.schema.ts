import Joi from 'joi';

export const dogJoiSchema = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required(),
  tail_length: Joi.number().positive().required(),
  weight: Joi.number().positive().required(),
});

