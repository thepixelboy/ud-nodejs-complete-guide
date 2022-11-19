const express = require("express");

const productsControler = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsControler.getAddProduct);

router.post("/add-product", productsControler.postAddProduct);

module.exports = router;
