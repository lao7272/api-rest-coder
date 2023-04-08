import Joi from 'joi';

const userJoi = Joi.object({
    username: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});


export default userJoi