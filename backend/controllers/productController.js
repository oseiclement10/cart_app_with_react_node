const Product = require('../models/Product');

const getAllProducts = async (req,res) =>{
    try{
        let products = await Product.find({});
        res.json(products);
    }catch(errr){
        console.error(errr);
        res.status(500).json({
            msg:"error in server ! contact administrator "
        });
    }
}

const getProductById = async (req,res)=>{
   try{
       let product = await Product.findById(req.params.id);
        res.json(product);
    }catch(err){
        console.error(err);
        res.status(500).json({
            msg:"error in sever contact adminstrator"
        });
    }

}

module.exports = {
    getAllProducts,
    getProductById
}