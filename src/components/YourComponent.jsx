import React, { useState } from 'react';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

const YourComponent = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closeSignupModal = () => setIsSignupOpen(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const closeLoginModal = () => setIsLoginOpen(false);

  return (
    <div>
      <a href="#" onClick={openSignupModal} className="text-brandPrimary hover:text-gray900">Register</a>
      <a href="#" onClick={openLoginModal} className="text-brandPrimary hover:text-gray900">Login</a>

      <SignupModal isOpen={isSignupOpen} onRequestClose={closeSignupModal} />
      <LoginModal isOpen={isLoginOpen} onRequestClose={closeLoginModal} />
    </div>
  );
};

export default YourComponent;
