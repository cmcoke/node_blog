const express = require('express');

// Import the blogController containing route handler functions
const blogController = require('../controller/blogController');

// Create an Express router object
const router = express.Router();

// GET request for the homepage, handled by view_all_blog_posts function
router.get('/', blogController.view_all_blog_posts);

// GET request for the blog creation form, handled by blog_forum function
router.get('/blogs/create', blogController.blog_forum);

// POST request for creating a new blog post, handled by add_blog_post function
router.post('/blogs/create', blogController.add_blog_post);

// GET request for a specific blog post with ID, handled by view_blog_post function
router.get('/blogs/:id', blogController.view_blog_post);

// DELETE request for a specific blog post with ID, handled by delete_blog_post function
router.delete('/blogs/:id', blogController.delete_blog_post);

// Export the router object to be used in other parts of the application
module.exports = router;