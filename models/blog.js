const mongoose = require('mongoose');

// Obtain the Schema constructor from Mongoose
const Schema = mongoose.Schema;

// Create a Mongoose schema for Blog documents
const blogSchema = new Schema({
  // Title of the blog post (required string)
  title: {
    type: String,
    required: true
  },
  // Snippet of the blog post (required string)
  snippet: {
    type: String,
    required: true
  },
  // Body of the blog post (required string)
  body: {
    type: String,
    required: true
  }
});

// Create a Mongoose model named "Blog" based on the blogSchema
const Blog = mongoose.model('Blog', blogSchema);

// Export the Blog model to be used in other parts of the application
module.exports = Blog;