const AdminModel = require('../model/AdminModel');
exports.singup = async (req, res, next) => {
    try {
        const signupData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        }
        const Singup = await AdminModel.create(signupData)
        if (Singup) {
            res.json({
                status: "success",
                message: "admin singup success"
            })
        }
        else {
            res.json({
                status: "faied",
                message: "failed to singup admin"
            })
        }

    }
    catch (err) {
        res.json({
            status: "failed",
            message: "someting went wrong to singup"

        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }
        const CreateAdmin = await AdminModel.findOne(loginData)
        if (CreateAdmin) {
            res.json({
                status: "success",
                message: "login success"
            })
        }
        else {
            res.json({
                status: "faied",
                message: "failed to login admin"
            })
        }

    }
    catch (err) {
        res.json({
            status: "failed",
            message: "someting went wrong to singup"

        })
    }
}
