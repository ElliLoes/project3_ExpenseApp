const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");

// Matches with "/api/expense"
router.route("/")
  .get(expenseController.findAll)
  .post(expenseController.create);

// Matches with "/api/expense/:id"
router
  .route("/:id")
  .get(expenseController.findById)
  .put(expenseController.update)
//   .delete(expenseController.remove);

module.exports = router;