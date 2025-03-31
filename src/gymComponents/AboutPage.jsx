import {
  Activity,
  Calendar,
  User,
  ChevronRight,
  Shield,
  Target,
  Medal,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import mjfit from "../assets/MJ_FITNESS_CLUB.jpg";

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  // Content for different tabs
  const tabContent = {
    story: {
      title: "Our Story",
      content:
        "Power Pulse Gym was founded in 2010 with a mission to transform the traditional gym experience. What started as a small local fitness center has grown into a community where people of all fitness levels can thrive. We believe fitness is not just about physical strength but about mental resilience and overall wellbeing.",
      image: mjfit,
    },
    mission: {
      title: "Our Mission",
      content:
        "We're dedicated to creating an inclusive environment where everyone feels empowered to pursue their fitness journey. Our mission is to provide state-of-the-art facilities, expert guidance, and a supportive community that inspires and motivates our members to exceed their expectations.",
      image: mjfit,
    },
    values: {
      title: "Our Values",
      content:
        "At Power Pulse, we operate with integrity, passion, and a commitment to excellence. We value innovation in fitness technology, personalized approaches to training, and creating genuine connections with our members. Every decision we make is guided by our commitment to your success.",
      image: mjfit,
    },
  };

  // Features with upgraded icons and descriptions
  const coreFeatures = [
    {
      icon: <Shield className="w-full h-full" />,
      title: "Expert Guidance",
      description:
        "Certified trainers with specialized expertise across fitness disciplines",
      color: "from-cyan-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: <Target className="w-full h-full" />,
      title: "Personalized Plans",
      description:
        "Custom fitness programs tailored to your specific goals and abilities",
      color: "from-purple-500 to-pink-600",
      delay: 0.3,
    },
    {
      icon: <Medal className="w-full h-full" />,
      title: "Premium Facilities",
      description:
        "State-of-the-art equipment in a modern, inspiring environment",
      color: "from-amber-500 to-orange-600",
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {/* Hero Section with Diagonal Split Design */}
      <div className="relative h-full pb-18">
        {/* Diagonal background split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-10"></div>
          <div className="absolute -inset-1/2 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-12 z-0 blur-3xl opacity-30"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto h-full flex items-center justify-center relative z-20 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-3  py-1 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-2">
                ESTABLISHED 2010
              </div>
              <h1 className="text-6xl font-bold leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  MJ Fitness
                </span>{" "}
                Club
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                More than a gym, we're a fitness movement committed to
                transforming lives through innovative training and genuine
                community.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-medium inline-flex items-center group"
              >
                <span>Our Facilities</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main image with stylized border */}
              <div className="relative h-[25rem] md:h-[30rem] overflow-hidden rounded-2xl mb-5 md:mb-0">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/384014748/BN/DD/EQ/199925747/gym-interior-designers.jpg"
                  alt="Power Pulse Gym Interior"
                  className="w-full h-full object-cover"
                />
                {/* Stylized overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-4xl font-bold">12+</p>
                      <p className="text-sm text-gray-300">Fitness Programs</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">25k</p>
                      <p className="text-sm text-gray-300">Members</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">8</p>
                      <p className="text-sm text-gray-300">Locations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-40 h-full  bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Tab Section */}
      <div className="py-14 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern bg-[length:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800/50 p-1 rounded-full backdrop-blur">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl font-bold mb-6">
                {tabContent[activeTab].title}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {tabContent[activeTab].content}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-gray-400">Access</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-gray-400">Commitment</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`img-${activeTab}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 transform rotate-3 rounded-2xl"></div>
                <img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  className="w-full h-full object-cover rounded-2xl relative z-10 border border-white/10"
                />

                {/* Decorative corner elements */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Features Section with Dramatic Design */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              What Sets Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Apart
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our approach to fitness combines cutting-edge technology, expert
              guidance, and a supportive community to create an unparalleled
              experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                className="relative"
              >
                <div className="p-8 bg-gray-800/50 backdrop-blur rounded-2xl border border-white/5 h-full relative overflow-hidden group">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg transform transition-transform group-hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${feature.color} opacity-20 blur-lg rounded-full group-hover:opacity-30 transition-opacity`}
                    ></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 blur-lg rounded-tl-full transform translate-x-12 translate-y-12`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <a
              href="#"
              className="inline-block text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn more about our approach{" "}
              <ChevronRight className="inline ml-1" />
            </a>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};
