import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Membership", href: "#membership" },
  ];

  const services = [
    "Personal Training",
    "Group Classes",
    "Nutrition Counseling",
    "Fitness Assessment",
  ];

  const socials = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Logo and Description */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
              Power Pulse Gym
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transform your body and mind with our professional fitness
              programs designed to push your limits.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-red-600 transition-all duration-300"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 5, color: "#3b82f6" }}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className="mr-3">{social.icon}</div>
                  {social.name}
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700 flex-grow"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 rounded-r-lg transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-500"
        >
          <p>© 2025 MJ Fitness Club. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
