import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const CertificateSection = () => {
  const certificateVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const certificates = [
    {
      title: "Certified Personal Trainer",
      issuer: "National Academy of Sports Medicine (NASM)",
      year: "2023",
      color: "from-blue-500/20 to-gray-800",
    },
    {
      title: "Strength & Conditioning Specialist",
      issuer: "International Sports Sciences Association (ISSA)",
      year: "2022",
      color: "from-red-500/20 to-gray-800",
    },
    {
      title: "Gym Management Professional",
      issuer: "American Council on Exercise (ACE)",
      year: "2021",
      color: "from-yellow-500/20 to-gray-800",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-red-400"
        >
          Our Certifications
        </motion.h2>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={certificateVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${cert.color} p-8 rounded-2xl text-center overflow-hidden group`}
            >
              {/* Card Overlay Effect */}
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <Award className="text-yellow-400 w-14 h-14" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {cert.title}
                </h3>
                <p className="text-gray-200 text-lg mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">Earned in {cert.year}</p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-gray-500/30 rounded-xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-75"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
            Meet Our Team
          </button>
        </motion.div>
      </div>
    </div>
  );
};
