import React from "react";
import { Input, Icon } from "web3uikit";
import PostInFeed from "../../components/PostInFeed";
import { defaultImgs } from "../../constants/defaultImgs";
import Stories from "../../components/Stories";
import {
  AiFillCalendar,
  AiFillVideoCamera,
  AiOutlineUnorderedList,
} from "react-icons/ai";

const Space = () => {
  return (
    <div className="py-10 flex-col gap-10 space-y-5">
      <h1 className="text-white text-xl font-semibold pb-2">Quick Access</h1>
      <Stories />
      <div className="flex space-x-2 bg-neutral-800 p-5 rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYXJ0aXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          className="rounded-full h-16 w-16"
        ></img>
        <div className="w-full">
          <textarea
            placeholder="GM World"
            type="text"
            className="w-full rounded-2xl bg-neutral-900 text-white p-3"
          ></textarea>
          <div className=" flex w-full justify-between items-center p-2">
            <div className="flex space-x-4">
              <div className="rounded-full p-2 px-3 bg-neutral-900 flex space-x-2">
                <Icon fill="#00a600" size={20} svg="image"></Icon>
                <h1 className="text-white">Image</h1>
              </div>

              <div className="rounded-full p-2 px-3 bg-neutral-900 flex space-x-2">
                <AiFillVideoCamera size={20} className=" text-cyan-500 pt-1" />
                <h1 className="text-white">Video</h1>
              </div>

              <div className="rounded-full p-2 px-3 bg-neutral-900 flex space-x-2">
                <AiOutlineUnorderedList
                  size={20}
                  className=" text-red-300 pt-1"
                />
                <h1 className="text-white">Polls</h1>
              </div>

              <div className="rounded-full p-2 px-3 bg-neutral-900 flex space-x-2">
                <AiFillCalendar size={20} className=" text-yellow-200 pt-1" />
                <h1 className="text-white">Schedule</h1>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <div className=" bg-violet-500 p-1 px-4 mt-1 rounded-full text-white font-semibold justify-center hover:cursor-pointer">
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostInFeed />
    </div>
  );
};

export default Space;
