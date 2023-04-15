import { createTransport } from "nodemailer";
import { logger } from "./logger.js";
import vars from "../config/config.js";


const { MAIL_PASSWORD, MAIL_ACCOUNT } = vars;
const sendMail = async ({to, subject, html}) => {
    try {
        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: MAIL_ACCOUNT,
                pass: MAIL_PASSWORD
            },
            tls: { rejectUnauthorized: false }
        });
    
        const mailOptions =  {
            from: MAIL_ACCOUNT,
            to: to,
            subject: subject,
            text: html
        };
    
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                logger.error(`NodeMailer: ${err}`);
            }
        });
    } catch (err) {
        logger.error(`NodeMailer: ${err}`)
    }
}

export {sendMail}