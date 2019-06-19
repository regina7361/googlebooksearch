const router = require("express").Router();
const dbController = require("../../controllers/dbControllers");
router.post("/save", dbController.saveOne);
router.get("/getAll", dbController.getAll);
router.delete("/deleteOne", dbController.deleteOne);
module.exports = router;