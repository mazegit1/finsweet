import React, { useState } from 'react';
import dashboard from '../images/dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTasks, faBook, faShieldAlt, faCalendarAlt, faDollarSign, faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeRest from '../RestOfPages/HomeRest';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      toast.success("Email submitted successfully!"); 
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <ToastContainer />
      <div className="flex bg-gray-100 pt-48 border-b-4 border-b-[#E0E4FC] flex-col items-center justify-center min-h-screen py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800">
            The Best Software to Grow <br /> your Sales and Services
          </h1>
          <p className="text-gray-800 mt-12 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br /> invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <div className="mt-6">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                value={email} 
                onChange={handleEmailChange} 
                className="px-4 shadow-md outline-none py-2 border rounded-l-md focus:outline-none w-full sm:w-auto mb-4 sm:mb-0"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-black hover:bg-white shadow-md hover:text-black transition-all ease-in-out duration-200 border text-white rounded-r-md w-full sm:w-auto"
              >
                Get Free trial
              </button>
            </form>
          </div>
        </div>
        <div className="bg-white border-4 border-[#E0E4FC] shadow-lg rounded-2xl overflow-hidden w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/4 bg-gray-100 p-4 border-r-2 border-r-[#E0E4FC] mb-4 sm:mb-0">
              <div className="text-xl font-bold mb-6 border-b-2 border-b-[#E0E4FC]">finsweet</div>
              <nav className="space-y-4">
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Dashboard
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faTasks} className="mr-2" /> Activity
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faBook} className="mr-2" /> Library
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Security
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Schedules
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> Payouts
                </a>
                <a href="#" className="flex items-center gap-4 text-xl text-gray-700">
                  <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
                </a>
              </nav>
            </div>
            <div className="w-full sm:w-3/4 p-6">
              <div className="flex justify-between xL:flex-row md:flex-row flex-col items-center mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">Welcome to Dashboard</h2>
                  <p className="text-sm sm:text-base text-gray-500">Hi, Johnson</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input type="text" placeholder="Type here..." className="px-4 py-2 border border-[#E0E4FC] rounded-2xl focus:outline-none w-full sm:w-auto" />
                  <a href="#" className="text-[#8093ff] font-semibold border border-[#E0E4FC] hover:bg-[#b6c1ff] hover:text-white px-4 py-2 rounded-md">Sign in</a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#b6c1ff] text-white hover:bg-white border-[#b6c1ff] border hover:text-[#8093ff] p-4 flex flex-col items-start justify-between rounded-lg text-center">
                  <p className="text-start font-semibold text-xl">Spent this month</p>
                  <p className="text-xl text-black font-bold">$763K</p>
                </div>
                <div className="bg-[#b6c1ff] text-white hover:bg-white border-[#b6c1ff] border hover:text-[#8093ff] p-4 flex flex-col items-start justify-between rounded-lg text-center">
                  <p className="font-semibold text-xl">New clients</p>
                  <p className="text-xl text-black font-bold">324+</p>
                </div>
                <div className="bg-[#b6c1ff] text-white hover:bg-white border-[#b6c1ff] border hover:text-[#8093ff] p-4 flex flex-col items-start justify-between rounded-lg text-center">
                  <p className="font-semibold text-xl">Earnings</p>
                  <p className="text-xl text-black font-bold">$7782.40</p>
                </div>
                <div className="bg-[#b6c1ff] text-white hover:bg-white border-[#b6c1ff] border hover:text-[#8093ff] p-4 flex flex-col items-start justify-between rounded-lg text-center">
                  <p className="font-semibold text-xl">Activity</p>
                  <p className="text-xl text-black font-bold">$635.50</p>
                </div>
              </div>
              <div className="p-6 rounded-lg mb-6">
                <img src={dashboard} alt="Graph showing monthly activity" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Your transactions</h3>
                <a href="#" className="text-gray-500">View all</a>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-700">Public Transport</div>
                  <div className="text-gray-500">21 September 2020</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-700">Grocery Store</div>
                  <div className="text-gray-500">19 September 2020</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-700">Public Transport</div>
                  <div className="text-gray-500">17 September 2020</div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Companies</h3>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr>
                      <th className="py-2">COMPANIES</th>
                      <th className="py-2">BUDGET</th>
                      <th className="py-2">STATUS</th>
                      <th className="py-2">COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">Chakra Soft UI Version</td>
                      <td className="py-2">$14,000</td>
                      <td className="py-2">Working</td>
                      <td className="py-2">60%</td>
                    </tr>
                    <tr>
                      <td className="py-2">Add Progress Track</td>
                      <td className="py-2">$3,000</td>
                      <td className="py-2">Canceled</td>
                      <td className="py-2">10%</td>
                    </tr>
                    <tr>
                      <td className="py-2">Fix Platform Errors</td>
                      <td className="py-2">Not set</td>
                      <td className="py-2">Done</td>
                      <td className="py-2">100%</td>
                    </tr>
                    <tr>
                      <td className="py-2">Launch our Mobile App</td>
                      <td className="py-2">$32,000</td>
                      <td className="py-2">Done</td>
                      <td className="py-2">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeRest />
    </>
  );
};

export default Home;
