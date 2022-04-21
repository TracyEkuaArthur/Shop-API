const router = require("express").Router();
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controller/products.controller");


// const productRouter = Router();
// productRouter.route("/").get(getAllProducts).post(createProduct);
// productRouter
//   .route("/:productId")
//   .get(getSingleProduct)
//   .patch(updateProduct)
//   .delete(deleteProduct);

router.get("/", getAllProducts);
router.get("/:productId", getSingleProduct);
router.post("/", createProduct);
router.patch("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
