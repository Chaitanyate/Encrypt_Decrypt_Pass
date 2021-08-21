// import React,{useState,useEffect} from "react";
// import Web3 from "web3";
// const web3 = new Web3(Web3.provider.Httpprovider());
// web3.setProvider('wss://rinkeby.infura.io/ws/v3/51a353c7b17a437a82de50c74bc12770'); // infura RPC
// var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('http://localhost:3000'); 

import Web3 from 'web3';
var web3; 
const provider = new Web3.providers.HttpProvider( 'https://rinkeby.infura.io/v3/51a353c7b17a437a82de50c74bc12770',);
web3 = new Web3(provider); 
export default web3;

// const web=(props)=>{

//     console.log(web3.eth.accounts.create());
//     const a =web3.eth.accounts.create();
    
//      return <div>
//         <h2>Public Address</h2> <p>{a.address}</p>

        
// );

//      </div>
// }

// const Web=()=>{
   // const[Count,ReCount]=useState('');
   
   // const a =web3.eth.accounts.create(); // password
   // console.log(a);
   // var walletprivate = a["privateKey"];
   // var phppasswallet = "THE_PASSWORD";
   // var keystore = web3.eth.accounts.encrypt(walletprivate, phppasswallet);

      
//    web3.eth.getBalance('0x6635F83421Bf059cd8111f180f0727128685BaE4', async (err, result) => {
//       if (err) {
//           console.log(err);
//           return;
//       }
//       let balance = web3.utils.fromWei(result, "ether");
//       console.log(balance + " ETH");
//   });

    

//   return <div>hello</div>
// }
//export default Web;