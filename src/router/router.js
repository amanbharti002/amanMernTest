const express = require('express');
const { singup, login } = require('../controller/singupController');
const AccRoute = express.Router()
AccRoute.post('/singup',singup);
AccRoute.post('/login',login)
module.exports = AccRoute;