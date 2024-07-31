import Joi from 'joi';

export const authorSchema = Joi.object({
    name: Joi.string().min(1).required(),
    bio: Joi.string().optional(),
    birthdate: Joi.date().required()
});

export const bookSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().optional(),
    published_date: Joi.date().required(),
    author_id: Joi.number().integer().positive().required()
});