/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { MUMBAI_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
        url: MUMBAI_URL,
        accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}