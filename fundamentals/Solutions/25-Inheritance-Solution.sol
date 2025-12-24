// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// 1️⃣ Inherit from the Multiplayer Game
// 2️⃣ Call the parent joinGame() function
// HINT: you might have to use the super keyword
// 3️⃣ Increment playerCount in joinGame() function

// MultiplayerGame contract
contract MultiplayerGame {
    mapping(address => bool) public players;

    function joinGame() public virtual {
        players[msg.sender] = true;
    }
}

