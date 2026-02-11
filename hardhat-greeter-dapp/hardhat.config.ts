import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, CELO_SEPOLIA_RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    celoSepolia: {
      url: `${CELO_SEPOLIA_RPC_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11142220,
    },
  },
};

export default config;
