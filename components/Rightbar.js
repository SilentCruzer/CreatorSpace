import React from "react";
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";
import Image from "next/image";


const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "Learn how to build a Web3 FPS game using unity...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
    },
    {
      img: netflix,
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: academy,
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: js,
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: youtube,
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];

  return (
    <>
    <div className="p-6">
      <Input
        label="Search Twitter"
        name ="Search Twitter"
        prefixIcon="search"
        labelBgColor="#1f2937" 
        >
      </Input>

    <div className="bg-gray-700 rounded-2xl max-w-xs p-5 mt-2 font-bold overflow-hidden">
      <h1 className="text-white">News For You</h1>
      {trends.map((e) => {
          return(
            <>
            <div className="flex justify-start items-center gap-5 mt-4 p-2 hover:cursor-pointer hover:bg-gray-400" onClick={() => window.open(e.link)}>
                <Image  width={150} height={100} src={e.img} className="rounded-lg"></Image>
              <div className="trendText text-sm text-white">{e.text}</div>
            </div>
            </>
          )
      })}
    </div>

    </div>
    </>
  );
};

export default Rightbar;
