import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g. API call)
    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="bg-[#EEEEEE] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#222831] mb-4"
        >
          GET IN <span className="text-[#FF4C60]">TOUCH</span>
        </motion.h1>
        <p className="text-xl text-[#393E46] max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for inquiries, feedback, or just to say hello.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-[#222831] mb-6 flex items-center justify-between">
            SEND US A MESSAGE
            {success && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-green-600 text-sm font-semibold bg-green-100 px-3 py-1 rounded-md"
              >
                Thank you for your message! We will contact you soon.
              </motion.span>
            )}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#393E46] mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:border-[#FF4C60] focus:ring-2 focus:ring-[#FF4C60] focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#393E46] mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:border-[#FF4C60] focus:ring-2 focus:ring-[#FF4C60] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#393E46] mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:border-[#FF4C60] focus:ring-2 focus:ring-[#FF4C60] focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF4C60] hover:bg-[#e63946] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <FaPaperPlane />
              <span>SEND MESSAGE</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#222831] text-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#FF4C60]">OUR LOCATION</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#FF4C60] mt-1 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold">Gym Box Fitness Center</h3>
                  <p>123 Fitness Avenue, Jubilee Hills</p>
                  <p>Hyderabad, Telangana 500033</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="text-[#FF4C60] mr-4 text-xl" />
                <a href="tel:+919390228526" className="hover:text-[#FF4C60] transition-colors">
                  +91 93902 28526
                </a>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-[#FF4C60] mr-4 text-xl" />
                <a href="mailto:info@gymbox.com" className="hover:text-[#FF4C60] transition-colors">
                  info@gymbox.com
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266589447586!2d78.4063713153556!3d17.44795050542933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x5c3ef0c7db6f017f!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">OPERATING HOURS</h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-[#FF4C60] font-bold pt-3">
                <span>24/7 Access</span>
                <span>For Pro Members</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919390228526"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </div>
  );
};

export default ContactPage;
