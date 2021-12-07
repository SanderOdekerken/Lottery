require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  process.env.TEST,
  "https://rinkeby.infura.io/v3/23d9e56d36894372931ac6bc00ef755e"
);
const web3 = new Web3(provider);

const deploy = async ()=>{
    
};
deploy();