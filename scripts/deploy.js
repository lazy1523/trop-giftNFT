// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );


  const Words= await hre.ethers.getContractFactory("Words");
  const words = await Words.deploy();
  await words.deployed();

  const WordsURI = await ethers.getContractFactory('WordsURI')
  const wordsURI = await WordsURI.deploy(words.address)
  await wordsURI.deployed();


  console.log("words deployed to:", words.address);
  console.log("wordsURI deployed to:", wordsURI.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
