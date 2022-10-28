async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("NFT")
    const [owner] = await ethers.getSigners()
    const data = await ExampleNFT.attach(contractAddress).mintNFT(metaDataURL)
    console.log("NFT minted to: ", owner.address)
 }

 const contractAddress = "0xb9B7BfeeF7bA61abe640529fc4A63D007b6355F4"
 const ipfs = "ipfs://bafyreib6mpqau2amz2ilmcxpbkyabolr5xt4szxxy75rkgyffoc6dnjcta/metadata.json"

 mintNFT(contractAddress, ipfs)
.then(() => process.exit(0))
.catch((error) => {
 console.error(error);
 process.exit(1);
});