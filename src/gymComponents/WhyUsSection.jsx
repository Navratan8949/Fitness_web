import { Dumbbell, HeartPulse, Trophy } from "lucide-react";
import { motion } from "framer-motion"; // Adding animation library

export const WhyUsSection = () => {
  const whyUsItems = [
    {
      icon: <Trophy className="text-yellow-400 w-14 h-14" />,
      title: "Professional Training",
      description:
        "Our certified trainers provide personalized guidance to help you achieve your fitness goals.",
      color: "from-yellow-500/20 to-gray-800",
    },
    {
      icon: <HeartPulse className="text-red-400 w-14 h-14" />,
      title: "Modern Equipment",
      description:
        "State-of-the-art fitness equipment to support your workout journey.",
      color: "from-red-500/20 to-gray-800",
    },
    {
      icon: <Dumbbell className="text-blue-400 w-14 h-14" />,
      title: "Diverse Classes",
      description:
        "From HIIT to Yoga, we offer a wide range of classes for every fitness level.",
      color: "from-blue-500/20 to-gray-800",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Gradient */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-red-400"
        >
          Why Choose MJ Fitness Club
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyUsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${item.color} p-8 rounded-2xl text-center overflow-hidden group`}
            >
              {/* Card Overlay Effect */}
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Gradient Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-75"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
            Join Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};
