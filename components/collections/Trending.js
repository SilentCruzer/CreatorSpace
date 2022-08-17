import Link from "next/link";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";


const Trending = () => {
  const { Moralis } =useMoralis();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData(){
      const dbArtist = Moralis.Object.extend("Artists");
    const query = new Moralis.Query(dbArtist);
    query.withCount();
    const result = await query.find();
    setData(result.results)
  }
  fetchData();
    
  }, []);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 gap-16 pb-10 pt-5">
      { data !=undefined ? (data.map((item,index) => (
          <Link key={index} href={`/collection/${item.attributes.username}`} passHref>
          <div className="h-96 rounded-3xl shadow-2xl hover:shadow-neutral-800 relative hover:cursor-pointer">
            <img src={item.attributes.bannerImage} className="w-full h-full rounded-3xl object-cover filter contrast-125"></img>
          <div className="flex flex-col justify-end h-full w-full p-10 gap-2 absolute bottom-0">       
            <h1 className="text-white text-2xl font-bold">{item.attributes.genre}</h1>
            <div className="flex gap-2  h-1/6">
              <img src={item.attributes.profilePic} className=" rounded-full w-1/4 object-cover"></img>
              <h1 className="text-white text-lg self-center">{item.attributes.username}</h1>
            </div>
          </div>
        </div>
          </Link>
        
      )) ) : <></>}
    </div>
  );
};

export default Trending;
