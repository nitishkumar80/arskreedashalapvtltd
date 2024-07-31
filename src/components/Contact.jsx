import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactImage from '../assets/contact.png'; // Ensure correct path

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="my-12" id="faq">
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12'>
        {/* Image Section */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="show"
          className='lg:w-1/2 flex items-center justify-center'
        >
          <img src={contactImage} alt="Contact Us" className='w-full h-auto object-cover rounded-lg shadow-lg' />
        </motion.div>

        {/* Form Section */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="show"
          className='lg:w-1/2 flex flex-col justify-center'
        >
          <div className='text-center mb-12'>
            <h2 className="text-4xl font-semibold text-neutralDGrey mb-4 animate__animated animate__fadeIn">
              Contact Us
            </h2>
            <p className="text-sm text-neutralGrey mb-8 animate__animated animate__fadeIn animate__delay-1s">
              We'd love to hear from you! Please fill out the form below to get in touch with us.
            </p>
          </div>

          <motion.form
            variants={fadeIn}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className='bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300'
          >
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md'
                required
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='6'
                className='w-full p-3 border border-gray-300 rounded-md'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-brandPrimary text-white py-3 px-6 rounded-md hover:bg-brandPrimaryDark transition-all duration-300'
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
