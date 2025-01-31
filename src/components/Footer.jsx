import React, { useState } from 'react';
import { FaGithub, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      setEmailError('');
      setSuccessMessage('Subscription successful!');
      setEmail('');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setEmailError('Please enter a valid email address.');
      setSuccessMessage('');
    }
  };

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="footer pt-20 overflow-x-hidden">
      <div className="footer-question text-center gap-6">
        <motion.h1
          className="text-4xl sm:text-6xl mb-8 font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Are you ready to grow your <br /> business with us?
        </motion.h1>
        <motion.p
          className="mb-12 text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui!
        </motion.p>
        <motion.a
          href="#pricing"
          className="bg-black mt-20 text-white px-10 py-3 hover:bg-white border border-black hover:text-black transition-all ease-in-out duration-300 rounded-md"
          onClick={scrollToPricing}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Pricing
        </motion.a>
      </div>

      <motion.div
        className="footer-main bg-[#1D2130] text-white px-6 sm:px-14 py-12 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="top flex flex-wrap justify-between gap-6">
          <div className="part flex flex-col items-start gap-4 w-full sm:w-auto">
            <h1 className="text-xl font-bold">Company</h1>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/about"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              About Us
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Why Choose us
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/pricing"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Pricing
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Testimonial
            </motion.a>
          </div>

          <div className="part flex flex-col items-start gap-4 w-full sm:w-auto">
            <h1 className="text-xl font-bold">Resources</h1>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Terms and Condition
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/blog"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Blog
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/contact"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Contact Us
            </motion.a>
          </div>

          <div className="part flex flex-col items-start gap-4 w-full sm:w-auto">
            <h1 className="text-xl font-bold">Resources</h1>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Project Management
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Remote Collaboration
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Time Schedule
            </motion.a>
            <motion.a
              className="text-gray-300 hover:underline"
              href="/"
              whileHover={{ color: "#f5f5f5", x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Lead Generate
            </motion.a>
          </div>

          <div className="part w-full sm:w-auto">
            <div className="top mb-4">
              <h1 className="text-3xl font-bold">Finsweet</h1>
            </div>
            <div className="bottom">
              <h3>Subscribe to our Newsletter</h3>
              <form onSubmit={handleSubscribe}>
                <div className="flex items-center mt-8 bg-gray-800 rounded-lg">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-[#2B2E3C] py-4 pl-4 text-white placeholder:text-gray-300 rounded-l-lg focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    className="bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-200 font-semibold py-4 px-8 text-gray-900 rounded-r-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
              {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            </div>
          </div>
        </div>

        <motion.div
          className="bottom gap-4 text-2xl flex items-center justify-center pt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>© Copyright Finsweet 2022</h1>
          <motion.a
            href="https://github.com/mazegit1"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='hover:rotate-360 transition-all ease-in-out duration-200'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/xelil_ovw"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='hover:rotate-360 transition-all ease-in-out duration-200'
          >
            <FaSquareInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/huseyn-xalil-7022262bb"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='hover:rotate-360 transition-all ease-in-out duration-200'
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
