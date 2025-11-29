// hardhat.config.js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// Pull env vars (keep these in .env and NEVER commit .env to git)
const {
  PRIVATE_KEY,
  SEPOLIA_RPC,
  POLYGON_RPC,    // Polygon Amoy (testnet) or Polygon mainnet if you set it so
  BSC_RPC,        // BSC testnet or mainnet RPC
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  BSCSCAN_API_KEY,
  COINMARKETCAP_API_KEY, // optional: for gas reporter USD pricing
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // increase if you have hot paths called many times
      },
      // viaIR: true, // uncomment if you want IR-based compilation (helps some complex contracts)
    },
  },

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      // You can fork mainnet or other chains here if needed:
      // forking: {
      //   url: process.env.MAINNET_RPC || "",
      //   blockNumber: 0, // optional pin
      // },
      // chainId: 31337,
    },

    // Ethereum Sepolia testnet
    sepolia: {
      url: SEPOLIA_RPC || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },

    // Polygon Amoy (new Polygon PoS testnet)
    polygonAmoy: {
      url: POLYGON_RPC || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },

    // BSC testnet or mainnet (set the right RPC in .env)
    bsc: {
      url: BSC_RPC || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },

    // Add more networks as needed:
    // polygon: { url: "", accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [] },
    // arbitrum: { url: "", accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [] },
  },

  etherscan: {
    // Used for contract verification (npx hardhat verify ...)
    apiKey: {
      // Etherscan family multi-chain keys; you can set only what you use
      sepolia: ETHERSCAN_API_KEY || "",
      polygonAmoy: POLYGONSCAN_API_KEY || "",
      bsc: BSCSCAN_API_KEY || "",
      // polygon: POLYGONSCAN_API_KEY || "",
    },
    // customChains: [] // not needed for standard networks
  },

  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY || undefined, // optional for price data
    excludeContracts: [],
    // outputFile: "gas-report.txt", // write to file instead of console
    // noColors: true,
  },

  mocha: {
    timeout: 120000, // 120s for tests that hit RPCs/VRF mocks
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

module.exports = config;
