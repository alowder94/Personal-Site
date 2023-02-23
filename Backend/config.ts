import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    DBUSERNAME: process.env.DBUSERNAME,
    DBPASSWORD: process.env.DBPASSWORD
}