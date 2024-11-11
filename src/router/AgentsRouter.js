const express = require('express');
const { createAgent, getAgents } = require('../controller/AgentsController');
const AgentsRouter = express.Router()
AgentsRouter.post('/create',createAgent);
AgentsRouter.get('/getagent',getAgents);
module.exports = AgentsRouter