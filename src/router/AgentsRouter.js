const express = require('express');
const { createAgent } = require('../controller/AgentsController');
const AgentsRouter = express.Router()
AgentsRouter.post('/create',createAgent);
module.exports = AgentsRouter