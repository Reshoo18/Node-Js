const express=require('express')

const router=express.Router();
const {getProducts, updateProduct, createProduct, deleteProduct}=require('../controllers/productController.js')

router.get('/products',getProducts)

router.put('/products/:id',updateProduct)

router.post('/create',createProduct)
router.delete('/delete/:id',deleteProduct)


module.exports=router