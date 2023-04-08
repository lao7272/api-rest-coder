import Joi from 'joi';

const productJoi = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    thumbnail: Joi.string().required(),
    description: Joi.string().required(),
    stock: Joi.number().required(),
    quant: Joi.number().required(),
    category: Joi.string().required(),
    admin: Joi.boolean()
});


export default productJoi