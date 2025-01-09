const mongoose = require("mongoose");
const express = require("express");;
const cors=require('cors');
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const authRoutes = require("./routes/auth");
const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("server running");
});

app.use("/category",verifyToken,isAdmin, categoryRoutes);
app.use("/brand",verifyToken,isAdmin,brandRoutes);
app.use("/product",verifyToken,isAdmin,productRoutes);
app.use("/customer",verifyToken,customerRoutes);
app.use("/auth",authRoutes)

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