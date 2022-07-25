import React from 'react'
import { TextArea, Icon } from 'web3uikit';
import { defaultImgs } from '../../constants/defaultImgs';

const Space = () => {
  return (
      <div>
        <div className=" min-w-max p-5 bg-gray-800 sticky text-white font-bold">Home</div>
        <div>
          <div className="flex justify-between border border-gray-700 p-5">
            <img src={defaultImgs[0]} className="rounded-full w-12 h-12"></img>
            <div className='w-5/6'>
              <TextArea
              className="bg-transparent"
              label=""
              name="tweetTxtArea"
              value="GM World"
              type="text"
              width='95%'
              ></TextArea>
              <div className=" flex justify-between items-center ">
                <div className='rounded-full p-2'>
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                <div className=" bg-blue-500 p-2 rounded-full text-white font-semibold justify-center hover:cursor-pointer">Tweet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Space;
