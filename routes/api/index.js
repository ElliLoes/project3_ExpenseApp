const router = require("express").Router();
const expenseRoutes = require("./expenses");
const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const categoryRoutes = require("./category");

// Book routes
router.use("/expense", expenseRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/category", categoryRoutes);


module.exports = router;