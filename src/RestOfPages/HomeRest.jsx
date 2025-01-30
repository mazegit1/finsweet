import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faThumbsUp, faHeadset, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import circle from '../images/circle.png'
import { motion } from 'framer-motion';
import ad1 from '../images/ad1.png'
import ad2 from '../images/ad2.png'
import ad3 from '../images/ad3.png'
import ad4 from '../images/ad4.png'
import ad5 from '../images/ad5.png'
const HomeRest = () => {
  return (
    <>
      <div className="p-6 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] font-semibold">
            High-quality
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">We have the Best Solution for your Business</h1>
        </div>
        <div className="bg-[#E0E4FC] p-6 md:p-12 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <FontAwesomeIcon icon={faShieldAlt} className="text-[#232ED1] text-6xl mb-4" />
            <h3 className="text-3xl font-bold">High security to protect <br /> from piracy</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <FontAwesomeIcon icon={faThumbsUp} className="text-[#232ED1] text-6xl mb-4" />
            <h3 className="text-3xl font-bold">Premium quality <br /> performance</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <FontAwesomeIcon icon={faHeadset} className="text-[#232ED1] text-6xl mb-4" />
            <h3 className="text-3xl font-bold">Full time customer <br /> support - 24/7</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-8 md:gap-56">
            <div>
              <h3 className="text-blue-500 font-semibold">Why should you work with us?</h3>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">To upscale your business to the next level</h2>
              <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</p>
            </div>
            <div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </li>
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </li>
                <li className="flex items-center">
                  <div className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <motion.div 
        className="section flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="section-left flex flex-col items-start gap-12">
          <h1 className="text-4xl md:text-6xl font-semibold">More impressions, more conversions</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur consequatur nesciunt a dolore recusandae molestias quod adipisci impedit animi ab blanditiis natus ullam qui expedita laudantium sed numquam nisi.</p>
          <a 
            href="/pricing" 
            className="text-white bg-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200 border border-black"
          >
            Free Trial
          </a>
        </div>
        <div className="section-right">
          <img src={circle} alt="" />
        </div>
      </motion.div>
      <div className="ads">
        <img src={ad1} alt="" />
        <img src={ad2} alt="" />
        <img src={ad3} alt="" />
        <img src={ad4} alt="" />
        <img src={ad5} alt="" />
      </div>
    </>
  );
};

export default HomeRest;
