// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


interface IUser {
    function createUser(address userAddress, string memory username) external;
}

contract Game {
    uint public gameCount;
    IUser public userContract;

    function createUser(address userAddress, string memory username) external {
        require(players[userAddress].playerAddress == address(0), "User already exists");

        Player storage newPlayer = players[userAddress];
        newPlayer.playerAddress = userAddress;
        newPlayer.username = username;
        newPlayer.score = 0;
    }
    
    constructor(address _userContractAddress) {
        userContract = IUser(_userContractAddress);
    }

    function startGame(string memory username) external {
        // Create a user in the User contract
        userContract.createUser(msg.sender, username);
        gameCount++;
    }
}