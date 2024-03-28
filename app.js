require('dotenv').config(); // Load environment variables from .env file (if it exists)
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Create an instance of the Express application
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JavaScript, images) from the 'public' directory
app.use(express.static('public'));

// Parse incoming form data (URL encoded)
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database using URI from environment variable
mongoose.connect(process.env.URI)
  .then(result => app.listen(3000)) // Start server on port 3000 if connection successful
  .catch(err => console.log(err)); // Log any errors during connection attempt


// Use routes defined in blogRoutes for requests starting with '/' path
app.use('/', blogRoutes);

// Handle requests for the '/about' route and render the 'about' view
app.get('/about', (req, res) => res.render('about', { title: 'About' }));

// Handle any unmatched routes and render a 404 Not Found page
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));