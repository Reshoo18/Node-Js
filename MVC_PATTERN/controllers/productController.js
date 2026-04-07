const Product=require('../models/productModel.js')


const getProducts=async(req,res)=>{
    try{
      const allProducts= await Product.find();
      if(!allProducts || allProducts.length===0){
        return res.json({
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

const createProduct=async(req,res)=>{
  try{
    const {name,price,description,category}=req.body;
      const newProduct= new Product({name,price,description,category})
      await newProduct.save();
      res.status(200).json({
        product:newProduct
      })
  }catch(err){
     res.status(500).json({
            success:false,
            message:"Internal server error"
  })
}
}


const updateProduct=async(req,res)=>{
  try{
    console.log("put ki request a rhi h")
    const {id}=req.params
    const {name,price,description,category}=req.body;

    const updatedProduct= await  Product.findOneAndUpdate(id,{name,price,description,category},{new:true});
    res.status(200).json({
      product:updatedProduct
    })
  }catch(err){
     res.status(500).json({
      success:false,
      message:"tnernal server error"
     })
  }
}



module.exports={getProducts,updateProduct}