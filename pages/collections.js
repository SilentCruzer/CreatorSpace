import Link from "next/link";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Banner from "../components/collections/Banner";
import Trending from "../components/collections/Trending";

function Collections() {
  const { Moralis, isInitialized } = useMoralis();
  const [allCollections, setAllCollection] = useState([]);
  const data = {};

  const getCollections = async () => {
    const dbNFTs = Moralis.Object.extend("Collections");
    const query = new Moralis.Query(dbNFTs);
    const collectionDB = await query.find();
    for (const item in collectionDB) {
      if (data[collectionDB[item].attributes.collectionName] != undefined) {
        data[collectionDB[item].attributes.collectionName].push(
          collectionDB[item].attributes
        );
      } else {
        data[collectionDB[item].attributes.collectionName] = new Array(
          collectionDB[item].attributes
        );
      }
    }
    setAllCollection(data);
  };

  useEffect(() => {
    if (isInitialized) {
      getCollections();
    }
  }, [isInitialized]);

  return (
    <div className="h-full flex flex-col gap-2 px-16">
      <Banner />
        <ul className="flex flex-wrap gap-4 text-lg font-medium text-center text-gray-500 dark:text-gray-400 items-center">
          <li className="mr-2">
            <h1
              className="inline-block  text-white font-semibold text-3xl rounded-lg"
            >
              Trending
            </h1>
          </li>
          <li className="mr-2">
            <h1
              className="inline-block rounded-lg hover:text-gray-900 text-2xl hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Recently Listed
            </h1>
          </li>
        </ul>
      <Trending />
    </div>
  );
}

export default Collections;
