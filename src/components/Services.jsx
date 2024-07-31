import React from "react";
import { motion } from "framer-motion";

import './Service.css'

const Services = () => {
  const sportsServices = [
    {
      id: 1,
      title: "Badminton",
      description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
      image: "https://img.freepik.com/free-vector/badminton-concept-illustration_114360-6977.jpg",
    },
    {
      id: 2,
      title: "Swimming",
      description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/000/526/438/small_2x/8si7_juh6_130430.jpg",
    },
    {
      id: 3,
      title: "Cricket",
      description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
      image: "https://example.com/cricket.jpg",
    },
    {
      id: 4,
      title: "Yoga",
      description: "A holistic practice combining physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being.",
      image: "https://example.com/yoga.jpg",
    },
    {
      id: 5,
      title: "Gym",
      description: "A facility equipped for various forms of exercise, focusing on strength training, cardiovascular workouts, and overall fitness.",
      image: "https://example.com/gym.jpg",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="services">
      {/* Sports service cards */}
      <div className="mt-20 text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Explore Our Sports Services
        </h2>
        <p className="text-neutralGrey">
          We offer a wide range of sports services to enhance your skills and performance.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {sportsServices.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt={service.title} className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
