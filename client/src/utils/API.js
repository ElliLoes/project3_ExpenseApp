import axios from "axios";

const base = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

export default {
  // Gets all expenses
  getExpenses: function() {
    return axios.get(base + "/api/expense");
  },
  // Gets the expense with the given id
  getExpense: function(id) {
    return axios.get(base + "/api/expense/" + id);
  },
  // Deletes the expense with the given id
  deleteExpense: function(id) {
    return axios.delete(base + "/api/expense/" + id);
  },
  // Saves a expense to the database
  createExpense: function(expenseData) {
    return axios.post(base + "/api/expense", expenseData);
  },

  loginUser: function(loginData) {
    return axios.post(base + "/api/login", loginData);
  },

  signupUser: function(signupData) {
    return axios.post(base + "/api/signup", signupData);
  },

  getCategories: function() {
    return axios.get(base + "/api/category");
  },
  getCategory: function(id) {
    return axios.get(base + "/api/category/" + id);
  },
  createCategory: function(categoryData) {
    return axios.post(base + "/api/category", categoryData);
  }
};
