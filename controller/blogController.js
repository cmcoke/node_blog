const Blog = require('../models/blog');

// Route handler to view all blog posts
const view_all_blog_posts = (req, res) => {

  // Find all blog posts in the database
  Blog.find()
    .then(result => {
      // Render the blog/index view, passing title and blog data
      res.render('blog/index', { title: 'Home', blogs: result });
    })
    .catch(err => console.log(err)); // Log any errors

};


// Route handler to render the blog creation form
const blog_forum = (req, res) => {

  // Render the blog/create view with the title "Create Blog"
  res.render('blog/create', { title: 'Create Blog' });

};


// Route handler to add a new blog post
const add_blog_post = (req, res) => {

  // Create a new Blog model instance from form data
  const blog = new Blog(req.body);

  // Save the new blog post to the database
  blog.save()
    .then(result => {
      // Redirect to the homepage after successful save
      res.redirect('/');
    })
    .catch(err => console.log(err)); // Log any errors
};


// Route handler to view a specific blog post
const view_blog_post = (req, res) => {

  // Get the blog post ID from the request parameters
  const id = req.params.id;

  // Find the blog post with the specified ID
  Blog.findById(id)
    .then(result => {
      // Render the blog/details view, passing title and blog data
      res.render('blog/details', { title: 'Blog Detail', blog: result });
    })
    .catch(err => console.log(err)); // Log any errors
};


// Route handler to delete a blog post
const delete_blog_post = (req, res) => {

  // Get the blog post ID from the request parameters
  const id = req.params.id;

  // Find and delete the blog post with the specified ID
  Blog.findByIdAndDelete(id)
    .then(result => {
      // Send a JSON response with a redirect to the homepage
      res.json({ redirect: '/' });
    })
    .catch(err => console.log(err)); // Log any errors

};

// Export the route handlers to be used in other files
module.exports = {
  view_all_blog_posts,
  blog_forum,
  add_blog_post,
  view_blog_post,
  delete_blog_post
};