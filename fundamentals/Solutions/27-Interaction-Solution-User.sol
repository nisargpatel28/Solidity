// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract User {
    struct Player {
        address playerAddress;
        string username;
        uint256 score;
    }

    mapping(address => Player) public players;

}