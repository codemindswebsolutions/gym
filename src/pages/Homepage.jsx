import React, { useEffect, useState } from "react";
import { motion, useScroll, useAnimation, AnimatePresence } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaBiking, FaSpa, FaArrowDown, FaQuoteLeft,FaUsers } from "react-icons/fa";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import gymVideo from "../assets/gym.mp4";
import promoVideo from "../assets/promo.mp4";
import Header from "../components/Navbar";
import { FaThermometerEmpty } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        controls.start("visible");
      }
    });

    return () => unsubscribe();
  }, [controls, scrollYProgress]);

 const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


  const services = [
    { Icon: FaDumbbell, title: "Strength Training", desc: "State-of-the-art equipment" },
    { Icon: FaHeartbeat, title: "Cardio Zone", desc: "HIIT & endurance programs" },
    { Icon: FaBiking, title: "Cycling Studio", desc: "Immersive class experiences" },
    { Icon: FaSpa, title: "Recovery", desc: "Sauna & massage therapy" }
  ];

const testimonials = [
  {
    quote: "Iron Peak helped me transform my lifestyle. I feel energized every day!",
    author: "Rohit Kumar",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80"
  },
  {
    quote: "The trainers are so supportive. I lost 10kg and gained confidence!",
    author: "Sneha Reddy",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
  },
  {
    quote: "Best gym I've ever joined. Their workouts are structured and effective.",
    author: "Aditya Singh",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=500&q=80"
  }
];



  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#222831] flex items-center justify-center z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#FF4C60] border-t-transparent rounded-full"
          />
        </motion.div>
      ) : (
        <div className="relative">
          <Header />

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={gymVideo} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#222831]/80 to-[#222831]/90 z-1"></div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center px-6 max-w-6xl mx-auto"
            >
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
              >
                <span className="text-[#FF4C60]">IGNITE</span> YOUR POTENTIAL
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl mb-10 text-[#EEEEEE] max-w-2xl mx-auto"
              >
                Where elite training meets community support. No ego, just results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-5"
              >
      <Link to="/join">          <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF4C60] hover:bg-[#ff354d] text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg cursor-pointer"
                >
                  JOIN NOW
                </motion.button></Link>
                
         <Link to="/about">      <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-bold cursor-pointer"
                >
                  LEARN MORE
                </motion.button></Link> 
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              >
               
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-20 bg-[#222831] text-[#EEEEEE]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="container mx-auto px-6 text-center max-w-4xl"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
                MORE THAN A GYM — A <span className="text-[#FF4C60]">MOVEMENT</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-xl mb-12">
                At <strong>Iron Peak Fitness</strong>, we combine cutting-edge facilities with expert coaching to help you surpass your limits. Our inclusive community supports every fitness journey, from first-timers to competitive athletes.
              </motion.p>
              
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              >
                {[
                  { icon: <FiClock className="w-8 h-8" />, text: "24/7 Access" },
                  { icon: <FiMapPin className="w-8 h-8" />, text: "Prime Location" },
                  { icon: <FiPhone className="w-8 h-8" />, text: "24/7 Support" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-[#393E46] p-6 rounded-xl"
                  >
                    <div className="text-[#FF4C60] mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.text}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Services Section */}
        <section className="py-20 bg-[#EEEEEE] text-[#222831]">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">
        OUR <span className="text-[#FF4C60]">SERVICES</span>
      </h2>
      <p className="text-xl max-w-2xl mx-auto">
        Premium facilities designed to elevate every aspect of your fitness journey
      </p>
    </motion.div>
    
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {[
        {
          title: "Personal Training",
          icon: <FaDumbbell className="w-8 h-8" />,
          desc: "Customized 1-on-1 sessions with expert coaches",
          bg: "bg-[#FF4C60]/10"
        },
        {
          title: "Exclusive Classes",
          icon: <FaUsers className="w-8 h-8" />,
          desc: "Members-only group training sessions",
          bg: "bg-[#222831]/10"
        },
        {
          title: "Zumba",
          icon: <FaHeartbeat className="w-8 h-8" />,
          desc: "High-energy dance fitness classes",
          bg: "bg-[#FF4C60]/10"
        },
        {
          title: "Yoga",
          icon: <FaSpa className="w-8 h-8" />,
          desc: "Mind-body connection sessions",
          bg: "bg-[#222831]/10"
        },
        {
          title: "Sauna",
          icon: <FaThermometerEmpty className="w-8 h-8" />,
          desc: "Premium recovery facilities",
          bg: "bg-[#FF4C60]/10"
        },
        {
          title: "24/7 Access",
          icon: <FiClock className="w-8 h-8" />,
          desc: "Workout anytime that fits your schedule",
          bg: "bg-[#222831]/10"
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className={`${service.bg} rounded-2xl p-8 shadow-md hover:shadow-lg transition-all`}
        >
          <div className="text-[#FF4C60] mb-6 flex justify-center">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
          <p className="text-[#393E46] text-center">{service.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
          {/* Promo Video Section */}
          <section className="py-20 bg-[#222831]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-6"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#EEEEEE] mb-4">
                  EXPERIENCE <span className="text-[#FF4C60]">IRON PEAK</span>
                </h2>
                <p className="text-xl text-[#EEEEEE] max-w-2xl mx-auto">
                  Take a tour of our world-class facility
                </p>
              </div>
              
             <motion.div
  whileHover={{ scale: 1.01 }}
  className="relative rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src={promoVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

            </motion.div>
          </section>

          {/* Testimonials Section */}
        <section className="py-20 bg-[#EEEEEE]">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#222831] mb-4">
          REAL <span className="text-[#FF4C60]">RESULTS</span>
        </h2>
        <p className="text-xl text-[#393E46] max-w-2xl mx-auto">
          Hear from our members about their transformation journeys
        </p>
      </motion.div>

      {/* Testimonials Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-md border border-[#FF4C60]/20 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative mb-4">
              <img
                src={t.image}
                alt={t.author}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#FF4C60] transition-transform duration-300 hover:rotate-1"
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#FF4C60] to-[#ff7183] p-2 rounded-full">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>
            <p className="text-[#393E46] italic mb-6 text-[16px] leading-relaxed">
              "{t.quote}"
            </p>
            <div>
              <h4 className="text-xl font-semibold text-[#222831] mb-1">{t.author}</h4>
              <p className="text-sm text-[#FF4C60] tracking-wide">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>

          {/* Final CTA */}
          <section className="py-20 bg-[#FF4C60] text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-6 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                READY TO <span className="text-[#222831]">TRANSFORM</span>?
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
                Your first week is on us. No pressure, no commitment.
              </p>
              
        <Link to="/services">      <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#222831] text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg cursor-pointer"
              >
                CLAIM YOUR FREE WEEK
              </motion.button></Link>
            </motion.div>
          </section>

          {/* Footer */}
        
        </div>
      )}
    </AnimatePresence>
  );
};

export default Homepage;