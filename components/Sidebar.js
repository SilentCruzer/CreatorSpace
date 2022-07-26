import React, { useState, useEffect } from "react";
import { Icon } from "web3uikit";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../constants/defaultImgs";
import canoe from "../images/canoe.png";
import Image from "next/image";

const Sidebar = () => {
  const { Moralis, isInitialized } = useMoralis();
  const [user, setUser] = useState();

  useEffect(() => {
    if (isInitialized) {
      setUser(Moralis.User.current());
    }
  }, [isInitialized]);

  return (
    <div className="h-full min-h-screen flex flex-col justify-start px-5 py-10 gap-6">
      <div className="rounded-3xl overflow-hidden shadow-xl  my- bg-neutral-800 relative">
        <div className="flex justify-center text-gray-300 text-sm py-1 font-semibold bg-black px-5">
          Featured Artist
        </div>
        <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />

        <div className="flex justify-center -mt-8">
          <img
            src="https://media.istockphoto.com/photos/young-hipster-africanamerican-rapper-recording-songs-in-music-studio-picture-id994318634?k=20&m=994318634&s=612x612&w=0&h=pIXtdEFdOAMBuy9KJFXnvafNFOfFx0aRyKScP700IOA="
            className=" rounded-3xl border-solid border-gray-700 border-2 -mt-3 h-32 w-32 object-cover"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-white text-xl bold font-sans">@leonard</h3>
          <p className="mt-2 font-sans font-light text-white">
            Heard him in a d&d podcast, really inspired me to work on my track
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-white pb-2">Trending</h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Cover
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Demo
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Digital
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Indie
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Label
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            EP
          </div>
          <div className="bg-neutral-800 text-lg px-2 py-1 rounded-full text-white text-center shadow-xl">
            Rock
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex-row">
          <h1 className="text-2xl text-white">Artists</h1>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2">
            <img
              src="https://media.istockphoto.com/photos/young-africanamerican-female-singer-recording-song-in-the-music-picture-id1284321181?k=20&m=1284321181&s=612x612&w=0&h=CMIiLqTqfTLviAg-KfNfDD81b78bgs65zwoI8bjdnBQ="
              className=" rounded-3xl border-solid border-gray-700 border-2 -mt-3 h-16 w-16 object-cover"
            />
            <div className="flex flex-row justify-between  w-full">
              <div className="flex-col">
                <h1 className=" text-white text-xl">Dexter</h1>
                <h1 className="text-sm text-gray-400">3 albums . 240 NFTs</h1>
              </div>
              <h1 className="text-sm text-gray-400 border border-gray-400 h-fit rounded p-1 px-2 inline-block align-middle">X</h1>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
              className=" rounded-3xl border-solid border-gray-700 border-2 -mt-3 h-16 w-16 object-cover"
            />
            <div className="flex flex-row justify-between  w-full">
              <div className="flex-col">
                <h1 className=" text-white text-xl">Dexter</h1>
                <h1 className="text-sm text-gray-400">3 albums . 240 NFTs</h1>
              </div>
              <h1 className="text-sm text-gray-400 border border-gray-400 h-fit rounded p-1 px-2 inline-block align-middle">X</h1>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
              className=" rounded-3xl border-solid border-gray-700 border-2 -mt-3 h-16 w-16 object-cover"
            />
            <div className="flex flex-row justify-between  w-full">
              <div className="flex-col">
                <h1 className=" text-white text-xl">Dexter</h1>
                <h1 className="text-sm text-gray-400">3 albums . 240 NFTs</h1>
              </div>
              <h1 className="text-sm text-gray-400 border border-gray-400 h-fit rounded p-1 px-2 inline-block align-middle">X</h1>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
              className=" rounded-3xl border-solid border-gray-700 border-2 -mt-3 h-16 w-16 object-cover"
            />
            <div className="flex flex-row justify-between  w-full">
              <div className="flex-col">
                <h1 className=" text-white text-xl">Dexter</h1>
                <h1 className="text-sm text-gray-400">3 albums . 240 NFTs</h1>
              </div>
              <h1 className="text-sm text-gray-400 border border-gray-400 h-fit rounded p-1 px-2 inline-block align-middle">X</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
