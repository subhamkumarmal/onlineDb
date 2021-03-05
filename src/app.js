const express= require('express');
const app=express();
const path=require('path');
const port = process.env.PORT || 5005;

const pathPublic = path.join(__dirname,"../public");
app.use(express.static(pathPublic));

require('./conn/connectino');

const documents = require('./struct/structure');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.post('/information',async(req,res)=>{

    try{

        const result = new documents({
            Name:req.body.name,
            Email:req.body.email,
            Phone:req.body.phone
        })

        const savingResult = await result.save();
        res.send(savingResult);

    }catch(err){
        console.log(err);
        res.send("error")
    }
  
})

app.listen(port,()=>{
    console.log(`server is running at the port no ${port}`);
})