import React, { useState, useEffect } from "react";
import { Icon } from "web3uikit";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../constants/defaultImgs";

const Sidebar = () => {

  const { Moralis, isInitialized } = useMoralis();
  const [user,setUser] = useState() ;

  useEffect(() => {
    if(isInitialized){
      setUser(Moralis.User.current());
    }
  }, [isInitialized]);

  const menuItem = "flex justify-start gap-2 font-semibold text-sm p-2 mr-5 m-1 rounded-full text-white hover:bg-gray-400 hover:cursor-pointer"

  return (
    <div className="h-full flex justify-center">
      <div className="justify-center flex flex-col h-80 items-end">
        <div className="flex flex-col">
          <div className="flex pb-10  gap-14 justify-start">
            <Icon fill="#ffffff" size={33} svg="twitter" />
          </div>

          <Link href="/space" passHref className="link">
            <div className={menuItem}>
              <Icon fill="#ffffff" size={33} svg="list" />
              <div className="pt-2 text-white">Home</div>
            </div>
          </Link>

          <Link  href="/space/profile" passHref  className="link">
            <div className={menuItem}>
              <Icon fill="#ffffff" size={33} svg="user" />
              <div className="pt-2">Profile</div>
            </div>
          </Link>

          <Link  href="/space/settings" passHref  className="link">
            <div className={menuItem}>
              <Icon fill="#ffffff" size={33} svg="cog" />
              <div className="pt-2">Settings</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;