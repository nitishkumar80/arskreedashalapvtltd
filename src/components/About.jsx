import React from "react";
import aboutImg from "../assets/about.png";
import founder1 from "../assets/icons/Founder1.png";
import founder2 from "../assets/icons/Founder2.png";
import founder3 from "../assets/icons/Founder3.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-full md:w-1/2"
          >
            <img src={aboutImg} alt="" className="w-full"/>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-1/2 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
              About ARS Kreedashala Pvt Ltd
            </h2>
            <p className="text-sm text-neutralGrey mb-8">
              ARS Kreedashala Pvt Ltd is an Indian sports education organization founded by sports enthusiasts with a shared vision: integrating sports into every child's education. They have built a structured Sports and Physical Education (P.E) curriculum based on the recognized NASPE Standards (National Association for Sports & Physical Education). This curriculum aims to develop a healthier and fitter generation through high-quality sports education.
              <br /><br />
              Our mission is to provide every grassroots player with the opportunity to enhance their skills in the early stages of their sports career. We have identified a gap in the market where basic skill development and static training are not being addressed by sports schools or academies. Our solution is to offer personalized training with the help of IT support to ensure every athlete reaches their full potential. Our ultimate goal is to create a significant impact in the sports industry by winning the maximum number of medals in the Olympic Games.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* founder images */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 text-center">
          Our Founders
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-full md:w-1/3"
          >
            <img src={founder1} alt="Founder 1" className="w-full rounded-lg shadow-lg"/>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-full md:w-1/3"
          >
            <img src={founder2} alt="Founder 2" className="w-full rounded-lg shadow-lg"/>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-full md:w-1/3"
          >
            <img src={founder3} alt="Founder 3" className="w-full rounded-lg shadow-lg"/>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
              Helping a local <br /> <span className="text-brandPrimary">business reinvent itself</span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex flex-col sm:flex-row sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/group.png" alt="Members" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/clubs.png" alt="Clubs" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/click.png" alt="Event Bookings" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/payments.png" alt="Payments" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
