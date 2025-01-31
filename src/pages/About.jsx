import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaMoneyBillWave, FaChartLine, FaBus, FaStore } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import dashboard from "../images/dashboard.png";
import { motion } from "framer-motion";

const About = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const filteredTransactions = [
    { name: "Public Transport", date: "22 Sep 2020", icon: <FaBus /> },
    { name: "Grocery Store", date: "18 Sep 2020", icon: <FaStore /> },
    { name: "Online Shopping", date: "15 Sep 2020", icon: <FaShoppingCart /> },
  ].filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="bg-gradient-to-r mt-20 from-white to-blue-50 min-h-screen flex flex-col lg:flex-row items-center gap-8 p-6 lg:gap-20 lg:p-16">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
          Grow your Sales and Services 🚀
        </h1>
        <p className="text-gray-600 mb-8 leading-normal lg:leading-relaxed">
          Boost your business with our cutting-edge solutions! We provide
          high-quality tools to help you scale your sales and services
          efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/product" className="w-full sm:w-auto bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition text-center">
            Get Started
          </a>
          <a href="/contact" className="w-full sm:w-auto border border-gray-900 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition text-center">
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Dashboard Card */}
      <motion.div
        className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-4 lg:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-xl font-bold whitespace-nowrap">Finsweet</h2>
          <div className="flex items-center w-full sm:w-auto gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-2 px-4 focus:ring focus:ring-blue-300 w-full sm:w-48"
            />
            <div className="flex gap-2">
              <MdOutlineTrackChanges className="text-gray-600 text-xl" />
              <FiSettings className="text-gray-600 text-xl" />
            </div>
          </div>
        </div>

        {/* User Welcome */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaUser className="text-gray-600" /> Hi, User
          </h3>
          <h3 className="text-lg font-semibold text-center sm:text-left">Welcome to Dashboard</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {[ 
            { label: "Spent this month", value: "$763K", icon: <FaMoneyBillWave /> }, 
            { label: "New clients", value: "324+", icon: <FaUser /> },
            { label: "Earnings", value: "$7782.40", icon: <FaChartLine /> },
            { label: "Activity", value: "$635.50", icon: <FaShoppingCart /> },
          ].map((item, index) => (
            <div key={index} className="bg-[#E0E4FC] p-3 rounded-lg flex items-center gap-3">
              <span className="text-2xl lg:text-3xl text-gray-800">{item.icon}</span>
              <div>
                <p className="text-sm lg:text-base text-gray-600">{item.label}</p>
                <h4 className="text-xl lg:text-2xl font-bold">{item.value}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="mb-6">
          <img src={dashboard} alt="Graph showing monthly data" className="w-full rounded-lg" />
        </div>

        {/* Transactions */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Transactions..."
            className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
          <ul className="space-y-3">
            {filteredTransactions.map((transaction, index) => (
              <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm lg:text-base">
                <span className="flex items-center gap-2 text-gray-700">
                  {transaction.icon} {transaction.name}
                </span>
                <span className="text-gray-500 sm:text-right">{transaction.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tasks */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Your Tasks</h4>
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a new task"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg whitespace-nowrap"
            >
              Add Task
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li key={index} className="text-gray-700 text-sm lg:text-base">
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm lg:text-base">
                <th className="py-2 px-4">COMPANIES</th>
                <th className="py-2 px-4">BUDGET</th>
                <th className="py-2 px-4">STATUS</th>
                <th className="py-2 px-4">COMPLETION</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { company: "Chakra Soft UI Version", budget: "$14,000", status: "Working", completion: "60%" }, 
                { company: "Add Progress Track", budget: "$3,000", status: "Canceled", completion: "10%" }, 
                { company: "Fix Platform Errors", budget: "Not set", status: "Done", completion: "100%" }, 
                { company: "Launch Mobile App", budget: "$32,000", status: "Done", completion: "100%" },
              ].map((row, index) => (
                <tr key={index} className="border-t text-sm lg:text-base">
                  <td className="py-3 px-4">{row.company}</td>
                  <td className="py-3 px-4">{row.budget}</td>
                  <td className={`py-3 px-4 ${row.status === "Done" ? "text-green-500" : "text-yellow-500"}`}>
                    {row.status}
                  </td>
                  <td className="py-3 px-4">{row.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default About;