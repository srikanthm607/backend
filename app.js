const mongoose = require("mongoose");
const expores = require("express");
const app = expores();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("server running");
});

async function connectDb(){
    await mongoose.connect("localhost:27017",{
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