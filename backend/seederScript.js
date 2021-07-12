const config = require('./config/config');
const dbConnect = require('./config/db');
const Product = require('./models/Product');
const productData = require('./data/ProductsInfo');
dbConnect();

const insertProduct = async () =>{
    try {
        await Product.deleteMany({});
        
        await Product.insertMany(productData);
        console.log("Product Insertion Successful");

        process.exit(1);
    }catch(errr){
            console.error("Error inserting Data");
            process.exit(1);
    }
}
insertProduct();
