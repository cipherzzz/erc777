// Allows us to use ES6 in our migrations and tests.
require("babel-register");
require("babel-polyfill");

require("dotenv").config();
const MNEMONIC = process.env.MNEMONIC_PHRASE;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      gas: 6000000,
      provider: new HDWalletProvider(MNEMONIC, "http://127.0.0.1:8545"),
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(
        MNEMONIC,
        "https://ropsten.infura.io/v3/" + INFURA_API_KEY
      ),
      network_id: 3
    },
    kovan: {
      provider: new HDWalletProvider(
        MNEMONIC,
        "https://kovan.infura.io/v3/" + INFURA_API_KEY
      ),
      network_id: 42
    }
  }
};
