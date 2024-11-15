const express = require('express')
const app = express()
const cors = require('cors')
const AccRoute = require('./src/router/router')
const SuperAdminRouter = require('./src/router/SuperAdminRouter')
const AgentsRouter = require('./src/router/AgentsRouter')
app.use(cors())
app.use(express.json())
app.use('/api/v1',AccRoute)
app.use('/api/v1/superadmin',SuperAdminRouter)
app.use('/api/v1/agent',AgentsRouter)
module.exports = app