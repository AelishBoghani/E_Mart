const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addproduct", async (req, res) => {
  const product = req.body.product;
  try {
    const newproduct = new Product({
      name: product.name,
      image: product.image,
      varients: ["_4GB", "_8GB", "_16GB"],
      description: product.description,
      category: product.category,
      prices: [product.prices],
    });
    await newproduct.save();
    res.send("New Product Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error + error });
  }
});
router.post("/getproductbyid", async (req, res) => {
  const productid = req.body.productid;
  try {
    const product = await Product.findOne({ _id: productid });
    res.send(product);
  } catch (error) {
    return res.status(400).json({ message: error + error });
  }
});
router.post("/deleteproduct", async (req, res) => {
  const productid = req.body.productid;
  try {
    await Product.findOneAndDelete({ _id: productid });
    res.send('Product Deleted Successfully');
  } catch (error) {
    return res.status(400).json({ message: error + error });
  }
});
router.post("/editproduct", async (req, res) => {
  const editedproduct = req.body.editedproduct;
  try {
    const product = await Product.findOne({ _id: editedproduct._id });
    product.name=editedproduct.name,
    product.description=editedproduct.description,
    product.image=editedproduct.image,
    product.category=editedproduct.category,
    product.prices=[editedproduct.prices]
    await product.save()
    res.send('Product Details Edited Successfully')
  } catch (error) {
    return res.status(400).json({ message: error + error });
  }
});

module.exports = router;
