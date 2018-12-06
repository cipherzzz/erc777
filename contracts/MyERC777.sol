pragma solidity ^0.4.23;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";

contract MyERC777 is ERC777 {

  constructor(
    string name,
    string symbol,
    uint256 granularity,
    address[] defaultOperators,
    uint256 initialSupply,
    bytes data,
    bytes operatorData
  ) public
    ERC777(
    name,
    symbol,
    granularity,
    defaultOperators,
    initialSupply,
    data,
    operatorData)
  {}
}