const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Category
      .find({ user: req.user })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  findById: function (req, res) {
    db.Category
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  create: function (req, res) {
    db.Category
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  update: function (req, res) {
    db.Category
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  }

}