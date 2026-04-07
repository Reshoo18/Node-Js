const express=require('express')

const router=express.Router();
const {getProducts, updateProduct}=require('../controllers/productController.js')

router.get('/products',getProducts)

router.put('/product/:id',updateProduct)


module.exports=router