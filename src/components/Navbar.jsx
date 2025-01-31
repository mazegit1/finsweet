import React, { useState, useEffect } from 'react';
import { HiCodeBracket } from "react-icons/hi2";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar entrance animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Menu links stagger animation
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div 
      variants={navbarVariants} 
      initial="hidden" 
      animate="visible" 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? 'bg-white/60 backdrop-blur-sm' : 'bg-white'} py-5 px-6 sm:px-10 md:px-16 lg:px-20 flex items-center justify-between`}

    >
      {/* Logo */}
      <a href="/" className='flex items-center gap-2 text-3xl sm:text-4xl font-semibold'>
        <HiCodeBracket /> Finsweet
      </a>
      
      {/* Desktop & Mid-Sized Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-12 text-lg sm:text-lg lg:text-2xl">
        {["Product", "About", "Blog", "Contact", "Pricing"].map((link, index) => (
          <motion.a 
            key={index} 
            href={`/${link.toLowerCase()}`} 
            className="relative group"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <span className="group-hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:w-0 after:h-[3px] after:bg-black after:absolute after:left-0 after:bottom-[-5px]">
              {link}
            </span>
          </motion.a>
        ))}
        <a href="/pricing" className='text-white bg-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200 border border-black'>
          Free Trial
        </a>
      </div>
      
      {/* Mobile & Mid-Sized Menu Button */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(true)}>
        <HiOutlineMenuAlt3 />
      </div>
      
      {/* Mobile & Mid-Sized Menu */}
      <motion.div 
        initial={{ x: "100%" }} 
        animate={{ x: menuOpen ? "0%" : "100%" }} 
        transition={{ duration: 0.3, ease: "easeInOut" }} 
        className="fixed top-0 right-0 w-full h-[100vh] bg-white z-50 flex flex-col gap-6 p-6"
      >
        {/* Close Button */}
        <div className="text-3xl self-end cursor-pointer" onClick={() => setMenuOpen(false)}>
          <HiX />
        </div>

        {/* Menu Links */}
        {["Product", "About", "Blog", "Contact", "Pricing"].map((link, index) => (
          <motion.a 
            key={index} 
            href={`/${link.toLowerCase()}`} 
            className="text-lg sm:text-xl bg-white w-fit rounded-xl px-12 hover:bg-black active:text-white active:bg-black hover:text-white  transition-all py-2"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {link}
          </motion.a>
        ))}

        <a href="/pricing" className='text-white bg-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200 border border-black'>
          Free Trial
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
