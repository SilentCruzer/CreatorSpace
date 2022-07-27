import React from "react";
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";


const Rightbar = () => {
  const trends = [
    {
      text: "Votaliy Akterskiy",
      des: "@T.xtd' albums",
      img: "https://www.rollingstone.com/wp-content/uploads/2022/02/5-Tips-for-Any-Artist-Looking-to-Release-New-Music.png",
    },
    {
      text: "Maksym Karafizi",
      des: "@loordOman",
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      text: "Evgeniy Alexandrov",
      des: "@manOwar albums",
      img: "https://media.istockphoto.com/photos/male-singer-singing-in-recording-studio-picture-id1307465039?b=1&k=20&m=1307465039&s=170667a&w=0&h=AoSO6OhrOOj-ZD8_JHFnyOo2zLqDy8uE4sOBh8DyDnk=",
    },
    {
      text: "Rosaline Kumbirai",
      des: "@simleEgh",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabkDodpPhjuZoRyKuYjhhfqktp4Aj9Ko3NGF_Jzr9h998wlsI9PZ7_sz1V35wQo8gNTk&usqp=CAU",
    },
    {
      text: "Arthur Marston",
      des: "@sdkO99n",
      img: "https://s2982.pcdn.co/wp-content/uploads/2022/02/rapper-musician-performer-MC-featured.jpg.optimal.jpg",
    },
  ];

  return (
    <>
    <div className="py-3">
    <div className="bg-neutral-800 rounded-2xl max-w-xs p-5 mt-5 font-bold overflow-hidden">
      <h1 className="text-white text-xl">Recommendations</h1>
      {trends.map((e) => {
          return(
            <>
            <div className="flec-col space-y-2 bg-zinc-800 rounded-2xl hover:cursor-pointer shadow-lg">
            <div className="flex justify-start items-center gap-5 mt-4 p-2 hover:cursor-pointer" onClick={() => window.open(e.link)}>
              <img
              src={e.img}
              className=" rounded-3xl object-cover h-14 w-14"
            />
            <div className="flex-col space-y-2">
              <div className="trendText text-sm text-white">{e.text}</div>
              <div className="trendText text-xs text-yellow-500"><span className="text-gray-400">Recommends </span>{e.des}</div>
            </div>
              
            </div>
            <div className="flex justify-end p-2">
              <AiOutlineArrowRight className="text-white" />
            </div>
            
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
