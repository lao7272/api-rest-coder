import ServiceFactory from "../services/index.service.js";
import { generateAccessToken } from "../modules/JWT.js";
import { hashPassword, isValidPassword } from "../modules/bcrypt.js";
import { logger } from "../modules/logger.js";
const { UserService } = await new ServiceFactory().getServices();

const registerUser = async (req, res) => {
    try {
        const { username, lastname, email, password, tel, address  } = req.body;

        const findUser = await UserService.getUserByEmailDB(email);
        const comparePassword = findUser ?  await isValidPassword(password, findUser.password) : undefined; 
        if (findUser && comparePassword) return res.status(400).json({message: 'Already registered'});

        const hashedPassword = await hashPassword(password, 10);
        await UserService.createUserDB({ username, email, lastname, password: hashedPassword, tel, address });
        res.json({message: "User Registered"})
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: err});
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const getUser = await UserService.getUserByEmailDB(email);
        if (!getUser) return res.status(400).json({error: "User Doesn't Exist"});
        const comparePassword = await isValidPassword(password, getUser.password); 
        if (!comparePassword) return res.status(400).json({error: 'Wrong Username and Password Combination'});
        const userDataToken = {
            email,
            address: getUser.address, 
            username: getUser.username,
            _id: getUser._id
        }
        const accessToken = generateAccessToken(userDataToken);
        res.json({message: "Logged In", accessToken: accessToken});
    } catch (err) {
        logger.error(err);
        res.status(400).json({error: err});
    }
}

const logoutUser = async (req, res) => {
    const { email } = req.body;
    res.json();
}

export {
    registerUser,  
    loginUser,
    logoutUser 
}