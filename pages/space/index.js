import React from 'react'
import Rightbar from '../../components/Rightbar';
import Sidebar from '../../components/Sidebar';

const Space = () => {
  return (
      <div className="flex justify-between bg-gray-800 h-screen">
        <div className="sticky border-r-2 border-gray-700 h-screen w-1/6">
          <Sidebar />
        </div>
            <div className="">
                Home
                Profile
                Settings

            </div>
        
        <div className=" sticky border-l-2 border-gray-700 h-screen w-1/4">
          <Rightbar />
        </div>
    </div>
    
  )
}

export default Space;
