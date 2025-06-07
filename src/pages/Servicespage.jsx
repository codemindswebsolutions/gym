import React from 'react';
import {
  FaDumbbell,
  FaRunning,
  FaUserFriends,
  FaSpa,
  FaSwimmer,
  FaHeartbeat,
  FaClock,
  FaCalendarAlt,
  FaChartLine,
  FaLeaf,
  FaLaptop,
  FaChild,
  FaBolt,
  FaFireAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GymServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Personal Training',
      icon: <FaDumbbell className="text-4xl" />,
      description: 'One-on-one customized workout sessions with certified trainers.',
    },
    {
      title: 'Group Fitness Classes',
      icon: <FaUserFriends className="text-4xl" />,
      description: 'Classes like HIIT, Yoga, Zumba, Pilates, Spin & CrossFit.',
    },
    {
      title: '24/7 Gym Access',
      icon: <FaClock className="text-4xl" />,
      description: 'Workout anytime with our flexible, around-the-clock gym access.',
    },
    {
      title: 'Virtual & On-Demand Workouts',
      icon: <FaLaptop className="text-4xl" />,
      description: 'Join live or recorded sessions from anywhere for convenience.',
    },
    {
      title: 'Functional Training Zone',
      icon: <FaBolt className="text-4xl" />,
      description: 'TRX, kettlebells, battle ropes, and more for dynamic training.',
    },
    {
      title: 'Recovery Services',
      icon: <FaSpa className="text-4xl" />,
      description: 'Massage therapy, cryotherapy, sauna & steam room access.',
    },
    {
      title: 'Nutrition & Diet Counseling',
      icon: <FaLeaf className="text-4xl" />,
      description: 'Personalized meal plans and expert consultations with dietitians.',
    },
    {
      title: 'Specialized Training Programs',
      icon: <FaFireAlt className="text-4xl" />,
      description: 'Weight loss, strength & conditioning, and sport-specific plans.',
    },
    {
      title: 'Wellness & Spa Amenities',
      icon: <FaSwimmer className="text-4xl" />,
      description: 'Hydrotherapy, infrared saunas, and premium spa relaxation.',
    },
    {
      title: 'Childcare Services',
      icon: <FaChild className="text-4xl" />,
      description: 'On-site childcare so parents can work out worry-free.',
    },
  ];

  const redirectToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Hero */}
      <div className="relative bg-[#222831] text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">OUR SERVICES</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Tailored fitness, wellness & recovery services to meet your goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4 text-[#FF4C60]">{service.icon}</div>
              <h3 className="text-2xl font-bold text-center text-[#222831] mb-2">
                {service.title}
              </h3>
              <p className="text-[#393E46] text-center mb-6">{service.description}</p>
              <button
                onClick={redirectToContact}
                className="mt-auto bg-[#FF4C60] hover:bg-[#e63946] text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#222831] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">WHY CHOOSE US?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserFriends className="text-4xl" />,
                title: 'Expert Trainers',
                text: 'Certified professionals with 5+ years experience.',
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: 'Proven Results',
                text: '90% of members achieve their fitness goals.',
              },
              {
                icon: <FaCalendarAlt className="text-4xl" />,
                title: 'Flexible Schedules',
                text: '100+ weekly sessions with 24/7 access.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-[#FF4C60] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#EEEEEE]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymServices;
