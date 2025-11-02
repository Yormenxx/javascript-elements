import express from 'express';
import { dbConnection } from './src/db/db.js';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();
const PORT = process.env.PORT || 3000;  

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/user",router);
app.use("/api/blog",blogRouter)



app.use("/api",(req,res,next)=>{
    res.send("API is working")
})



app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT} `)
})
dbConnection();

