import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const LoginModal = ({ isOpen, onRequestClose }) => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to handle login
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
          background: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px); /* Optional: Adds a blur effect to the background */
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .close-button {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .otp-section, .login-section {
          display: flex;
          flex-direction: column;
        }
      `}</style>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Login</h2>
          <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700 close-button">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="login-contact" className="block text-sm font-medium mb-1">Email or Phone Number</label>
            <input
              type="text"
              id="login-contact"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          {!otpSent && (
            <div className="mb-4">
              <button
                type="button"
                className="bg-brandPrimary text-white py-2 px-4 rounded-md"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
          )}

          {otpSent && (
            <div className="otp-section mb-4">
              <label htmlFor="login-otp" className="block text-sm font-medium mb-1">OTP</label>
              <input
                type="text"
                id="login-otp"
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
            <label htmlFor="login-role" className="block text-sm font-medium mb-1">Role</label>
            <select id="login-role" className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select Role</option>
              <option value="guest">Guest</option>
              <option value="champ">Champ</option>
              <option value="coach">Coach</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="bg-brandPrimary text-white py-2 px-4 rounded-md"
            disabled={!otpVerified}
          >
            Login
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LoginModal;
