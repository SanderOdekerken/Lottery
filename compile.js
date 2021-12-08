const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

function createConfiguration() {
  return {
    language: "Solidity",
    sources: {
      "Lottery.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
}

function compileSources(config) {
  try {
    return JSON.parse(solc.compile(JSON.stringify(config)));
  } catch (e) {
    console.log(e);
  }
}
const config = createConfiguration();
const output = compileSources(config);

for (var contractName in output.contracts["Lottery.sol"]) {
    const compileValue = {
        bytecode: output.contracts["Lottery.sol"][contractName].evm.bytecode.object,
        abi: output.contracts["Lottery.sol"][contractName].abi,
    }
    module.exports = compileValue;
}
