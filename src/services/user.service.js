import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { UserDAO } = await new DAOFactory().getDAOs();
class UserService {
    getUsersDB = async () => {
        try {
            return await UserDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    getUserByIdDB = async (id) => {
        try {
            return await UserDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    getUserByEmailDB = async (email) => {
        try {
            return await UserDAO.getUserByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    createUserDB = async (object) => {
        try {
            return await UserDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    deleteUser = async (id) => {
        try {
            return await UserDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}

export default UserService;