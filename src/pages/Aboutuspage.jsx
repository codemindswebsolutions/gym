import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUsers, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import gymInterior from '../assets/gym-interior.jpeg';

import communityImg from '../assets/gym-community.jpg';

const AboutUs = () => {
  const stats = [
    { value: "12+", label: "Years Experience", icon: <FaCalendarAlt /> },
    { value: "5K+", label: "Members Transformed", icon: <FaUsers /> },
    { value: "25+", label: "Certified Trainers", icon: <FaTrophy /> },
    { value: "24/7", label: "Availability", icon: <FaHeartbeat /> }
  ];

const trainers = [
  {
    name: "shyam",
    specialty: "Strength Training",
    years: 8,
    img: "https://www.prowolf.in/cdn/shop/articles/build-muscle-on-a-budget-the-essential-indian-bodybuilding-guide-773541.webp?v=1741009602",
  },
  {
    name: "Priya Patel",
    specialty: "Yoga & Mobility",
    years: 6,
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_140,q_auto:eco,dpr_2,g_face,f_auto,fl_progressive//image/diy/93eb9a21-7d47-4d16-97bb-eff0bfba8627.jpg",
  },
  {
    name: " Johnson & riya",
    specialty: "HIIT & Conditioning",
    years: 10,
    img: "https://img.freepik.com/premium-photo/indian-asian-young-couple-is-working-out-gym-attractive-woman-handsome-fit-man-are-training-modern-gym-health-fitness-concept_466689-13752.jpg",
  },
  {
    name: "Sarah Williams",
    specialty: "Nutrition Coaching",
    years: 5,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];


  const milestones = [
    { year: 2010, event: "Founded in Hyderabad" },
    { year: 2014, event: "Expanded to 2 locations" },
    { year: 2018, event: "Launched Web App" },
    { year: 2022, event: "Opened Premium Recovery Lounge" }
  ];

  return (
    <div className="bg-[#EEEEEE] text-[#222831]">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-[#222831] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#FF4C60]/20 z-10"></div>
        <img 
          src={gymInterior} 
          alt="Gym Interior" 
          className="absolute w-full h-full "
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">OUR STORY</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            More than a gym - a movement transforming lives since 2010
          </p>
        </motion.div>
      </section>

      {/* 1. Our Mission */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#FF4C60]">OUR</span> MISSION
            </h2>
            <p className="text-lg mb-6">
              To empower every individual to unlock their full potential through accessible, science-backed fitness in a supportive community environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaDumbbell className="text-[#FF4C60] mt-1 mr-3 text-xl" />
                <p>Democratize premium fitness for all body types and fitness levels</p>
              </div>
              <div className="flex items-start">
                <FaHeartbeat className="text-[#FF4C60] mt-1 mr-3 text-xl" />
                <p>Combine physical training with mental wellness for holistic health</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#222831] p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#FF4C60] mb-6 text-center">BY THE NUMBERS</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#393E46] p-6 rounded-lg text-center"
                >
                  <div className="text-[#FF4C60] text-3xl mb-2">{stat.value}</div>
                  <div className="text-white text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Trainers */}
    <section className="py-20 bg-[#222831] text-white px-4">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-[#FF4C60]">MEET</span> OUR TRAINERS
      </h2>
      <p className="text-xl max-w-3xl mx-auto">
        Certified experts passionate about your transformation
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainers.map((trainer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#393E46] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <div className="h-48 w-full overflow-hidden rounded-t-xl">
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
            <p className="text-[#FF4C60] mb-3">{trainer.specialty}</p>
            <p className="text-sm text-[#EEEEEE]">{trainer.years}+ years experience</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 3. Our Journey */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FF4C60]">OUR</span> JOURNEY
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            From humble beginnings to becoming Hyderabad's premier fitness destination
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-[#FF4C60] transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-[#222831] text-white' : 'bg-white border border-[#EEEEEE]'}`}>
                  <div className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-[#FF4C60]' : 'text-[#222831]'}`}>
                    {milestone.year}
                  </div>
                  <p>{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Facilities */}
     <section className="py-20 bg-[#222831] text-white px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-[#FF4C60]">WORLD-CLASS</span> FACILITIES
        </h2>
        <p className="text-lg mb-6">
          Our 15,000 sq ft space features cutting-edge equipment and amenities designed for optimal performance and recovery.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#FF4C60] mr-2">•</span>
            <span>200+ pieces of premium strength & cardio equipment</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF4C60] mr-2">•</span>
            <span>Olympic lifting platforms with bumper plates</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF4C60] mr-2">•</span>
            <span>Dedicated functional training zone</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#FF4C60] mr-2">•</span>
            <span>Recovery lounge with hydrotherapy</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          "https://media.product.which.co.uk/prod/images/original/aa432bcbe66f-cross-trainer.jpg", // gym equipment
          "https://images.unsplash.com/photo-1718633561231-864a4c466991?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ3ltfGVufDB8fDB8fHww", // weightlifting
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80", // functional training
          "https://plus.unsplash.com/premium_photo-1726614172234-e35c6e66470d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D", // hydrotherapy
        ].map((src, index) => (
          <div key={index} className="aspect-square bg-[#393E46] rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Facility ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
      {/* 5. Community & Values */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={communityImg} 
              alt="Gym Community" 
              className="rounded-xl shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#FF4C60]">COMMUNITY</span> & VALUES
            </h2>
            <p className="text-lg mb-6">
              We believe fitness is about more than physical transformation - it's about building a supportive community that lifts each other up.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-[#EEEEEE] rounded-lg">
                <h4 className="font-bold text-[#FF4C60] mb-2">No Ego Policy</h4>
                <p>Our inclusive environment welcomes all fitness levels without judgment</p>
              </div>
              <div className="p-6 bg-[#EEEEEE] rounded-lg">
                <h4 className="font-bold text-[#FF4C60] mb-2">Accountability Partners</h4>
                <p>Member-led support groups to keep you motivated</p>
              </div>
              <div className="p-6 bg-[#EEEEEE] rounded-lg">
                <h4 className="font-bold text-[#FF4C60] mb-2">Give Back Initiative</h4>
                <p>Monthly charity workouts supporting local causes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;