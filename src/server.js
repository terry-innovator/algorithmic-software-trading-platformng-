const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.DB_URL; // Fetch the connection string from environment variables

if (!dbURL) {
  console.error("MongoDB connection string (DB_URL) is missing.");
  process.exit(1);
}

mongoose.connect(dbURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));






