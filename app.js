const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


// Create an instance of the Express application
const app = express();

// Set the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Serve static files (CSS, JavaScript, images) from the 'public' directory
app.use(express.static('public'));

// Connect Mongoose to the Mongodb
mongoose.connect(process.env.URI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


// Home page route
app.get('/', (req, res) => res.render('index', { title: 'Home' }));

// About page route
app.get('/about', (req, res) => res.render('about', { title: 'About' }));

// Create page route
app.get('/blogs/create', (req, res) => res.render('create', { title: 'Create Blog' }));

