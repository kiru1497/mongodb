const Product = require("../models/product");

// ➕ ADD PRODUCT
exports.postAddProduct = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;

  const product = new Product({
    title,
    price,
    description,
    imageUrl,
  });

  product
    .save()
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// ✏️ UPDATE PRODUCT
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const { title, price, description, imageUrl } = req.body;

  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }

      product.title = title;
      product.price = price;
      product.description = description;
      product.imageUrl = imageUrl;

      return product.save();
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json(products); // for now (Postman friendly)
    })
    .catch((err) => console.log(err));
};
