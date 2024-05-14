import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import connect from './config/Connect.js';
import userrouter from './route/user.route.js'
import cors from 'cors'
const app=express();
dotenv.config({
    path:".env"
})
await connect();
const PORT=process.env.PORT
app.use(cors())
app.use(express.json()); // Parse JSON-encoded request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// app.use(cookieParser()); // Parse cookies
app.get("/",(req,res)=>{
    res.send("i am here");
})
app.use("/api",userrouter)
app.get("/user",(req,res)=>{
    res.json({data:"umesh is here"});
})
app.listen(PORT,()=>{
    console.log(`server is listhening at port ${PORT}`);
})