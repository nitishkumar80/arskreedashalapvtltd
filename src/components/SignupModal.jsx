import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const SignupModal = ({ isOpen, onRequestClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Logic to send OTP
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Logic to verify OTP
    setOtpVerified(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Logic to handle signup
  };

  return (
    <>
      <style jsx>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 500px;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .close-button {
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Signup"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Register</h2>
          <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700 close-button">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="signup-name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="signup-name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="signup-email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="signup-phone" className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="signup-phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
         
          <div className="mb-4">
            <button
              type="button"
              className="bg-brandPrimary text-white py-2 px-4 rounded-md"
              onClick={handleSendOtp}
              disabled={otpSent}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>
          {otpSent && (
            <div className="mb-4">
              <label htmlFor="signup-otp" className="block text-sm font-medium mb-1">OTP</label>
              <input
                type="text"
                id="signup-otp"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="bg-brandPrimary text-white py-2 px-4 rounded-md mt-2"
                onClick={handleVerifyOtp}
                disabled={otpVerified}
              >
                {otpVerified ? "OTP Verified" : "Verify OTP"}
              </button>
            </div>
          )}
           <div className="mb-4">
            <label htmlFor="signup-role" className="block text-sm font-medium mb-1">Role</label>
            <select id="signup-role" className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select Role</option>
              <option value="champ">Champ</option>
              <option value="coach">Coach</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="signup-password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-brandPrimary text-white py-2 px-4 rounded-md" disabled={!otpVerified}>Signup</button>
        </form>
      </Modal>
    </>
  );
};

export default SignupModal;
