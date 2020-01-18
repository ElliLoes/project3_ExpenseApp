const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");
const auth = require("./authenticate");

// Matches with "/api/expense"
router.route("/")
  .get(auth, expenseController.findAll)
  .post(auth, expenseController.create);

// Matches with "/api/expense/:id"
router
  .route("/:id")
  .get(auth, expenseController.findById)
  .put(auth, expenseController.update)
  .delete(auth, expenseController.remove);

module.exports = router;