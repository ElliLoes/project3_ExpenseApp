const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
    login: function (req, res) {
        console.log("login", req.body);
        db.User.findOne({
            email: req.body.email
        })
            .then(dbUser => {
                console.log("user found", dbUser);
                if (!dbUser) {
                    res.status(404).json();
                    return;
                }
                dbUser.comparePassword(req.body.password, (err, isMatch) => {
                    if (err) {
                        res.status(500).json();
                        return;
                    }
                    if (!isMatch) {
                        res.status(403).json();
                        return;
                    }
                    const token = jwt.sign({ user: dbUser._id }, "secret", {
                        expiresIn: 10000000
                    });
                    res.cookie("token", token);
                    res.status(200).json();
                });



            })


        //   db.User
        //     .create(req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(503).json(err));
    }
}