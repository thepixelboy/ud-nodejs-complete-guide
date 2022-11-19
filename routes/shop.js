const express = require("express");

const productsControler = require("../controllers/products");

const router = express.Router();

router.get("/", productsControler.getProducts);

module.exports = router;
