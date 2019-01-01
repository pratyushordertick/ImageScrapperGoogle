
exports.registration = (req, res) => {
    console.log('gheklscjabd')
    res.json({"sads":"daca"});
    
}




/*

var dbUserLogin = require('../models/login')

exports.registration = (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        res.json({
            success: false,
            msg: "Enter email and password both."
        })
    } else {
        var newUser = new dbUserLogin({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            status: 1,
            admin: false
        })
        dbUserLogin.findOne({ email: req.body.email }, (err, lData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Database error"
                })
            } else if (lData != null || lData) {
                res.json({
                    success: false,
                    msg: "You have already registered"
                })
            } else {
                newUser.save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Database Error"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registered"
                        })
                    }
                })
            }
        })
    }
}


*/