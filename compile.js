const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

function createConfiguration() {
  return {
    language: "Solidity",
    sources: {
      "Inbox.sol": {
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

for (var contractName in output.contracts["Inbox.sol"]) {
    const compileValue = {
        bytecode: output.contracts["Inbox.sol"][contractName].evm.bytecode.object,
        abi: output.contracts["Inbox.sol"][contractName].abi,
    }
    module.exports = compileValue;
}
