const router = require("express").Router();
const categoryController = require("../../controllers/categoryController");
const auth = require("./authenticate");

// Matches with "/api/category"
router.route("/")
  .get(auth, categoryController.findAll)
  .post(auth, categoryController.create);

// Matches with "/api/category/:id"
router
  .route("/:id")
  .get(auth, categoryController.findById)
  .put(auth, categoryController.update);

module.exports = router;