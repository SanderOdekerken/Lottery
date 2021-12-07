require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  "https://rinkeby.infura.io/v3/23d9e56d36894372931ac6bc00ef755e"
);
const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log("Attemting to deploy from account", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(JSON.stringify(abi))).deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    }).send({from : accounts[0], gas: "1000000"});

    console.log("Contract deployed to", result.options.address);
};
deploy();