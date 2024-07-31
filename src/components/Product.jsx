import React from 'react';
import { motion } from 'framer-motion';
import './Membership.css';

// Animation variants
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const Membership = () => {
  return (
    <div className="membership-container" id="product">
      {/* Membership Heading */}
      <div className="membership-heading">
        <h2>Membership Options</h2>
        <p>Choose the membership plan that best suits your needs and take your training to the next level.</p>
      </div>

      {/* Membership Cards */}
      <div className="membership-cards">
        {/* Card 1 */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="membership-card"
        >
          <h3>Basic Plan</h3>
          <p>Includes basic training sessions and access to our online resources.</p>
          <p className="price">$29/month</p>
          <p className="quote">"The journey of a thousand miles begins with a single step."</p>
          <a href="#" className="btn-primary">Join Now</a>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="membership-card"
        >
          <h3>Premium Plan</h3>
          <p>Includes advanced training sessions, personalized coaching, and exclusive workshops.</p>
          <p className="price">$49/month</p>
          <p className="quote">"Success is not the key to happiness. Happiness is the key to success."</p>
          <a href="#" className="btn-primary">Join Now</a>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="membership-card"
        >
          <h3>Elite Plan</h3>
          <p>Includes all features from Premium Plan, plus one-on-one sessions and exclusive access to events.</p>
          <p className="price">$99/month</p>
          <p className="quote">"The only limit to our realization of tomorrow is our doubts of today."</p>
          <a href="#" className="btn-primary">Join Now</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Membership;
