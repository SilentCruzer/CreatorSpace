import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import { FaEthereum } from "react-icons/fa";

const ViewNft = () => {
  const router = useRouter();
  const { Moralis } = useMoralis();
  const [nftId, setNftId] = useState(router.query.nftId);
  const [artistId, setArtistId] = useState(router.query.collectionId);
  const [nft, setNFTBalances] = useState();

  useEffect(() => {
    setNftId(router.query.nftId);
    setArtistId(router.query.collectionId);
    async function fetchData() {
      if (nftId && artistId) {
        const dbNFTs = Moralis.Object.extend("Collections");
        const query = new Moralis.Query(dbNFTs);
        query.equalTo("Artist", artistId);
        query.equalTo("tokenId", nftId);
        const collectionDB = await query.find();
        if(collectionDB)
          setNFTBalances(collectionDB)
      }
    }
    fetchData();
  }, [Moralis.Object, Moralis.Query, nft, artistId, nftId, router.query.nftId, router.query.collectionId]);

  return (
    <div className="p-10 px-20 flex flex-col items-center h-full">
      {nft && (
        <div className="flex justify-between">
        <div className="flex flex-col w-1/2 gap-10 justify-center">
          <h1 className="text-white text-5xl">{nft[0].attributes.nftName}</h1>
          <h1 className=" text-purple-600 text-xl">{nft[0].attributes.collectionName}</h1>
          <h1 className="text-white text-lg tracking-wider">
            {nft[0].attributes.description}
          </h1>
          <div className="flex flex-col bg-neutral-800 w-fit p-4 rounded-lg gap-2">
            <h1 className="text-white">Current Price</h1>
            <div className="flex gap-2 items-center">
              <FaEthereum className="text-white text-2xl"/>
            <h1 className="text-white text-2xl font-semibold">{nft[0].attributes.Price}</h1>
            </div>
            
          </div>
          <div className="flex space-x-3">
            <div className="p-4 px-5 border-2 border-purple-900 hover:bg-purple-900 hover:cursor-pointer w-fit rounded-2xl">
              <h1 className="text-white text-xl">Purchase </h1>
            </div>
            <div className="p-4 px-5 border-2 border-gray-500 w-fit rounded-2xl">
              <h1 className="text-white text-xl">Place a bid </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-3xl"
            src={nft[0].attributes.image}
          />
        </div>
        <div className="flex flex-col w-1/6 items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-purple-600">Created by</h1>
            <h1 className="text-white text-2xl">{nft[0].attributes.Artist}</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-purple-600">Owned by</h1>
            <h1 className="text-white text-2xl">SilentCruzer</h1>
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
};

export default ViewNft;
