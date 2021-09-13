import React,{useEffect} from "react";



const BitcoinFunction=(encPass,type)=>{
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')
const crypto = require('crypto');

var aes256 = require('aes256');
var CryptoJS = require("crypto-js");






var text ='123';


//defining network
const network = bitcoin.networks.testnet //use network.bitcoin for mainnet

//derivation path
const path = `m/44'/1'/0'/0` //use m/44'/0'/0'/0 for mainnet

let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
let root = bip32.fromSeed(seed, network)

let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
pubkey: node.publicKey,
network: network,
}).address

var ciphertext = CryptoJS.AES.encrypt(node.toWIF(), encPass).toString();

if(type=='encryption'){
    
    console.log('encrypted:',ciphertext);

}
else{
    var bytes  = CryptoJS.AES.decrypt(ciphertext,encPass);
    
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log('Decrypted:',bytes);
    
    console.log('original text',originalText);
}





// console.log(node.toWIF());
// console.log(encPass);




// console.log(`
// Bitcoin Wallet generated:
// Address: ${btcAddress},
// Key: ${node.toWIF()},
// Mnemonic: ${mnemonic}
// `)



// console.log(decryptedPlainText);
// console.log(node.toWIF())

}
export default BitcoinFunction;