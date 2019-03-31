const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',(req,res)=>{
    res.send("hello to the first project ")
})