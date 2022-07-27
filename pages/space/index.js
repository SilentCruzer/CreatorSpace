import React from 'react'
import { Input, Icon } from 'web3uikit';
import PostInFeed from '../../components/PostInFeed';
import { defaultImgs } from '../../constants/defaultImgs';
import Stories from '../../components/Stories';

const Space = () => {
  return (
      <div className="py-10 flex-col gap-10 space-y-5">
        <Stories />
          <div className="flex space-x-2 bg-neutral-800 p-5 rounded-3xl">
            <img src={defaultImgs[0]} className="rounded-full w-12 h-12"></img>
            <div className='w-5/6'>
              <textarea
              placeholder="GM World"
              type="text"
              className=' w-full block p-2.5 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              ></textarea>
              <div className=" flex justify-between items-center p-2">
                <div className='rounded-full p-2'>
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
                </div>
                <div className="flex justify-end gap-3">
                <div className=" bg-violet-500 p-1 px-4 mt-1 rounded-full text-white font-semibold justify-center hover:cursor-pointer">Post</div>
                </div>
              </div>
            </div>
          </div>
          <PostInFeed />
      </div>
  )
}

export default Space;
