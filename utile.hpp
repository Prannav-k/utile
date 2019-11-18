#include <eosio/eosio.hpp>
#include <string>


using namespace eosio;
using namespace std;
//using std::string;



class  [[eosio::contract("utile")]] utile: public eosio::contract{


    private:

        struct[[eosio::table]]  storage{

            name            storageName;
            uint32_t        totalCapacity;
            uint32_t        availableCapacity;
            string&         address; 
            
            auto primary_key() const {return storageName.value; }

        };

        struct[[eosio::table]]  transaction
        {

            uint64_t     txnId;
            name         storageName;
            uint32_t     amount;
            uint32_t     date;
            string       categeory;
            string       storageLocId; 
            /* data */

            auto primary_key() const {return txnId;}
        };

        /**
         * A vector for supply chain?
         */ 
        

        typedef eosio::multi_index<name("storages"), storage> storage_table;
        typedef eosio::multi_index<name("transactions"),transaction> transaction_table;

        storage_table _storages;
        transaction_table _transasctions;


    public:


        utile( name receiver, name code, datastream<const char*> ds ):contract(receiver, code, ds),
                       _storages(receiver, receiver.value),
                       _transasctions(receiver, receiver.value) {}

        [[eosio::action]]
        void login(name username);

        [[eosio::action]]
        void addstorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity);

         [[eosio::action]]
        void updatestorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity);

        [[eosio::action]]
        void addtxn(uint64_t txnId,name storageName, uint32_t amount, uint32_t date,string storageLocId );


        // [[eosio::action]]
        // void updatestorage();
};
