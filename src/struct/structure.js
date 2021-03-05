const mongoose = require('mongoose');

const docStr=new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    }
})

const  documents = new mongoose.model("table",docStr);

module.exports=documents;