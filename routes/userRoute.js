const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController");
router.get("/list", UserController.list);
router.get("/show", UserController.show);

router.post("/store", UserController.store);

router.post("/update", UserController.update);
router.delete("/delete", UserController.destroy);

module.exports = router;
