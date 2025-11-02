import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import connectDb from "./db";

const app = express();
connectDb();

app.use(cors({
    credentials:true
}))


app.use(compression());
app.use(morgan("dev"))
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}/`)
})
