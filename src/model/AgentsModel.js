const COLLECTION = require('../db/Collection')
const {ObjectId} = require('mongodb')
const mongoose = require('mongoose')
const AgentsSchema = mongoose.Schema({
    name:{type:"String"},
    phone:{type:"Number",required:[true,"number is required"]},
    email:{type:"String",required:[true,"email is required"]},
    password:{type:"String",required:[true,"Number is required"]},
    superadminid:{type:ObjectId,required:[true,'admin id must']}

})
const AgentModel = new mongoose.model(COLLECTION.Agents,AgentsSchema)
module.exports = AgentModel 
