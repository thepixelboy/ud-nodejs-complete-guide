const mongodb = require("mongodb");
const { getDb } = require("../helpers/database");

class Cart {
  constructor(items, totalPrice) {
    this.items = items;
    this.totalPrice = totalPrice;
  }

  save() {
    const db = getDb();
    return db.collection("carts").insertOne(this);
  }

  static findById(cartId) {
    const db = getDb();
    return db
      .collection("carts")
      .find({ _id: new mongodb.ObjectId(cartId) })
      .next()
      .then((cart) => {
        console.log(cart);
        return cart;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Cart;
