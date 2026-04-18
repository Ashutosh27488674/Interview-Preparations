const express = require('express');
const tictactoeRoutes = require('./problems/tictactoe/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Start server
app.listen(PORT, () => {
  console.log(`LLD Problems Server running on http://localhost:${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/`);
});

module.exports = app;