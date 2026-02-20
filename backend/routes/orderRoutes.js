const router = require("express").Router();
const Product = require("../models/Product");
const Order = require("../models/Order");

router.post("/checkout", async (req, res) => {
  try {
    const items = req.body.items;
    let total = 0;
    let orderItems = [];

    for (let item of items) {
      const product = await Product.findById(item.productId);

      if (!product) return res.status(404).json({ msg: "Product not found" });

      if (product.stock < item.quantity)
        return res.status(400).json({ msg: `${product.name} out of stock` });

      total += product.price * item.quantity;

      product.stock -= item.quantity;
      await product.save();

      orderItems.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
      });
    }

    const order = await Order.create({
      items: orderItems,
      totalAmount: total,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;
