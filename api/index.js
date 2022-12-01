const express = require("express"); //könyvtárimportálás
const app=express();
const mongoose=require("mongoose"); 
const dotenv=require("dotenv");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const sitedesignRoute=require("./routes/sitedesign")
const stripeRoute=require("./routes/stripe")
var cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB csatlakozás sikeres!"))
.catch((err)=>{console.log(err);});

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
   
    next();
  });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/sitedesigns", sitedesignRoute)
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend szerver fut!");
});
