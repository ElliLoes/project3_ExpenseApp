const db = require("../models");

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
            res.status(200).json();
        })
        

        //   db.User
        //     .create(req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(503).json(err));
    }
}