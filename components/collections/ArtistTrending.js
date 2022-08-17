import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const tmpData = [
  {
    name: "Meta Eagle 5629",
    tokenId: "#5629",
    price: "0.025",
    image:
      "https://lh3.googleusercontent.com/PBMXnwcEPBsiHAQChYNL6FMfSmdnu9RPyLu1YO9zr2Mz4ZjadN2213MecU28Iy0RihHZhZ6gEkcAY7uAdBkkLv7VbIyxB8Kri1sVAg=w600",
  },
  {
    name: "Meta Eagle 9231",
    tokenId: "#9231",
    price: "0.019",
    image:
      "https://lh3.googleusercontent.com/CIisf8ARh7G_xvjGtdgV6kDJmCuGWyakqcbb4ytbahan6enGS-vn-VhLEd1l8jESd_De6qf4UBAkolST8L5arvy0SQbAekDG4uxwtQ=w600",
  },
  {
    name: "Meta Eagle 4382",
    tokenId: "#4382",
    price: "0.032",
    image:
      "https://lh3.googleusercontent.com/yRAkUX1HmcV1ZA8ClOWWlc0yV4luliZqUJI8dLwFylJMGbae6KhEDbOIQwGGeEz_C5u0cO6Eszla2TOG6VRMAokT8y4EOEKTKzoqKg=w600",
  },
  {
    name: "Meta Eagle 9256",
    tokenId: "#9256",
    price: "0.015",
    image:
      "https://lh3.googleusercontent.com/rZZPv5__ffYJSmlapXQvSU0YrXSAWhSsA5UeuW9kjjJKYx0vOMZHWcUt2K8uK4N5l9H3UYXfjWPqDqG_w-1W704JC_72aV0xKybm9A=w600",
  },
  {
    name: "Meta Eagle 7658",
    tokenId: "#7658",
    price: "0.023",
    image:
      "https://lh3.googleusercontent.com/GL8EXFemg0NpVwBqB1mFRuIQs8z4g6QrPAbjO8j9a7Nk6wdLiPwAkUU_M1x5Wre_6XCCc17B5Pel8NNAsc5ALIv2e61IctQJ0eRx6g=w600",
  },

  {
    name: "Meta Eagle 1160",
    tokenId: "#1160",
    price: "0.049",
    image:
      "https://lh3.googleusercontent.com/jAZVSofgE_DbYJ47uqk7O_i1XmNvKpxSj4Vn25T1O94kiXrgxCUsYTpAxBtkxWsNvEgYrPlRgpA5Rm_WVSeZAhjFsAQCPMRvla7D_g4=w600",
  },
  {
    name: "Meta Eagle 4589",
    tokenId: "#4589",
    price: "0.0525",
    image:
      "https://lh3.googleusercontent.com/dBda2YxRJ-nUM0D-BwA8-qUIxYBwlIrjq1VTyHLAC5UqG2eQmVRsKvUWZDGNSz5eTLhJKnkm4NZaXW7Ba9AWTmmkeNipkelFwBdBEA=w600",
  },
  {
    name: "Meta Eagle 1930",
    tokenId: "#1930",
    price: "0.06",
    image:
      "https://lh3.googleusercontent.com/mGnqLKFrbQ7wOSw4-N6j1SKO21IpJJ8NmVu376tk-bxgCGw4iho4m5h-GmxlS2IQR4gx47x-WOwIQus0TDgIyCN6PllM0YcNxAZO2Q=w600",
  },
  {
    name: "Meta Eagle 4528",
    tokenId: "#4528",
    price: "0.09",
    image:
      "https://lh3.googleusercontent.com/5PYwFwIQ56vtX-J63z7F1esA_mvRtZgStZ_zVKQa6nAs71QKm1dnNDYWA5aJU1FYmfnMwrGOQ3Th83b5oLtjHT28nAGs29aF3wT43A=w600",
  },
  {
    name: "Meta Eagle 4620",
    tokenId: "#4620",
    price: "0.33",
    image:
      "https://lh3.googleusercontent.com/wRu1u0yEByiv2Ckp19pOYva-wx3kxDiHQoWeyJFfmO6EuNkjQ1jD3CC16DvRN7Me1XtA9n2Ppar6VJ89dK1rZyqvbt2ueMlng14daQ=w600",
  },
];

const ArtistTrending = () => {
  const router = useRouter();
  const { Moralis } = useMoralis();
  const [artistId, setArtistId] = useState(router.query.collectionId);
  const [artistCollections, setArtistCollections] = useState();

  
  useEffect(() => {
    setArtistId(router.query.collectionId);
    async function fetchData() {
      if (artistId) {
        const dbNFTs = Moralis.Object.extend("Collections");
        const query = new Moralis.Query(dbNFTs);
        query.equalTo("Artist", artistId);
        const collectionDB = await query.find();
        if(collectionDB)
          setArtistCollections(collectionDB)
      }
    }
    fetchData();
  }, [Moralis.Object, Moralis.Query, artistId, router.query.collectionId]);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-16 pb-10 pt-5">
      { artistCollections && artistCollections.map((item, index) => (
        <Link key={index} href={`/collection/${index}`} passHref>
          <div className="max-w-sm bg-black rounded-3xl shadow-2xl hover:shadow-neutral-800 hover:cursor-pointer">
            <a href="#">
              <img
                className="rounded-t-lg rounded-t-3xl"
                src={item.attributes.image}
                alt=""
              />
            </a>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white text-sm">{item.attributes.nftName}</h1>
                  <h1 className="text-gray-500 text-sm">#{item.attributes.tokenId}</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-sm">ETH</h1>
                  <h1 className="text-gray-500 text-sm">{item.attributes.Price}</h1>
                </div>
              </div>
              <Link href={`/collection/${artistId}/nft/${item.attributes.tokenId}`} passHref>
                <div className=" text-white font-bold text-center border rounded-3xl border-gray-400 p-1 hover:bg-neutral-800 hover:shadow-inner">
                  View
                </div>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtistTrending;
