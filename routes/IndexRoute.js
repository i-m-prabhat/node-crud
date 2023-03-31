const express = require("express");
const router = express.Router();

// Controllers 
const IndexController = require("../controller/IndexController");


router.get("/", IndexController.index);
router.get("/home", IndexController.home);

module.exports = router