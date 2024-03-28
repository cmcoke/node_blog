const express = require('express');


// Create an instance of the Express application
const app = express();

// Set the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Serve static files (CSS, JavaScript, images) from the 'public' directory
app.use(express.static('public'));


// Home page route
app.get('/', (req, res) => res.render('index', { title: 'Home' }));

// About page route
app.get('/about', (req, res) => res.render('about', { title: 'About' }));

// Create page route
app.get('/blogs/create', (req, res) => res.render('create', { title: 'Create Blog' }));

// 404 page route (catch-all for undefined routes)
app.use((req, res) => res.status(404).render('404', { title: 'Not Found' }));

// Start the server and listen on port 3000
app.listen(3000, 'localhost', () => console.log('Listening for requests on port 3000'));
