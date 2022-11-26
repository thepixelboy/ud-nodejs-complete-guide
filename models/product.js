const mongodb = require("mongodb");
const { getDb } = require("../helpers/database");

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();

    if (this._id) {
      return db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      return db
        .collection("products")
        .insertOne(this)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Product;
