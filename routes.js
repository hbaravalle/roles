const mainController = require("./controller/mainController");
const express = require("express");
const router = express.Router();

router.get("/", mainController.index);
router.get("/logueados", mainController.index);

router.get("/lectores", mainController.___);
router.get("/escritores", mainController.___);
router.get("/editores", mainController.___);
router.get("/admin", mainController.___);

module.exports = router;
