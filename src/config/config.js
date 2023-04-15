import "dotenv/config";

const vars = {
    PORT: process.argv[2] || 8080,
    MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI,
    MAIL_ACCOUNT: process.env.MAIL_ACCOUNT,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    SECRET_JWT_TOKEN : process.env.SECRET_JWT_TOKEN,
    URI: process.env.URI
}

export default vars;