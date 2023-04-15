import { logger } from "../modules/logger.js";
import DAOFactory from "../dao/index.dao.js";
const { UserDAO } = await new DAOFactory().getDAOs();
class UserService {
    async getUsersDB() {
        try {
            return await UserDAO.getAll();
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async getUserByIdDB(id) {
        try {
            return await UserDAO.getById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async getUserByEmailDB(email) {
        try {
            return await UserDAO.getUserByEmail(email);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    async createUserDB(object) {
        try {
            return await UserDAO.save(object);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }
    
    async deleteUser(id) {
        try {
            return await UserDAO.deleteById(id);
        } catch (err) {
            logger.error(`Service error: ${err}`);
        }
    }

}

export default UserService;