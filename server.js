const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',(req,res)=>{
    res.send("hello to the first project ")
})
app.use('/profile',(req,res)=>{
    res.send("hello")
})



const port=process.env.PORT||4444;
app.listen(port,()=>{
    console.log('server started');
})