import React, { useState } from 'react';
import { motion } from 'framer-motion';
import admissionImage from '../assets/admission.png'; // Ensure the correct path for your image

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const formMotion = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    experience: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
  };

  return (
    <div className="py-12 px-4 lg:px-14 max-w-screen-2xl mx-auto" id="admission">
      {/* Introduction */}
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-4xl font-semibold text-neutralDGrey mb-4"
        >
          Player Admission Form
        </motion.h2>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-sm text-neutralGrey"
        >
          Apply to join our sports program! Fill out the form below to submit your application.
        </motion.p>
      </div>

      {/* Form and Image Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Section */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="show"
          className="lg:w-1/2"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutralDGrey mb-4">
              Apply Now
            </h2>
            <p className="text-sm text-neutralGrey mb-8">
              Complete the form to apply for our sports program. We will review your application and get back to you shortly.
            </p>
          </div>

          <motion.form
            variants={formMotion}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-1">
                Sport
              </label>
              <input
                type="text"
                id="sport"
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Previous Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brandPrimary text-white py-2 px-4 rounded-md hover:bg-brandPrimaryDark transition duration-300"
            >
              Submit Application
            </button>
          </motion.form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 flex items-center justify-center"
        >
          <img
            src={admissionImage}
            alt="Admission"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ backgroundColor: 'transparent' }} // Ensures background is transparent
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Admission;
