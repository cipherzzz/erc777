const MyERC777 = artifacts.require("./MyERC777.sol");

const NAME = "MyERC777";
const SYMBOL = "MyERC777";
const DEFAULT_OPERATORS = [];
const INITIAL_SUPPLY = 10000;
const USER_DATA = "0xabcd";
const OPERATOR_DATA = "0x0a0b0c0d";
const GRANULARITY = 1;

module.exports = async function(deployer) {
  await deployer.deploy(
    MyERC777,
    NAME,
    SYMBOL,
    GRANULARITY,
    DEFAULT_OPERATORS,
    INITIAL_SUPPLY,
    USER_DATA,
    OPERATOR_DATA
  );
  await MyERC777.deployed();
};
