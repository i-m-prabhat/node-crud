const express = require("express");
const multer = require("multer");

const router = express.Router();

// Controllers 
const ProductController = require("../controller/ProductController");


// routes 
const upload = multer({ dest: "public/uploads" })
router.get("/upload", ProductController.uploadSingleImageform);
router.post("/upload", upload.single('pic'), ProductController.uploadFile);
router.get("/", ProductController.getProduct);
router.post("/create", ProductController.createProducts);
router.put("/:id", ProductController.updateProducts);
router.delete("/:id", ProductController.deleteSingleProduct);
router.get("/:id", ProductController.getSingleProduct);

module.exports = router