import React,{useEffect} from "react";

const BitcoinFunction=()=>{
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

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

console.log(`
Bitcoin Wallet generated:
Address: ${btcAddress},
Key: ${node.toWIF()},
Mnemonic: ${mnemonic}
`)



}
export default BitcoinFunction;