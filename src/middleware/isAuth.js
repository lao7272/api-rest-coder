import vars from "../config/config.js";
import { validateToken } from "../modules/JWT.js";
import { logger } from "../modules/logger.js";
const { SECRET_JWT_TOKEN } = vars;
const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers['Authorization'];
        if (!authHeader) return res.status(401).json({error: "Not Authenticated"});
        const token = authHeader.split(" ")[1];
        const decoded = validateToken(token, SECRET_JWT_TOKEN);
        req.user = decoded;
        next()
    } catch (err) {
        logger.error(err);
        return res.status(403).json({error: "Not Authorized"});
    }
}

export default isAuth;