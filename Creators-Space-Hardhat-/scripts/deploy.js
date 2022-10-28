async function deployContract() {
  const NFT = await ethers.getContractFactory("NFT")
  const exampleNFT = await NFT.deploy("0xf4dC1e5fa9Ce1103d6BC206f86f881CFa12E2fFA" ,"0x2170ed0880ac9a755fd29b2688956bd959f933f8",1000000000000000)
  await exampleNFT.deployed()
  const txHash = exampleNFT.deployTransaction.hash
  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  const contractAddress = txReceipt.contractAddress
  console.log("Contract deployed to address:", contractAddress)
 }
 
deployContract()
.then(() => process.exit(0))
.catch((error) => {
 console.error(error);
 process.exit(1);
});