const db = require("../models");

module.exports = {
    login: function (req, res) {
        console.log("login", req.body);
        res.status(200).json();
        //   db.User
        //     .create(req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(503).json(err));
    }
}