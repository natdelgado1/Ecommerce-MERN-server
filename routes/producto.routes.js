const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/producto.controller')

//Create
router.post("", ProductController.createProduct);
// //Find All
router.get("", ProductController.findAllProducts);
// //Find All Lanzamientos
router.get("/lanzamientos", ProductController.findLanzamientos);
// //Find One
router.get("/:id", ProductController.findProduct);
//Find All marcas
router.get("/:marca", ProductController.findByMarca);
//Find All category
router.get("/category/:id", ProductController.findProductByCategory);
// //Delete One
// router.delete("/:id", PirateController.deletePirate);


module.exports = router;