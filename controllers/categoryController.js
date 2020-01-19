const db = require("../models");

const defaultCategories = [
  {
    title: "Food",
    description: "Any expenses related to food, groceries and eating out",
  },
  {
    title: "Transportation",
    description: "Any expenses related to public transport or car expenses",
  },
  {
    title: "Household",
    description: "Any expenses related to household expenses",
  },
  {
    title: "Leisure",
    description: "Any expenses related to leisure expenses",
  }
];



module.exports = {
  createDefaultCategories: function (userId) {
    const createCategories = defaultCategories.map(category =>
      db.Category
        .create({
          title: category.title,
          description: category.description,
          user: userId
        })
    );
    return Promise.all(createCategories);
  },
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
      .create({
        ...req.body,
        user: req.user
      })
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