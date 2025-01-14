const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/api/upload', require('./api/upload'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
