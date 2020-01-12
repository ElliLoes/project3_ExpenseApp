import axios from "axios";

const base = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'

export default {
  // Gets all books
  getExpenses: function() {
    return axios.get(base + "/api/expense");
  },
  // Gets the book with the given id
  getExpense: function(id) {
    return axios.get(base + "/api/expense/" + id);
  },
  // Deletes the book with the given id
  deleteExpense: function(id) {
    return axios.delete(base + "/api/expense/" + id);
  },
  // Saves a book to the database
  saveExpense: function(expenseData) {
    return axios.post(base + "/api/expense", expenseData);
  }
};
