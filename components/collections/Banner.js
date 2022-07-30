import React from 'react'

const Banner = () => {
  return (
    <div className="h-3/4">
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-white font-bold text-5xl">
              Lauching
              <span className="text-violet-700"> Muhadreh Kumbirai&apos;s </span>
              <br />
              new album
            </h1>
            <h1 className="text-gray-400 text-xl text-left">
              Grab his follow nft before its release on July 18 to get exclusive
              access to his Space where he will showcase unreleased tunes and
              progress for his next album
            </h1>
            <div className=" bg-zinc-800 w-fit self-end p-2 text-lg rounded-full px-4 hover:cursor-pointer hover:bg-gray-400">
              <h1 className="text-white font-semibold">Check it out</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-5 px-10">
            <img src="https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg="
            className="rounded-3xl w-2/3 border p-1 border-gray-500"></img>
            <div className="flex justify-center gap-6 pt-4">
              <img
                src="https://us.123rf.com/450wm/rawpixel/rawpixel1901/rawpixel190101282/126213208-cd-case-layout-design-vector.jpg?ver=6"
                className=" h-3/5 w-1/2 rotate-6 rounded-xl"
              />
              <img
                src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2021/02/music-album-h-e1613595698579.jpg"
                className=" h-3/5 w-1/2 rotate rounded-xl"
              />
              <img
                src="https://us.123rf.com/450wm/rawpixel/rawpixel1901/rawpixel190101083/115280382-cd-case-layout-design-vector.jpg?ver=6"
                className=" h-3/5 w-1/2 -rotate-6 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Banner