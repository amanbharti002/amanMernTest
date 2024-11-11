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

