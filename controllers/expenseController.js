const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Expense
      .find({ user: req.user })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  findById: function (req, res) {
    db.Expense
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  create: function (req, res) {
    db.Expense
      .create({
        ...req.body,
        user: req.user
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  update: function (req, res) {
    db.Expense
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(503).json(err));
  },
  remove: function (req, res) {
    db.Expense
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}