require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  // Local development
  app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
  app.use('/api/upload', require('./api/upload'));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} else {
  // In production, server logic is handled by Netlify Functions
  module.exports = app;
}
