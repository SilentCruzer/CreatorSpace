Moralis.Cloud.afterSave("NftMinted", async (request) => {
  const confirmed = request.object.get("confirmed");
  logger.info("Looking for confirmed TX...");

  if (!confirmed) {
    const NftMinted = Moralis.Object.extend("NftMinted");
    const query = new Moralis.Query(NftMinted);
    query.equalTo("address", "0xdc8e953a55816f9cb34555c6eea09bde449bef8b");

    const allData = await query.find();

    const totalNum = allData.length;
    const allMetadata = [];
    for (const item of allData) {
      allMetadata.push(item.get("tokenURI"));
    }

    const allNFTs = [];

    for (const element of allMetadata) {
      const requestURL = element.replace("ipfs://", "https://ipfs.io/ipfs/");
      const params = { url: requestURL}
      const response =  await Moralis.Cloud.run("getNftData", params);
      if(response){
        allNFTs.push(response);
      }
    }

    logger.info("All NFT");

    let metadata = allNFTs.map((e) => e.attributes);
    let tally = { TraitCount: {} };
    
    for (let j = 0; j < metadata.length; j++) {
      let nftTraits = metadata[j].map((e) => e.trait_type);
      let nftValues = metadata[j].map((e) => e.value);

      let numOfTraits = nftTraits.length;

      if (tally.TraitCount[numOfTraits]) {
        tally.TraitCount[numOfTraits]++;
      } else {
        tally.TraitCount[numOfTraits] = 1;
      }

      for (let i = 0; i < nftTraits.length; i++) {
        let current = nftTraits[i];
        if (tally[current]) {
          tally[current].occurences++;
        } else {
          tally[current] = { occurences: 1 };
        }

        let currentValue = nftValues[i];
        if (tally[current][currentValue]) {
          tally[current][currentValue]++;
        } else {
          tally[current][currentValue] = 1;
        }
      }
    }

    const collectionAttributes = Object.keys(tally);
    let nftArr = [];
    for (let j = 0; j < metadata.length; j++) {
      let current = metadata[j];
      let totalRarity = 0;
      for (let i = 0; i < current.length; i++) {
        let rarityScore =
          1 / (tally[current[i].trait_type][current[i].value] / totalNum);
        current[i].rarityScore = rarityScore;
        totalRarity += rarityScore;
      }

      let rarityScoreNumTraits =
        8 * (1 / (tally.TraitCount[Object.keys(current).length] / totalNum));
      current.push({
        trait_type: "TraitCount",
        value: Object.keys(current).length,
        rarityScore: rarityScoreNumTraits,
      });
      totalRarity += rarityScoreNumTraits;

      if (current.length < collectionAttributes.length) {
        let nftAttributes = current.map((e) => e.trait_type);
        let absent = collectionAttributes.filter(
          (e) => !nftAttributes.includes(e)
        );

        absent.forEach((type) => {
          let rarityScoreNull =
            1 / ((totalNum - tally[type].occurences) / totalNum);
          current.push({
            trait_type: type,
            value: null,
            rarityScore: rarityScoreNull,
          });
          totalRarity += rarityScoreNull;
        });
      }

      if (allNFTs[j].metadata) {
        allNFTs[j].metadata = JSON.parse(allNFTs[j].metadata);
        allNFTs[j].image = resolveLink(allNFTs[j].metadata.image);
      } else if (allNFTs[j].token_uri) {
        try {
          await fetch(allNFTs[j].token_uri)
            .then((response) => response.json())
            .then((data) => {
              allNFTs[j].image = resolveLink(data.image);
            });
        } catch (error) {
          console.log(error);
        }
      }

      nftArr.push({
        Attributes: current,
        Rarity: totalRarity,
        Name: allNFTs[j].name,
        description: allNFTs[j].description,
        image: allNFTs[j].image,
      });
    }

    nftArr.sort((a, b) => b.Rarity - a.Rarity);
    logger.info("Rarity aquired");

    for (let i = 0; i < nftArr.length; i++) {
      nftArr[i].Rank = i + 1;
      const newClass = Moralis.Object.extend("Mythical");
      const newObject = new newClass();

      const queryMythical = new Moralis.Query("Mythical")
      queryMythical.equalTo("name", nftArr[i].Name)
      let token_id = request.object.get("tokenId")
      const listedItem = await queryMythical.first()
      if(listedItem){
        token_id = listedItem.get("tokenId")
        await listedItem.destroy();
      }
      newObject.set("attributes", nftArr[i].Attributes);
      newObject.set("rarity", nftArr[i].Rarity);
      newObject.set("name", nftArr[i].Name);
      newObject.set("description", nftArr[i].description);
      newObject.set("rank", nftArr[i].Rank);
      newObject.set("tokenId",token_id);
      newObject.set("image", nftArr[i].image);
      newObject.set("address",request.object.get("address"))
  
      await newObject.save();
    }
  }
});

Moralis.Cloud.define("getNftData", async (request) => {
  return await Moralis.Cloud.httpRequest({
    url: request.params.url,
    followRedirects: true,
    headers: {
      method: "GET",
      accept: "application/json",
    },
  })
    .then((httpResponse) => httpResponse.data)
    .catch((error) => logger.info(error));
})
