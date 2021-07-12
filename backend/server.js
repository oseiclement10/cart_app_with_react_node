const config = require('./config/config');
const express = require('express');
const app = express();
const PORT = config.PORT;
const connectDB = require('./config/db');
const productRouter = require('./routes/productsRoute');
connectDB();

app.get('/',(req,res)=>{
    res.status(200).send(
        " Welcome to Shop App We Will be Online Soon !!"
    );
})

//middlewares

app.use(express.json());

app.use('/products',productRouter);

app.listen(PORT,()=>console.log(`server started at port ${PORT}`));
