const Product=require('../models/productModel.js')


const getProducts=async(req,res)=>{
    try{
      const allProducts= await Product.find();
      if(!allProducts){
        res.json({
            message:"product not found"
        })
      }
      res.status(200).json({
        success:true,
        products:allProducts
      })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })

    }
}



module.exports={getProducts}