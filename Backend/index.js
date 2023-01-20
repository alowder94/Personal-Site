const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogRoutes = require('./Controller/BlogRoutes');
const ContactMeRoutes = require('./Controller/ContactMeRoutes')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.listen(3001);

app.use('/blogs', blogRoutes);
app.use('/contact-me', ContactMeRoutes)
