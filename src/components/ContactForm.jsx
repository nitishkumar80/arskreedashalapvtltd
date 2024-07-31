// src/components/ContactForm.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; // Adjust path if needed

const ContactForm = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-lg mx-auto my-12'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className='bg-white p-8 shadow-lg rounded-md'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
            <input
              type='text'
              id='name'
              className='w-full p-2 border rounded-md'
              placeholder='Your Name'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
            <input
              type='email'
              id='email'
              className='w-full p-2 border rounded-md'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
            <textarea
              id='message'
              rows='4'
              className='w-full p-2 border rounded-md'
              placeholder='Your Message'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors'
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
