export const Config = {
    "host": "localhost",
    "port": "3000",
    "contractName":"chaincodename",
    "access":{
       "username":"admin",
       "password":"1234"
    },
    "walletPath": "newwallet",
    "admins": [
       {
         "username": "admin",
         "secret": "adminpw"
       }
    ],
    "logs": {
         "path": "Users/gaurav/Laail Code/nestjs/logs"
    },
     "swagger":{
         "title": "API",
         "description": "The API endpoints for Chaincode",
         "version": "1.0",
         "tag": "API endpoints",
         "url": "api-docs"
     },
     "orgConnectionSetting": {
         "certificateAuthorities": {
            "org1ca-api.127-0-0-1.nip.io:8080": {
               "url": "http://org1ca-api.127-0-0-1.nip.io:8080"
            }
         },
         "client": {
            "connection": {
               "timeout": {
                     "orderer": "300",
                     "peer": {
                        "endorser": "300"
                     }
               }
            },
            "organization": "Org1"
         },
         "display_name": "Org1 Gateway",
         "id": "org1gateway",
         "name": "Org1 Gateway",
         "organizations": {
            "Org1": {
               "certificateAuthorities": [
                     "org1ca-api.127-0-0-1.nip.io:8080"
               ],
               "mspid": "Org1MSP",
               "peers": [
                     "org1peer-api.127-0-0-1.nip.io:8080"
               ]
            }
         },
         "peers": {
            "org1peer-api.127-0-0-1.nip.io:8080": {
               "grpcOptions": {
                     "grpc.default_authority": "org1peer-api.127-0-0-1.nip.io:8080",
                     "grpc.ssl_target_name_override": "org1peer-api.127-0-0-1.nip.io:8080"
               },
               "url": "grpc://org1peer-api.127-0-0-1.nip.io:8080"
            }
         },
         "type": "gateway",
         "version": "1.0"
   }
 };