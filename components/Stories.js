import React from "react";
import { useSelector } from "react-redux";

const Stories = () => {
  const profiles = useSelector((state) => state.profile.value);
  const placeholderImage = "https://www.w3schools.com/howto/img_avatar.png"
  return (
    <div className="flex gap-10">
      {
        profiles.slice(11,19).map((item,index) => (
          <div className="flex-col justify-center space-y-2" key={index}>
          <img
            src={ item.picture ? item.picture.original.url : placeholderImage}
            className=" rounded-3xl border-solid border-yellow-300 border-2 -mt-3 2xl:h-24 2xl:w-24 xl:h-16 xl:w-16 object-cover"
          />
        </div>
        
      ))
      }
    </div>
  );
};

export default Stories;
