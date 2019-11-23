#include "middleware.cpp"


void utile::login(name username){

    require_auth(username);

    //TODO any user , not just storages.

    // Create a record in the table if the player doesn't exist in our app yet
    auto storage_iterator = _storages.find(username.value);
    if (storage_iterator == _storages.end()) {
    storage_iterator = _storages.emplace(username,  [&](auto& new_storage) {
      new_storage.storageName = username;
    });
  } 
}

//add ceck if already exists.
void utile::addstorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity,string address,string zipcode){

  require_auth(storageName);

  storage_table storages(get_self(), get_first_receiver().value);

  auto iterator = storages.find(storageName.value);


    if( iterator == storages.end() )
    {
      storages.emplace(storageName, [&]( auto& row ) {
        row.storageName = storageName;
        row.totalCapacity = totalCapacity;
        row.availableCapacity = availableCapacity;
        row.address=address;
        row.zipcode=zipcode;
      });
    }
}


void utile::updatestorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity){

  require_auth(storageName);

  storage_table storages(get_self(), get_first_receiver().value);

  auto storageIterator = storages.find(storageName.value);


        check(storageIterator != storages.end(), "Record of given storage does not exist");

        storages.modify(storageIterator, storageName, [&]( auto& row ) {
        row.storageName = storageName;
        row.totalCapacity = totalCapacity;
        row.availableCapacity = availableCapacity;
      });
}


//add ceck if already exists.
  void utile::addcoop(name coopName,string zipcode,vector<name> godowns){

      require_auth(coopName);
      coop_table coops(get_self(), get_first_receiver().value);

      auto iterator = coops.find(coopName.value);


        if( iterator == coops.end() )
        {
          coops.emplace(coopName, [&]( auto& row ) {
            row.coopName = coopName;
            row.zipcode  = zipcode;
            row.godowns  = godowns;
          });
        }
  }


   void utile::updatecoop(name coopName,string zipcode,vector<name> godowns){
     
      require_auth(coopName);
      coop_table coops(get_self(), get_first_receiver().value);

      auto iterator = coops.find(coopName.value);


      check(iterator != coops.end(), "Record of given coop does not exist");

      coops.modify(iterator, coopName, [&]( auto& row ) {
            row.coopName = coopName;
            row.zipcode  = zipcode;
            row.godowns  = godowns;
            });

  }


  void utile::addtxn(uint64_t txnId,name storageName, uint32_t amount, uint32_t date,string storageLocId ){

        require_auth(storageName);

        //check if txn already exists
        transaction_table transactions(get_self(), get_first_receiver().value);
        auto iterator = transactions.find(txnId);
        check(iterator == transactions.end(), "Record of given txn id already exist");

        //check if storage is present
        storage_table storages(get_self(), get_first_receiver().value);
        auto storageIterator = storages.find(storageName.value);
        check(storageIterator != storages.end(), "Record of given storage does not exist");

        //check if enough space is present in storage
        check(amount < storageIterator->availableCapacity,"Amount mentioned exceeds current available storage");

        //print(storageIterator->storageName);


          if( iterator == transactions.end() )
          {
            transactions.emplace(storageName, [&]( auto& row ) {
              row.txnId = txnId;
              row.storageName = storageName;
              row.amount = amount;
              row.date = date;
              row.storageLocId = storageLocId;
            });
          }


          //update storage available quantity

            storages.modify(storageIterator, storageName, [&]( auto& row ) {
              row.storageName = storageIterator->storageName;
              row.totalCapacity = storageIterator->totalCapacity;
              row.availableCapacity = storageIterator->availableCapacity-amount;
            });

}




EOSIO_DISPATCH(utile, (login)(addstorage)(updatestorage)(addcoop)(addtxn)(updatecoop))

//