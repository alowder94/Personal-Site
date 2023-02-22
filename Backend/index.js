const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogRoutes = require('./Controller/BlogRoutes');
const ContactMeRoutes = require('./Controller/ContactMeRoutes')
const ProjectRoutes = require('./Controller/ProjectRoutes')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.listen(3001);

app.use('/blogs', blogRoutes);
app.use('/contact-me', ContactMeRoutes)
app.use('/projects', ProjectRoutes);
