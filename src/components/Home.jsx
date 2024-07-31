import React from "react";
import { Carousel } from "flowbite-react";
import './Home.css'
import banner from "../assets/green.png";
import banner2 from "../assets/Cricket.png";
import banner3 from "../assets/Dumbbell.png";
import banner4 from "../assets/Tennis.png";
import banner5 from "../assets/Sport.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div className="image-container">
              <img src={banner} alt="" className="carousel-image"/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2 text-container">
              <h1 className="text-5xl mb-4     font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                The harder the battle <span className="text-brandPrimary leading-snug">the sweeter the victory</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Push your limits and break through barriers. Greatness awaits you.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div className="image-container">
              <img src={banner2} alt="" className="carousel-image"/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2 text-container">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
              Success is no accident <span className="text-brandPrimary leading-snug">It is hard work perseverance and learning</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Train like a champion, win like a champion.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div className="image-container">
              <img src={banner4} alt="" className="carousel-image"/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2 text-container">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
              It's not whether you get knocked down <span className="text-brandPrimary leading-snug">it's whether you get up</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Rise stronger with every fall.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div className="image-container">
              <img src={banner3} alt="" className="carousel-image"/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2 text-container">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Winners are not people who never fail, <span className="text-brandPrimary leading-snug">but people who never quit</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Keep pushing forward, no matter the odds.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div className="image-container">
              <img src={banner5} alt="" className="carousel-image"/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2 text-container">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Don't watch the clock <span className="text-brandPrimary leading-snug">do what it does. Keep going</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">Every second counts. Make the most of it.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
