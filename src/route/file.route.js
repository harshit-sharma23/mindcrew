const express = require('express');
const app = express();

const fileMiddleware=require('../middleware/file.middleware');
const fileMerge = require('../controller/file.controller');

app.post('/merge-file', fileMiddleware.array('files', 2), fileMerge.merge);


module.exports = app;