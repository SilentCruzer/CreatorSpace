import Link from "next/link";
import React from "react";

const tmpData = [
  {
    genre: "Indie",
    name: "Arthur",
    url: "https://s2982.pcdn.co/wp-content/uploads/2022/02/rapper-musician-performer-MC-featured.jpg.optimal.jpg",
    banner: "https://i.pinimg.com/originals/95/5b/9a/955b9a2b9ed0c2b78d832ed98fa65ac8.png"
  },
  {
    genre: "EDM",
    name: "Synth",
    url: "https://media.istockphoto.com/vectors/red-sound-wave-equalizer-vector-design-vector-id1093770298?k=20&m=1093770298&s=612x612&w=0&h=V9_2cEGNRbPc4yDEWJHCBct-zYGD3VA23PO-oXQ0OUM=",
    banner: "https://www.myfreewalls.com/public/uploads/preview/hd-dark-abstract-gaming-color-mobile-wallpaper-11631140632fnxjwka8sf.jpg"
  },
  {
    genre: "Rap",
    name: "Votaliy",
    url: "https://www.rollingstone.com/wp-content/uploads/2022/02/5-Tips-for-Any-Artist-Looking-to-Release-New-Music.png",
    banner: "https://www.teahub.io/photos/full/8-87389_witcher-dark-background-minimal-4k-ultra-hd-mobile.jpg"
  },
  {
    genre: "Party/Pop",
    name: "Amanda",
    url: "https://iso.500px.com/wp-content/uploads/2016/02/william_selviz_festival_photography_2016_11-1500x1000.jpg",
    banner: "https://c0.wallpaperflare.com/preview/268/1023/732/light-electricity-blue-dark.jpg"
  },
  {
    genre: "Accoustic",
    name: "Muhareh",
    url: "https://media.istockphoto.com/photos/he-has-some-amazing-musical-talents-picture-id1189316258?k=20&m=1189316258&s=612x612&w=0&h=itGyYzAT5H_JF7FTfc8ogvUCaSxjbXX9B0AwMYHiNxg=",
    banner: "https://www.teahub.io/photos/full/0-3033_amoled-dark-wallpapers-hd-phone-dark-wallpapers-for.jpg"
  },
];

const Trending = () => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 gap-16 pb-10 pt-5">
      {tmpData.map((item,index) => (
          <Link key={index} href={`/collection/${index}`} passHref>
          <div className="h-96 rounded-3xl shadow-2xl hover:shadow-neutral-800 relative hover:cursor-pointer">
            <img src={item.banner} className="w-full h-full rounded-3xl object-cover filter contrast-125"></img>
          <div className="flex flex-col justify-end h-full w-full p-10 gap-2 absolute bottom-0">       
            <h1 className="text-white text-2xl font-bold">{item.genre}</h1>
            <div className="flex gap-2  h-1/6">
              <img src={item.url} className=" rounded-full w-1/4 object-cover"></img>
              <h1 className="text-white text-lg self-center">{item.name}</h1>
            </div>
          </div>
        </div>
          </Link>
        
      ))}
    </div>
  );
};

export default Trending;
