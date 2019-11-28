const { Api, JsonRpc } = require('eosjs');
const fetch = require('node-fetch'); //node only
const { TextDecoder, TextEncoder } = require('util'); //node only

const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');  // development only

const privateKeys = ["5KknNLKw9bkjpoRPiBxSRrnKCZKjiAjuGGnXX9pf1eFUWevgnie"];


const rpc = new JsonRpc('http://192.168.0.137:8889', { fetch }); //required to read blockchain state
const signatureProvider = new JsSignatureProvider(privateKeys);
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() }); //required to submit transactions

var storageService = {
    
    //Get all storages
    getStorages: async function(){
            j=await rpc.get_table_rows({
            json: true,               // Get the response as json
            code: 'utile',      // Contract that we target
            scope: 'utile',         // Account that owns the data
            table: 'storages',        // Table name
            limit: 10,                // Maximum number of rows that we want to get
            reverse: false,           // Optional: Get reversed data
            show_payer: false          // Optional: Show ram payer
          });

          console.log("Storages ",j);
    },

    addStorage: async function(){
        result= await api.transact({
            actions: [{
              account: 'eosio',
              name: 'addstorage',
              authorization: [{
                actor: 'storage1',
                permission: 'active',
              }],
              data: {
                payer: 'useraaaaaaaa',
                receiver: 'useraaaaaaaa',
                bytes: 8192,
              },
            }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30,
            }).catch(function(){
       console.log("error !!")
     });

     console.log("Storage created",reslut);
    },

    upgradeStorage: function(){

    }


}


module.exports = storageService;