const router = require("express").Router();
const expenseRoutes = require("./expenses");
const loginRoutes = require("./login");

// Book routes
router.use("/expense", expenseRoutes);
router.use("/login", loginRoutes);

module.exports = router;