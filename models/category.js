const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: { type: String, required: true },
  description: String,
  deleted: { type: Boolean, default: false }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;