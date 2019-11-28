
// exports.test = function(req,res){
//     res.send('Bola From controller!');
// }


var txnService = {
    
    //Get all txns
    getTxns: function(){

    },

    addTxn: function(){

                  let p=(async () => {
                    return await api.transact({
                    actions: [{
                      account: 'utile',
                      name: 'addtxn',
                      authorization: [{
                        actor: 'storage5',
                        permission: 'active',
                      }],
                      data:
                      {
                        "txnId": 22181121111,
                        "storageName": "storage5",
                        "amount": 1,
                        "date": 21,
                        "categeory": "",
                        "storageLocId": "22"
                      }
                      ,
                    }]
                    }, {
                    blocksBehind: 3,
                    expireSeconds: 30,
                    });
                  })();


     p.then(function(s){
       console.log("ssfd");
     }).catch(function(e){
       console.log(e);
     });

    }


}


module.exports = txnService;