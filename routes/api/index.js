const router = require("express").Router();
const expenseRoutes = require("./expenses");

// Book routes
router.use("/expense", expenseRoutes);

module.exports = router;