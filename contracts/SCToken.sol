// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SCToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("SpreadChain", "SC") {
        _mint(msg.sender, initialSupply);
    }
}
