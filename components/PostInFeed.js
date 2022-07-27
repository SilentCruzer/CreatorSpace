import { useState } from "react";
import { AiOutlineHeart, AiFillMessage, AiOutlineSend, AiOutlineMessage } from "react-icons/ai";
import { Icon } from "web3uikit";
import golf from "../images/golf.png";
import { defaultImgs } from '../constants/defaultImgs';
import Image from "next/image";

const PostInFeed = () => {
  const [tweetArr, setTweetArr] = useState();

  return (
    <div className=" flex-col bg-neutral-800 rounded-2xl p-5 py-7 space-y-2">
      <div className="flex gap-5 justify-between">
        <div className="flex gap-3">
          <img
              src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
              className=" rounded-3xl border-solid border-black border-2 -mt-3 h-16 w-16 object-cover"
            />

            <div className=" flex-col gap-2">
              <h1 className="text-sm text-gray-500">
                @Muhadrehh
              </h1>

              <h1 className=" text-white">
                Muhadreh Kumbirai . <span className=" text-yellow-600"> 1 hr ago</span>
              </h1>

            </div>
        </div>
      
            <div className=" items-end text-white">...</div>
      </div>
      <h1 className="text-white pl-2">Had a Blast performing live music! Thank you @dj.and.dj for inviting me. Heard his new album the other day and it was sick, I just keep on recomending it to others</h1>

      <img
              src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
              className=" rounded-3xl object-cover"
            />
      <div className="flex justify-between">
        <div className="flex space-x-5 items-center">
          <AiOutlineHeart className="w-6 h-6 text-white" />
          <AiOutlineMessage className="w-6 h-6 text-white" />
          <AiOutlineSend className="w-6 h-6 text-white" />
        </div>
        <div className="rounded-xl bg-violet-600 p-2 text-white font-bold"> View </div>
      </div>
    </div>
  );
};

export default PostInFeed;
