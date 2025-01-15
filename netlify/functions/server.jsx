const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.use('/uploads', express.static(path.join(__dirname, '../../public/uploads'))); // Adjust the path if necessary
router.use('/api/upload', require('./api/upload')); // Adjust the path if necessary

app.use('/.netlify/functions/upload', router);

module.exports.handler = serverless(app);
