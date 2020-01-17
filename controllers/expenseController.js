const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    // if (!req.query.user) {
    //   res.status(400).json({ error: "Bad Request", msg: 'No "user" specified' });
    //   return;
    // }
    // if (!req.query.user.match(/^[0-9a-fA-F]{24}$/)) {
    //   res.status(400).json({ error: "Bad Request", msg: 'Invalid user id' });
    //   return;
    // }

    console.log("user", req.user);

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
    console.log('create expense', req.body);
    db.Expense
      .create(req.body)
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