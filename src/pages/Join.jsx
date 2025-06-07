import React, { useState } from 'react';
import { FaCheck, FaDumbbell, FaUserFriends, FaCrown, FaClock, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JoinNowPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

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
        "1 free class/month"
      ],
      cta: "Get Started",
      color: "bg-[#EEEEEE]",
      textColor: "text-[#222831]"
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
        "Locker included"
      ],
      cta: "Most Popular",
      color: "bg-[#FF4C60]",
      textColor: "text-white"
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
        "Sauna access"
      ],
      cta: "Go Premium",
      color: "bg-[#222831]",
      textColor: "text-white"
    }
  ];

  const perks = [
    {
      icon: <FaDumbbell className="text-3xl" />,
      title: "No Long-Term Contracts",
      desc: "Cancel anytime with 30-day notice"
    },
    {
      icon: <FaUserFriends className="text-3xl" />,
      title: "Free Trial Session",
      desc: "Experience our gym before joining"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Progress Tracking",
      desc: "Personalized fitness analytics"
    }
  ];

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#222831] text-white py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          READY TO <span className="text-[#FF4C60]">TRANSFORM</span>?
        </motion.h1>
        <p className="text-xl max-w-2xl mx-auto">
          Join Hyderabad's most results-driven fitness community
        </p>
      </section>

      {/* Membership Plans */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#222831] mb-4">
            CHOOSE YOUR <span className="text-[#FF4C60]">MEMBERSHIP</span>
          </h2>
          <p className="text-[#393E46] max-w-3xl mx-auto">
            Flexible plans designed for every fitness level and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? "border-2 border-[#FF4C60] transform md:-translate-y-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-[#FF4C60] text-white text-center py-2 font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex justify-center items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-[#FF4C60] mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-bold ${
                    plan.popular
                      ? "bg-[#FF4C60] hover:bg-[#e63946] text-white"
                      : "bg-[#222831] hover:bg-[#393E46] text-white"
                  } transition-colors cursor-pointer`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-[#222831] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">
            WHY <span className="text-[#FF4C60]">GYM BOX</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#393E46] p-8 rounded-xl"
              >
                <div className="text-[#FF4C60] mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-[#EEEEEE]">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#FF4C60] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-xl mb-8">
            Our team is ready to help you choose the perfect plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF4C60] font-bold py-3 px-8 rounded-lg cursor-pointer"
            >
              CALL NOW (+91 93902 28526)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/pricing')}
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg cursor-pointer"
            >
              VIEW PRICING
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNowPage;