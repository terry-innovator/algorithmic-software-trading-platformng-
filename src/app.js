const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Provelo.IO!');
});

// Example test route (optional)
app.get('/test', (req, res) => {
  res.send('This is a test route.');
});

module.exports = app;


