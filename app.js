require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// Create an instance of the Express application
const app = express();

// Set the view engine to EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Serve static files (CSS, JavaScript, images) from the 'public' directory
app.use(express.static('public'));

//
app.use(express.urlencoded({ extended: true }));

// Connect Mongoose to the Mongodb
mongoose.connect(process.env.URI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


// Home page
app.get('/', (req, res) => {
  Blog.find()
    .then(result => res.render('index', { title: 'Home', blogs: result }))
    .catch(err => console.log(err));
});

// About page route
app.get('/about', (req, res) => res.render('about', { title: 'About' }));

// Create blog page route
app.get('/blogs/create', (req, res) => res.render('create', { title: 'Create Blog' }));

// 
app.post('/blogs/create', (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err));
});

//
app.get('/blogs/:id', (req, res) => {

  const id = req.params.id;

  Blog.findById(id)
    .then(result => res.render('details', { title: 'Blog Detail', blog: result }))
    .catch(err => console.log(err));

});

//
app.delete('/blogs/:id', (req, res) => {

  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => res.json({ redirect: '/' }))
    .catch(err => console.log(err));
});