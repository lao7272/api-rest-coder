import Joi from 'joi';

const messageJoi = Joi.object({
    email: Joi.string().required(),
    name: Joi.number().required(),
    body: Joi.string().required(),
    timestamp: Joi.number().required(),
    type: Joi.string().required()
});


export default messageJoi
