import productJoi from "../models/joiSquema/ProductJoi.schema.js";
import userJoi from "../models/joiSquema/UserJoi.schema.js"
import messageJoi from "../models/joiSquema/MessageJoi.schema.js"
const validateProduct = (req, res, next) => {
    const { error } = productJoi.validate(req.body);
    if (error) return res.send(error.details[0].message);
    next();
}

const validateUser = (req, res, next) => {
    const { error } = userJoi.validate(req.body);
    if (error) return res.send(error.details[0].message);
    next();
}

const validateMessage = (req, res, next) => {
    const { error } = messageJoi.validate(req.body);
    if (error) return res.send(error.details[0].message);
    next();
}
export {
    validateProduct,
    validateMessage,
    validateUser
};