import "dotenv/config";

const vars = {
    PORT: process.env.PORT || 8080,
    MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI,
    URI: process.env.URI,
    MAIL_ACCOUNT: process.env.MAIL_ACCOUNT,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    SECRET_JWT_TOKEN: process.env.SECRET_JWT_TOKEN
}

export default vars;