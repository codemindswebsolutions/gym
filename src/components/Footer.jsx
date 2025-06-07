import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you can add your API call or subscription logic

    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#222831] text-[#EEEEEE] pt-16 pb-8 px-4 sm:px-6 border-t-4 border-[#FF4C60]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Gym Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#FF4C60]">GYM BOX</h3>
            <p className="mb-6 text-[#EEEEEE]">
              Transforming lives through fitness since 2010. Our state-of-the-art facility offers premium equipment and expert coaching.
            </p>
            <div className="flex space-x-4 text-lg">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-[#393E46] p-3 rounded-full hover:bg-[#FF4C60] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-[#393E46] p-3 rounded-full hover:bg-[#FF4C60] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-[#393E46] p-3 rounded-full hover:bg-[#FF4C60] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="bg-[#393E46] p-3 rounded-full hover:bg-[#FF4C60] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Pricing', 'About Us', 'Testimonials', 'Blog'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-[#EEEEEE] hover:text-[#FF4C60] transition-colors"
                  >
                    <FaArrowRight className="mr-2 text-[#FF4C60] text-sm" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#FF4C60]" />
                <span>123 Fitness Avenue, Jubilee Hills, Hyderabad, Telangana 500033</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#FF4C60]" />
                <a href="tel:+919390228526" className="hover:text-[#FF4C60] transition-colors">
                  +91 93902 28526
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#FF4C60]" />
                <a href="mailto:info@gymbox.com" className="hover:text-[#FF4C60] transition-colors">
                  info@gymbox.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Newsletter</h4>
            <p className="mb-4 text-[#EEEEEE]">
              Subscribe to get fitness tips, special offers, and gym updates.
            </p>

            {subscribed ? (
              <p className="text-green-400 font-semibold">
                Thanks for subscribing! You will be notified soon.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md bg-[#393E46] border border-[#393E46] focus:border-[#FF4C60] focus:outline-none text-white placeholder-[#aaaaaa]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FF4C60] hover:bg-[#e63946] text-white font-semibold py-3 px-6 rounded-md transition-colors cursor-pointer"
                >
                  Subscribe Now
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#393E46] my-8"></div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#aaaaaa]">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} GYM BOX. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FF4C60] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF4C60] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FF4C60] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
