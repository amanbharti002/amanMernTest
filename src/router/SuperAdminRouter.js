const express = require('express');
const { SuperAdminSingup, SuperAdminLogin } = require('../controller/SuperAdminController');
const SuperAdminRouter = express.Router()
SuperAdminRouter.post('/singup',SuperAdminSingup);
SuperAdminRouter.post('/login',SuperAdminLogin)
module.exports = SuperAdminRouter;