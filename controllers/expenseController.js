const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      console.log(req.query, 'routes');
    }
}