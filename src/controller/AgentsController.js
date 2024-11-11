
const AgenModel = require('../model/AgentsModel');
const {ObjectId} =require('mongodb')
exports.createAgent = async (req, res, next) => {
    try {
        const agentsDetails = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            superadminid:new ObjectId(req.body.superadminid)
        }
        const Agents = await AgenModel.create(agentsDetails)
        if (Agents) {
            res.json({
                status: "success",
                message: "agent create success"
            })
        }
        else {
            res.json({
                status: "faied",
                message: "failed to create agents"
            })
        }

    }
    catch (err) {
        res.json({
            status: "failed",
            message: "someting went wrong to create"

        })
    }
}

exports.getAgents = async(req, res, next)=>{
    try{
        const query ={adminid:req.body.superadminid}
        console.log( query)
    const resData = await AgenModel.aggregate([
        {$match:{superadminid:new ObjectId(query.adminid)}},
        {$lookup:{
            from:'superadmins',
            localField:'superadminid',
            foreignField:'_id',
            as:'agents'
        }}
    ])
    console.log(resData)
    if(resData){
        res.json({
            status:'success',
            data:resData
        })
    }else{
        res.json({
            stuts:'failed',
            message:"faile to find agents"
        })
    }
    }catch(err){
        res.json({
            status:'faild',
            message:"unable to find agents",
            error:err
        })
    }
}