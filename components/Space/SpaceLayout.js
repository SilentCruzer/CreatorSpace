import { useState, useEffect} from "react";
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import { client, recommendProfiles } from '../api'
import { useSelector, useDispatch } from 'react-redux';
import { update } from "../../redux/features/profileSlice";

const SpaceLayout = ({Component, pageProps}) => {
  useEffect(() => {
    fetchProfiles();
  }, []);

  const profiles = useSelector((state) => state.profile.value)
  const dispatch = useDispatch()
  
  async function fetchProfiles() {
      try {
      const response = await client.query(recommendProfiles).toPromise()
      dispatch(update(response.data.recommendedProfiles))
    } catch (error) {
      console.log(error)
    }
    }
  return (
    <div className='px-28 bg-neutral-900'>
          <div className="flex justify-between bg-neutral-900 h-full">
        <div className="sticky w-1/3 md:1/3 border-l-2 border-neutral-800 mr-5">
          <Sidebar />
        </div>
            <div className="w-full h-full">
            <Component {...pageProps} profile={profiles} />
            </div>
        <div className=" sticky w-1/3 ml-5 pr-4 border-r-2 border-neutral-800">
          <Rightbar profiles={profiles} />
        </div>
    </div>
    </div>
  )
}

export default SpaceLayout