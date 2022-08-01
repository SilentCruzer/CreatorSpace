import React from "react";
import { FaEthereum } from "react-icons/fa";

const ViewNft = () => {
  return (
    <div className="p-10 px-20 flex flex-col items-center h-full">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 gap-10 justify-center">
          <h1 className="text-white text-5xl">Meta Eagle 5629</h1>
          <h1 className=" text-purple-600 text-xl">Gallyverse collection</h1>
          <h1 className="text-white text-lg tracking-wider">
            Galyverse is the brainchild of 3D artist and digital sculptor Gal
            Yosef.
          </h1>
          <div className="flex flex-col bg-neutral-800 w-fit p-4 rounded-lg gap-2">
            <h1 className="text-white">Current Price</h1>
            <div className="flex gap-2 items-center">
              <FaEthereum className="text-white text-2xl"/>
            <h1 className="text-white text-2xl font-semibold">0.025</h1>
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
            src="https://lh3.googleusercontent.com/PBMXnwcEPBsiHAQChYNL6FMfSmdnu9RPyLu1YO9zr2Mz4ZjadN2213MecU28Iy0RihHZhZ6gEkcAY7uAdBkkLv7VbIyxB8Kri1sVAg=w600"
          />
        </div>
        <div className="flex flex-col w-1/6 items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-purple-600">Created by</h1>
            <h1 className="text-white text-2xl">Arthur</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-purple-600">Owned by</h1>
            <h1 className="text-white text-2xl">SilentCruzer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNft;
