const mongoose = require("mongoose");
const ProductSchema = require('./ProductSchema.json');

const Product = mongoose.Schema(ProductSchema);
const ProductModel = mongoose.model("Model", Product, "products");

module.exports = ProductModel