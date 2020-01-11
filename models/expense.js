const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  description: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;