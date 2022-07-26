import { useState } from "react";
import { Icon } from "web3uikit";
import golf from "../images/golf.png";
import { defaultImgs } from '../constants/defaultImgs';
import Image from "next/image";

const PostInFeed = () => {
  const [tweetArr, setTweetArr] = useState();

  return (
    <div>
      <>
        <div className=" min-w-full border-b-2 border-gray-700 text-white space-x-6 flex p-5">
          <img
            src={defaultImgs[0]}
            className="rounded-full w-12 h-12"
          ></img>
          <div className="flex justify-start flex-col gap-2 w-10/12">
            <div className="flex gap-2 font-semibold items-center">
              SilentCruzer
              <div className=" text-gray-500 font-normal">0x42...314 . 1h</div>
            </div>
            <div className=" flec flex-col justify-start gap-2">
                <h1>For personal projects: JavaScript or TypeScript</h1>
            </div>
            <div className=" mt-2 flex justify-start gap-36">
              <div className="flex justify-start gap-2 p-2 rounded-full hover:cursor-pointer hover:bg-cyan-400">
                <Icon fill="#757a7d" size={20} svg="messageCircle" />
              </div>
              <div className="flex justify-start gap-2 p-2 rounded-full hover:cursor-pointer hover:bg-cyan-400 text-gray-400">
                <Icon fill="#757a7d" size={20} svg="star" />
                12
              </div>
              <div className="flex justify-start gap-2 p-2 rounded-full hover:cursor-pointer hover:bg-cyan-400">
                <Icon fill="#757a7d" size={20} svg="matic" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PostInFeed;
