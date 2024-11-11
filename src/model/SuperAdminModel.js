const COLLECTION = require('../db/Collection')
const mongoose = require('mongoose')
const AdminSchema = mongoose.Schema({
    name:{type:"String"},
    phone:{type:"Number",required:[true,"number is required"]},
    email:{type:"String",required:[true,"email is required"]},
    password:{type:"String",required:[true,"Number is required"]}

})
const SuperAdminmodel = new mongoose.model(COLLECTION.SuperAdmin,AdminSchema)
module.exports = SuperAdminmodel
