const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search"
router.route("/").get(searchController.searchAllBooks);
router.route("/findOne").get(searchController.searchOneBook);
module.exports = router;