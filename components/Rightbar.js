import { useState, useEffect} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { client, recommendProfiles } from "./api";


const Rightbar = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetchProfiles();
  }, []);
  
  async function fetchProfiles() {
      try {
      const response = await client.query(recommendProfiles).toPromise()
      setProfiles(response.data.recommendedProfiles)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    }

  return (
    <>
    <div className="py-3">
    <div className="bg-neutral-800 rounded-2xl max-w-xs p-5 mt-5 font-bold overflow-hidden">
      <h1 className="text-white text-xl">Recommendations</h1>
      {profiles.map((profile, index) => {
          return(
            <>
            <div className="flec-col space-y-2 bg-zinc-800 rounded-2xl hover:cursor-pointer shadow-lg">
            <div className="flex justify-start items-center gap-5 mt-4 p-2 hover:cursor-pointer" onClick={() => window.open(e.link)}>
              {profile.picture ? (<><img
              src={profile.picture.original.url}
              className=" rounded-3xl object-cover h-14 w-14"
            /></>) : (<></>)}
              
            <div className="flex-col space-y-2">
              <div className="trendText text-sm text-white">{profile.handle}</div>
              <div className="trendText text-xs text-yellow-500"><span className="text-gray-400">Recommends </span>{profile.handle}</div>
            </div>
              
            </div>
            <div className="flex justify-end p-2">
              <AiOutlineArrowRight className="text-white" />
            </div>
            
            </div>
            </>
          )
      })}
    </div>

    </div>
    </>
  );
};

export default Rightbar;
