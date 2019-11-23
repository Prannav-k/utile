var express= require('express');
var app=express();

const storage= require('./routes/storages.route');
require('./routes/main')(app);

app.use('/storages',storage)


var server=app.listen(3000,function(){
    
    console.log("Server is running");

});