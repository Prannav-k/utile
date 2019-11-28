var express= require('express');
var app=express();
var bodyParser = require('body-parser')




const storage= require('./controllers/storageController');
const txn = require('./controllers/txnController');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/storages',storage)
app.use('/transactions',txn);


var server=app.listen(3000,function(){
    
    console.log("Server is running");

});