// const { Api, JsonRpc } = require('eosjs');
// const fetch = require('node-fetch'); //node only
// const { TextDecoder, TextEncoder } = require('util'); //node only

// const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');  // development only

// const privateKeys = ["5KknNLKw9bkjpoRPiBxSRrnKCZKjiAjuGGnXX9pf1eFUWevgnie"];


// const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch }); //required to read blockchain state
// const signatureProvider = new JsSignatureProvider(privateKeys);
// const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() }); //required to submit transactions


// module.exports = function(app){

//     app.get('/',function(req,res){
//         res.send("Im mainee")
//     });


//     app.get('/about',function(req,res){
//         res.send("Im aboutee")
//     });


//     app.get('/table',function(req,res){
        
//         (async () => {
//             // s=await rpc.get_table_rows({
//             //   json: true,               // Get the response as json
//             //   code: 'utile',      // Contract that we target
//             //   scope: 'utile',         // Account that owns the data
//             //   table: 'storages',        // Table name
//             //   limit: 10,                // Maximum number of rows that we want to get
//             //   reverse: false,           // Optional: Get reversed data
//             //   show_payer: false          // Optional: Show ram payer
//             // }
            
//             // );

//             j=await rpc.get_table_rows({
//                 json: true,               // Get the response as json
//                 code: 'utile',      // Contract that we target
//                 scope: 'utile',         // Account that owns the data
//                 table: 'storages',        // Table name
//                 limit: 10,                // Maximum number of rows that we want to get
//                 reverse: false,           // Optional: Get reversed data
//                 show_payer: false          // Optional: Show ram payer
//               }
              
//               );

//             console.log(j);
//                   })();
//     });



//     app.get('/post',function(){




     
 
 
//          async function l(){
//            reslut= await api.transact({
//                     actions: [{
//                       account: 'eosio',
//                       name: 'addstorage',
//                       authorization: [{
//                         actor: 'storage1',
//                         permission: 'active',
//                       }],
//                       data: {
//                         payer: 'useraaaaaaaa',
//                         receiver: 'useraaaaaaaa',
//                         bytes: 8192,
//                       },
//                     }]
//                     }, {
//                       blocksBehind: 3,
//                       expireSeconds: 30,
//                     }).catch(function(){
//                console.log("error !!")
//              });

//              console.log(reslut);
//           }


// });




//     app.get('/push',function(){

//       //bl

//                   let p=(async () => {
//                     return await api.transact({
//                     actions: [{
//                       account: 'utile',
//                       name: 'addtxn',
//                       authorization: [{
//                         actor: 'storage5',
//                         permission: 'active',
//                       }],
//                       data:
//                       {
//                         "txnId": 22181121111,
//                         "storageName": "storage5",
//                         "amount": 1,
//                         "date": 21,
//                         "categeory": "",
//                         "storageLocId": "22"
//                       }
//                       ,
//                     }]
//                     }, {
//                     blocksBehind: 3,
//                     expireSeconds: 30,
//                     });
//                   })();


//      p.then(function(s){
//        console.log("ssfd");
//      }).catch(function(e){
//        console.log(e);
//      });


//     });


//     app.get('/play',()=>{



//       async function s()  {
//         return await api.transact({
//                 actions: [{
//                   account: 'utile',
//                   name: 'addtxn',
//                   authorization: [{
//                     actor: 'storage5',
//                     permission: 'active',
//                   }],
//                   data:
//                   {
//                     "txnId": 22181121111116888,
//                     "storageName": "storage5",
//                     "amount": 1,
//                     "date": 21,
//                     "categeory": "",
//                     "storageLocId": "22"
//                   }
//                   ,
//                 }]
//                 }, {
//                 blocksBehind: 3,
//                 expireSeconds: 30,
//                 });

//       };

//    //   async var p=await s().then(l=>console.log(l));




//     });


// }