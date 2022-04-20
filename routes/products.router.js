const { Router } = require("express");
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controller/products.controller");

const productRouter = Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter
  .route("/:productId")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;