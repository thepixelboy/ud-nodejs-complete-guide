const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
