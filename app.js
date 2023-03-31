const express = require("express");
const IndexRoute = require('./routes/IndexRoute');
const ProductRoute = require('./routes/ProductRoute');
const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", IndexRoute);
app.use("/products", ProductRoute)

module.exports = app