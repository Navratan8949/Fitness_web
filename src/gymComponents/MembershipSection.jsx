import React, { useState } from "react";
import { Check, Crown, Star, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion"; // Adding animation library

export const MembershipSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const memberships = [
    {
      title: "Basic",
      price: "$29.99",
      accent: "blue",
      icon: null,
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Gym Access (6AM-10PM)",
        "Basic Classes (5 per month)",
        "Locker Room Access",
        "Initial Fitness Assessment",
      ],
      limitations: ["No Personal Training", "No Advanced Classes"],
      popular: false,
      buttonText: "Get Started",
    },
    {
      title: "Premium",
      price: "$49.99",
      accent: "purple",
      icon: <Star className="text-yellow-400" />,
      description: "Our most popular plan for dedicated fitness enthusiasts",
      features: [
        "Unlimited 24/7 Gym Access",
        "Unlimited Classes",
        "2 Personal Training Sessions/Month",
        "Nutrition Consultation (Monthly)",
        "Sauna & Steam Room Access",
        "50% Off Protein Shakes",
      ],
      limitations: [],
      popular: true,
      buttonText: "Choose Premium",
    },
    {
      title: "Elite",
      price: "$79.99",
      accent: "red",
      icon: <Crown className="text-yellow-400" />,
      description: "The ultimate fitness experience with exclusive perks",
      features: [
        "All Premium Features",
        "Priority 24/7 Gym Access",
        "4 Personal Training Sessions/Month",
        "Monthly Body Composition Analysis",
        "Custom Meal Planning",
        "Supplement Discounts (25% off)",
        "Exclusive Elite Member Events",
        "Guest Pass (2 per month)",
      ],
      limitations: [],
      popular: false,
      buttonText: "Go Elite",
    },
  ];

  const getAccentColor = (accent) => {
    switch (accent) {
      case "blue":
        return {
          bg: "from-blue-600 to-blue-800",
          light: "bg-blue-500/10",
          border: "border-blue-500/20",
          text: "text-blue-500",
          hover: "group-hover:bg-blue-600",
          shadow: "shadow-blue-500/20",
        };
      case "purple":
        return {
          bg: "from-purple-600 to-purple-800",
          light: "bg-purple-500/10",
          border: "border-purple-500/20",
          text: "text-purple-500",
          hover: "group-hover:bg-purple-600",
          shadow: "shadow-purple-500/20",
        };
      case "red":
        return {
          bg: "from-red-600 to-red-800",
          light: "bg-red-500/10",
          border: "border-red-500/20",
          text: "text-red-500",
          hover: "group-hover:bg-red-600",
          shadow: "shadow-red-500/20",
        };
      default:
        return {
          bg: "from-blue-600 to-blue-800",
          light: "bg-blue-500/10",
          border: "border-blue-500/20",
          text: "text-blue-500",
          hover: "group-hover:bg-blue-600",
          shadow: "shadow-blue-500/20",
        };
    }
  };

  // Animation variants (similar to WhyUsSection)
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
    <div className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern - matching WhyUsSection */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Additional background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-600 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-600 filter blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 rounded-full bg-red-600 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Gradient (matching WhyUsSection) */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-blue-400"
        >
          Membership Plans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16"
        >
          Choose the perfect membership plan that fits your fitness goals and
          budget. All plans include access to our state-of-the-art facilities.
        </motion.p>

        {/* Membership Cards - Using motion.div and similar styling to WhyUsSection */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memberships.map((membership, index) => {
            const colors = getAccentColor(membership.accent);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/30
                  ${
                    membership.popular
                      ? "md:-mt-4 md:mb-4 border-white/20 shadow-xl"
                      : ""
                  }`}
              >
                {/* Popular badge */}
                {membership.popular && (
                  <div
                    className={`absolute top-0 right-0 bg-gradient-to-r ${colors.bg} text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10`}
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Card Overlay Effect (similar to WhyUsSection) */}
                <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Header */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center mb-3">
                    {membership.icon && (
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className="mr-2"
                      >
                        {membership.icon}
                      </motion.div>
                    )}
                    <h3
                      className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300`}
                    >
                      {membership.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    {membership.description}
                  </p>
                  <div className="flex items-end">
                    <span className={`text-4xl font-extrabold ${colors.text}`}>
                      {membership.price}
                    </span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-0 relative z-10">
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-400 tracking-wider mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {membership.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <div
                            className={`mr-3 mt-1 p-1 rounded-full ${colors.light}`}
                          >
                            <Check size={14} className={colors.text} />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {membership.limitations &&
                    membership.limitations.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm uppercase text-gray-400 tracking-wider mb-3">
                          Limitations
                        </h4>
                        <ul className="space-y-3">
                          {membership.limitations.map(
                            (limitation, limitIndex) => (
                              <motion.li
                                key={limitIndex}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + limitIndex * 0.1 }}
                              >
                                <div className="mr-3 mt-1 p-1 rounded-full bg-gray-700/40">
                                  <X size={14} className="text-gray-500" />
                                </div>
                                <span className="text-gray-400">
                                  {limitation}
                                </span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Call to action */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-4 py-4 rounded-xl font-semibold flex items-center justify-center 
                      transition-all duration-300 bg-gradient-to-r ${colors.bg} text-white shadow-lg ${colors.shadow}`}
                  >
                    <span>{membership.buttonText}</span>
                    <ChevronRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>

                {/* Bottom Gradient Border - like WhyUsSection */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-75"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Button - matching WhyUsSection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Compare Plans In Detail
          </motion.button>
        </motion.div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            All plans include access to locker rooms and basic amenities.
            <br />
            Cancel or change your membership at any time.
          </p>
        </div>
      </div>
    </div>
  );
};
