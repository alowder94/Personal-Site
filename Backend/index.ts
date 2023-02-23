import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

//Enable environment variables
import * as dotenv from "dotenv";
dotenv.config();

import {blogRoutes} from './src/Controller/BlogRoutes.js'
import {contactMeRoutes} from './src/Controller/ContactMeRoutes.js'
import {projectRoutes} from './src/Controller/ProjectRoutes.js'

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.listen(3001);

app.use('/blogs', blogRoutes);
app.use('/contact-me', contactMeRoutes)
app.use('/projects', projectRoutes);
