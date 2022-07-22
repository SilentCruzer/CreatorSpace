import Link from "next/link";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

function Collections() {
  const { Moralis, isInitialized } = useMoralis();
  const [allCollections, setAllCollection] = useState([]);
  const data = {};

  const getCollections = async () => {
    const dbNFTs = Moralis.Object.extend("Collections");
    const query = new Moralis.Query(dbNFTs);
    const collectionDB = await query.find();
    for (const item in collectionDB) {
        if(data[collectionDB[item].attributes.collectionName] != undefined){
                data[collectionDB[item].attributes.collectionName].push(collectionDB[item].attributes);
        } else{
            data[collectionDB[item].attributes.collectionName] = new Array(collectionDB[item].attributes);
        }
      
    }
    setAllCollection(data);
  };

  useEffect(() => {
    if (isInitialized) {
      getCollections();
    }
  }, [isInitialized]);

  console.log(allCollections)
  return (
    <div className="py-12 px-36">
      <h1 className="text-4xl pb-10">Collections</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(allCollections).map((collectionName, index) => (
          <Link
            href={{
              pathname: `/collection/${collectionName}`,
              query: { metadata:JSON.stringify(allCollections[collectionName])},
            }}
            as={`/collection/${collectionName}`}
            key={index}
          >
            <a className="block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-400">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {collectionName}
              </h5>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Collections;
