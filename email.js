const validator=require("email-validator+");
const express=require('express')
const path=require('path')
const app=express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/emailvalidate',(req,res)=>{
    var email=req.query.email
    if(validator.validate(email)){
        res.send("email is valid");
    }
    else{
        res.send("email is not valid");
    }
})
app.listen(3002,()=>{
    console.log('server is running on port 3002');
    
})