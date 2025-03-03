import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config({path:'./.env'});
mongoose.connect(process.env.MONODB)
.then(()=>{
    console.log('Mongodb is connected');
}).catch((err)=>{
    console.log(err);
});

const _dirname=path.resolve();
const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN,
    methods:process.env.METHOD,
     credentials:true }));

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use("/api/user",userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);
app.use('/api/comment',commentRoutes);
app.use('*',(req,res)=>res.send("404"));

// app.use(express.static(path.join(_dirname,'/client/dist')));

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(_dirname,'client','dist','index.html'));
// })

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message=err.message || 'Internal server Error';
    res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
});