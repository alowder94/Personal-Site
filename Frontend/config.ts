import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    EMAIL: process.env.EMAIL
}