const mongoose = require("mongoose");
const express = require("express");;
const cors=require('cors');
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");

app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("server running");
});

app.use("/category",categoryRoutes);
app.use("/brand",brandRoutes);
app.use("/product",productRoutes);
app.use("/customer",customerRoutes);

async function connectDb(){
    await mongoose.connect("mongodb://0.0.0.0:27017",{
        dbName:"e-com-store-db",
    });
    console.log("mongodb connected")
}
connectDb().catch((error)=>{
    console.log(error)
})
app.listen(port,()=>{
    console.log("Server running on port",port);
})