import chai from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const { expect, assert } = chai;

var MyERC777 = artifacts.require("MyERC777");

contract("Testing ERC777 contract", function(accounts) {
  let token;

  tokenOwner = accounts[0];
  const name = "BlueCat";
  const symbol = "BCat";
  const defaultOperators = [];
  const INITIAL_SUPPLY = "10000";
  const USER_DATA = "0xabcd";
  const OPERATOR_DATA = "0x0a0b0c0d";
  const GRANULARITY = "1";

  it(" should be able to deploy and mint ERC777 token", async () => {
    token = await MyERC777.new(
      name,
      symbol,
      GRANULARITY,
      defaultOperators,
      INITIAL_SUPPLY,
      USER_DATA,
      OPERATOR_DATA
    );
    expect(await token.symbol()).to.equal(symbol);
    expect(await token.name()).to.equal(name);
  });
});
