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
            string          address; 
            string          zipcode; 
            
            auto primary_key() const {return storageName.value; }

        };

        struct[[eosio::table]] coop{

            name coopName;
            string zipcode;
            vector<name>    godowns = { "storage1","storage2" } ;     
                        
            auto primary_key() const {return coopName.value;}


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
        typedef eosio::multi_index<name("coops"), coop> coop_table;
        typedef eosio::multi_index<name("transactions"),transaction> transaction_table;
        

        storage_table _storages;
        transaction_table _transasctions;
        coop_table _coops;


    public:


        utile( name receiver, name code, datastream<const char*> ds ):contract(receiver, code, ds),
                       _storages(receiver, receiver.value),
                       _transasctions(receiver, receiver.value),
                       _coops(receiver,receiver.value) {}

        [[eosio::action]]
        void login(name username);

        [[eosio::action]]
        void addstorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity,string address,string zipcode);

         [[eosio::action]]
        void updatestorage(name storageName,uint32_t totalCapacity,uint32_t availableCapacity);


        [[eosio::action]]
        void addcoop(name coopName,string zipcode,vector<name> godowns);


        [[eosio::action]]
        void updatecoop(name coopName,string zipcode,vector<name> godowns);

        [[eosio::action]]
        void addtxn(uint64_t txnId,name storageName, uint32_t amount, uint32_t date,string storageLocId );


        // [[eosio::action]]
        // void updatestorage();
};
