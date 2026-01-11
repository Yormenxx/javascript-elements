const express = require("express");
const dotenv=require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const cookiParser = require("cookie-parser");
const connectionDb = require("./src/db/connection.js");
const app = express();
const authRouter = require("./src/routers/authRouter.js");


const PORT = 3000 || process.env.PORT;

dotenv.config();

app.use(cors());
app.use(helmet());
app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/auth",authRouter);

app.get("/",(req,res)=>{
    res.json({message:"api working host"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})

connectionDb();