import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper";

const ArtistBanner = () => {
    const tmpData = [
        {
            name: "Astroboy",
            description: "New outfit featuring a romantic eagle in his quest for love in space ",
            image: "https://lh3.googleusercontent.com/a0s3Zhm7Fxb9ldprg4Aw7yI70SNo3ayCdu0qyhGUx607j6tcjMkpl1mpZnjI2UXIB781LhmiKTyJRPU9ZwjU6yLTbljdZg39gd7Ikw=w600"
        },
        {
            name: "Sorcerer Yeager",
            description: "The greatest among all wizards and eyesight so sharp that he can see into the future ",
            image: "https://lh3.googleusercontent.com/4kkK2aghCl9bBJPsql1lQN9zQzRoaMoNSoywd_Cr7q5YGqhrYlwwM6LJp-UZjKDS6YpWejyR9tvSQ3Yx-yNn_4YRUHBRAcp_HJiOKA=w600"
        },
        {
            name: "Lt. Smoker",
            description: "Survived in the toughest of war and even the greatest weapons couldn't bring him down ",
            image: "https://lh3.googleusercontent.com/jkH4z3b9JQRRVS0MU0qPbqlGm-R3X3tCufZ4L7eSIg4qPHzro53ywKqC41VHoLGYkdHJ-UNVfEwtexRTQmBVT1n1zs5xPfk8QhZQZg=w600"
        },

    ]
  return (
    <div className="flex flex-col gap-2">
        <h1 className='text-violet-700 font-semibold text-center'>New drop!!</h1>
        <h1 className='text-white text-4xl font-semibold text-center pb-10'>Fantasy wars<br />collection</h1>
        <Swiper
        effect={"coverflow"}
        initialSlide={"1"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="object-fit w-4/5"
      >
          {tmpData.map((item, index) => (<SwiperSlide key={index}>
          <div className="rounded-3xl shadow-2xl hover:shadow-neutral-800 relative hover:cursor-pointer">
            <img src={item.image} className="rounded-3xl object-cover filter contrast-125"></img>
          <div className="flex flex-col justify-end h-full w-full p-10 gap-2 absolute bottom-0 ">      
            <h1 className="text-white 2xl:text-2xl text-lg font-bold">{item.name}</h1>
            <div className="flex gap-2 h-1/6 filter">
              <h1 className="text-white 2xl:text-lg text-sm self-center backdrop-blur-sm rounded-lg">{item.description}</h1>
            </div>
          </div>
          </div>
        </SwiperSlide>))}
        
      </Swiper>
    </div>
  )
}

export default ArtistBanner