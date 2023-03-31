const express = require("express");
const router = express.Router();

// Controllers 
const ProductController = require("../controller/ProductController");


// routes 
router.get("/", ProductController.getProduct);
router.post("/create", ProductController.createProducts);
router.put("/:id", ProductController.updateProducts);
router.delete("/:id", ProductController.deleteSingleProduct);
router.get("/:id", ProductController.getSingleProduct);

module.exports = router