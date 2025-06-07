import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaDumbbell, FaUserFriends, FaCrown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      icon: <FaDumbbell className="text-3xl" />,
      popular: false,
      price: "₹599",
      period: "per month",
      features: [
        "Gym access",
        "Basic equipment",
        "Open 6AM-10PM",
        "1 free class/month",
      ],
      cta: "Get Started",
      color: "bg-[#EEEEEE]",
      textColor: "text-[#222831]",
    },
    {
      title: "Pro",
      icon: <FaUserFriends className="text-3xl" />,
      popular: true,
      price: "₹899",
      period: "per month",
      features: [
        "Unlimited gym access",
        "All equipment",
        "24/7 access",
        "3 classes/week",
        "Locker included",
      ],
      cta: "Most Popular",
      color: "bg-[#FF4C60]",
      textColor: "text-white",
    },
    {
      title: "Premium",
      icon: <FaCrown className="text-3xl" />,
      popular: false,
      price: "₹1299",
      period: "per month",
      features: [
        "VIP 24/7 access",
        "All premium amenities",
        "Unlimited classes",
        "Personal locker",
        "2 guest passes/month",
        "Sauna access",
      ],
      cta: "Go Premium",
      color: "bg-[#222831]",
      textColor: "text-white",
    },
  ];

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#222831] mb-4"
        >
          MEMBERSHIP PLANS
        </motion.h1>
        <p className="text-xl text-[#393E46] max-w-2xl mx-auto">
          Choose the perfect plan for your fitness journey
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-xl overflow-hidden shadow-lg flex flex-col ${
              plan.popular ? "transform md:-translate-y-4" : ""
            }`}
            style={{ minHeight: "480px" }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-[#FF4C60] text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
                <FaStar className="inline mr-1" /> POPULAR
              </div>
            )}

            {/* Card Header */}
            <div
              className={`${plan.color} ${plan.textColor} p-8 text-center flex flex-col items-center`}
            >
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="flex justify-center items-end mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg ml-1">{plan.period}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white p-8 flex-grow flex flex-col justify-between">
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-[#FF4C60] mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3 px-6 rounded-lg font-bold cursor-pointer ${
                  plan.popular
                    ? "bg-[#222831] hover:bg-[#393E46] text-white"
                    : "bg-[#FF4C60] hover:bg-[#e63946] text-white"
                } transition-colors`}
              >
                {plan.cta}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#222831] mb-4">
            NOT SURE WHICH PLAN IS RIGHT FOR YOU?
          </h3>
          <p className="text-[#393E46] mb-6">
            Our fitness experts can help you choose the perfect membership based
            on your goals and schedule.
          </p>
     <Link to="/contact">     <button className="bg-[#FF4C60] hover:bg-[#e63946] text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer">
            Get Personalized Recommendation
          </button></Link>
        </div>
      </div>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-[#222831] mb-4">
              Join {selectedPlan.title} Plan
            </h3>
            <div className="bg-[#EEEEEE] rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold">
                  {selectedPlan.price}/{selectedPlan.period}
                </span>
                <span className="text-sm text-[#393E46]">
                  {selectedPlan.features.length} benefits included
                </span>
              </div>
            </div>

            <form
              onSubmit={handleCompleteBooking}
              className="space-y-4"
              autoComplete="off"
            >
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C60]"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C60]"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4C60]"
              />

              <div className="flex space-x-4 mt-6">
                <button
                  type="submit"
                  className="bg-[#FF4C60] hover:bg-[#e63946] text-white font-bold py-3 px-6 rounded-lg flex-1 cursor-pointer"
                >
                  Complete Signup
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="border border-[#222831] text-[#222831] font-bold py-3 px-6 rounded-lg flex-1 hover:bg-[#EEEEEE] cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 z-50 text-center text-white px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#FF4C60] rounded-xl p-10 max-w-md w-full shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Thank you for booking!</h2>
            <p className="mb-6 text-lg">
              Our team will contact you within 1-2 business days to get you
              started.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-white text-[#FF4C60] font-bold py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-100 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
