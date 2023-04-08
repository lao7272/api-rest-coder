import vars from "../config/config.js";
import jwt from 'jsonwebtoken';

const { SECRET_JWT_TOKEN } = vars;
const generateAccessToken  = ({_id, email, username, address}) => {
    return jwt.sign({_id, email, username, address}, SECRET_JWT_TOKEN , {expiresIn: '60m'});
}
const validateToken = (accessToken) => {
    return  jwt.verify(accessToken, SECRET_JWT_TOKEN);
}

export { 
    generateAccessToken, 
    validateToken
}