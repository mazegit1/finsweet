import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faThumbsUp, faHeadset, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import circle from '../images/circle.png';
import { motion } from 'framer-motion';
import ad1 from '../images/ad1.png';
import ad2 from '../images/ad2.png';
import ad3 from '../images/ad3.png';
import ad4 from '../images/ad4.png';
import ad5 from '../images/ad5.png';
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { GoReport } from "react-icons/go";
import { CgMoreVerticalO } from "react-icons/cg";
import { LuReceiptText } from "react-icons/lu";
import { RiRobot2Fill } from "react-icons/ri";
import result1 from '../images/result1.png'
import result2 from '../images/result2.png'
import result3 from '../images/result3.png'
const ads = [ad1, ad2, ad3, ad4, ad5];

const HomeRest = () => {
  return (
    <>
      <div className="p-6 md:p-12 ">
        <div className="text-center mb-12">
          <motion.h2
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-50 font-semibold text-xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            High-quality
          </motion.h2>
          <motion.h1
            className="text-2xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We have the Best Solution for your Business
          </motion.h1>
        </div>
        <div className="bg-[#E0E4FC] p-6 md:p-12 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* First Section */}
          <motion.div
            className="flex flex-col items-center text-center md:text-left md:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="text-[#232ED1] text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl md:text-3xl font-bold">High security to protect <br /> from piracy</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </motion.div>
          {/* Second Section */}
          <motion.div
            className="flex flex-col items-center text-center md:text-left md:items-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faThumbsUp} className="text-[#232ED1] text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl md:text-3xl font-bold">Premium quality <br /> performance</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </motion.div>
          {/* Third Section */}
          <motion.div
            className="flex flex-col items-center text-center md:text-left md:items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FontAwesomeIcon icon={faHeadset} className="text-[#232ED1] text-5xl md:text-6xl mb-4" />
            <h3 className="text-xl md:text-3xl font-bold">Full time customer <br /> support - 24/7</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </motion.div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-8 md:gap-56">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-blue-500 font-semibold text-xl md:text-2xl">Why should you work with us?</h3>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">To upscale your business to the next level</h2>
              <p className="text-gray-600 mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <ul className="mt-6 space-y-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center text-sm md:text-base"
                >
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex items-center text-sm md:text-base"
                >
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex items-center text-sm md:text-base"
                >
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="section flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="section-left flex flex-col items-start gap-12 text-sm md:text-base">
          <h1 className="text-3xl md:text-6xl font-semibold">More impressions, more conversions</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur consequatur nesciunt a dolore recusandae molestias quod adipisci impedit animi ab blanditiis natus ullam qui expedita laudantium sed numquam nisi.</p>
          <motion.a
            href="/pricing"
            className="text-white bg-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200 border border-black"
            transition={{ duration: 0.3 }}
          >
            Free Trial
          </motion.a>
        </div>
        <motion.div
          className="section-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img src={circle} alt="Circle" className="" />
        </motion.div>
      </motion.div>

      <div className="ads  flex gap-10 md:gap-20 items-center justify-center py-10 flex-wrap">
        {ads.map((ad, index) => (
          <motion.img
            key={index}
            src={ad}
            alt={`Ad ${index + 1}`}
            className="scale-110 w-36 md:w-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          />
        ))}
      </div>
      <motion.div 
  className="discover py-20 flex flex-col md:flex-row bg-gradient-to-r from-white to-blue-50 items-center justify-between px-8 md:px-20 lg:px-40 max-w-full overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Left Section */}
  <motion.div 
    className="discover-left flex flex-col items-start gap-8 w-full md:w-1/2"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h3 className="uppercase text-indigo-500 font-bold text-xl">Discover More</h3>
    <h1 className="text-3xl md:text-4xl font-bold">
      Analyze your sales and <br /> marketing leads
    </h1>
    <p className="text-gray-500 text-sm md:text-base">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br />
      voluptua invidunt ut labore.
    </p>
  </motion.div>

  {/* Right Section */}
  <motion.div 
    className="discover-right flex flex-col items-start gap-8 mt-10 md:mt-0 w-full md:w-1/2"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    {[
      { Icon: TbBrandGoogleAnalytics, title: "Sales Tracking" },
      { Icon: GrUserManager, title: "Project Management" },
      { Icon: GoReport, title: "Activity Report" },
    ].map(({ Icon, title }, index) => (
      <motion.div 
        key={index} 
        className="part flex items-center gap-6 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 * index }}
      >
        <Icon className="bg-gray-200 border border-black text-5xl rounded-full px-2 py-2" />
        <div className="info w-full">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

    <div className="features  px-4 sm:px-8">
  <div className="title text-center text-3xl sm:text-6xl font-bold">
    <h1>Features</h1>
  </div>
  <div className="info flex flex-wrap justify-center items-center gap-10 md:gap-20 bg-[#D798E126] mx-4 sm:mx-10 md:mx-20 my-10 sm:my-16 md:my-20 rounded-xl px-6 sm:px-12 md:px-12 py-10 sm:py-8 md:py-10">
    
    <div className="part flex flex-col items-center md:items-start gap-4 sm:gap-6 max-w-xs text-center md:text-left">
      <CgMoreVerticalO className="text-[#6B7CFF] text-4xl sm:text-5xl" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Advanced 256-bit <br /> encryption
      </h1>
      <p className="text-gray-500 text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias natus aspernatur facere, hic corporis error explicabo ratione illo cum alias.
      </p>
    </div>

    <div className="part flex flex-col items-center md:items-start gap-4 sm:gap-6 max-w-xs text-center md:text-left">
      <LuReceiptText className="text-[#6B7CFF] text-4xl sm:text-5xl" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Simple collaboration <br /> tools
      </h1>
      <p className="text-gray-500 text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias natus aspernatur facere, hic corporis error explicabo ratione illo cum alias.
      </p>
    </div>

    <div className="part flex flex-col items-center md:items-start gap-4 sm:gap-6 max-w-xs text-center md:text-left">
      <RiRobot2Fill className="text-[#6B7CFF] text-4xl sm:text-5xl" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Customizable AI <br /> features
      </h1>
      <p className="text-gray-500 text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias natus aspernatur facere, hic corporis error explicabo ratione illo cum alias.
      </p>
    </div>

  </div>
</div>
<motion.div 
      className="results bg-gradient-to-r from-white to-blue-50 py-20 px-6 sm:px-10 lg:px-20"
      whileInView={{ opacity: 1, translateY: 0 }} 
      initial={{ opacity: 0, translateY: 100 }} 
      transition={{ duration: 0.8 }}
    >
      <div className="title text-center text-4xl font-bold pb-16">
        <h1>The stunning results our <br /> customers have experienced</h1>
      </div>
      <div className="cards flex xl:flex-row md-flex-col flex-col  gap-6 justify-between">
        <motion.div 
          className="card px-14 text-center hover:bg-[#6199ED42] hover:translate-y-[-20px] transition-all ease-in-out duration-200 hover:text-gray-500 shadow-xl hover:shadow-2xl bg-white border border-[#6199ED42] rounded-2xl flex flex-col items-center gap-6 py-14"
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-xl font-semibold'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </h1>
          <img src={result1} alt="Result 1" />
          <h1>Ron Wood</h1>
          <p>CEO</p>
        </motion.div>
        <motion.div 
          className="card px-14 text-center hover:bg-[#6199ED42] hover:translate-y-[-20px] transition-all ease-in-out duration-200 hover:text-gray-500 shadow-xl hover:shadow-2xl bg-white border border-[#6199ED42] rounded-2xl flex flex-col items-center gap-6 py-14"
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-xl font-semibold'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </h1>
          <img src={result2} alt="Result 2" />
          <h1>Mark Mason</h1>
          <p className='uppercase'>Marketing Manager</p>
        </motion.div>
        <motion.div 
          className="card px-14 text-center hover:bg-[#6199ED42] hover:translate-y-[-20px] transition-all ease-in-out duration-200 hover:text-gray-500 shadow-xl hover:shadow-2xl bg-white border border-[#6199ED42] rounded-2xl flex flex-col items-center gap-6 py-14"
          whileInView={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-xl font-semibold'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </h1>
          <img src={result3} alt="Result 3" />
          <h1>Sam Preston</h1>
          <p>CTO</p>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default HomeRest;
