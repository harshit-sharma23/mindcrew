const express = require('express');
const app = express();

const userController = require('../controller/user.controller');

app.get('/get-user-details', userController.getUserDetails);
app.get('/get-all-user-details', userController.getAllUserDetails);
app.post('/user-registrations', userController.userRegistrations);
app.patch('/user-details-update', userController.updateUserDetails);
app.patch('/user-soft-remove', userController.SoftDeleteUser);

module.exports = app;