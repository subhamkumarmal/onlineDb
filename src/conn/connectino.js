const mongoose=require('mongoose');


const CONNECTION_ONILNE = 'mongodb+srv://subhamkumarmal:skm12345@cluster0.bildd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_ONILNE,{
 useNewUrlParser:true,
 useUnifiedTopology:true

}).then(()=>{
    console.log("DataBase has been successfully created");
}).catch((err)=>{
    console.log(err);
})