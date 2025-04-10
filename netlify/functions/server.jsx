const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.use('/uploads', express.static(path.join(__dirname, '../../public/uploads'))); // Adjust the path if necessary
router.use('/api/upload', require('./api/upload')); // Adjust the path if necessary
// Ensure the contact API is included

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
