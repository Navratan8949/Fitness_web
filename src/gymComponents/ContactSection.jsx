import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log(formData); // Add real submission logic here
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1000);
  };

  const contactItems = [
    {
      icon: <MapPin className="text-blue-400 w-8 h-8 md:w-12 md:h-12" />,
      text: "123 Fitness Street, Gym City, FT 12345",
      color: "from-blue-500/20 to-gray-800",
    },
    {
      icon: <Phone className="text-green-400 w-8 h-8 md:w-12 md:h-12" />,
      text: "(555) 123-4567",
      color: "from-green-500/20 to-gray-800",
    },
    {
      icon: <Mail className="text-red-400 w-8 h-8 md:w-12 md:h-12" />,
      text: "contact@powerpulsegym.com",
      color: "from-red-500/20 to-gray-800",
    },
  ];

  const followIcons = [
    {
      name: "instagram",
      icon: <Instagram className="w-5 h-5 text-white" />,
      bg: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
      hover: "hover:shadow-pink-500/50",
    },
    {
      name: "facebook",
      icon: <Facebook className="w-5 h-5 text-white" />,
      bg: "bg-blue-600",
      hover: "hover:shadow-blue-500/50",
    },
    {
      name: "youtube",
      icon: <Youtube className="w-5 h-5 text-white" />,
      bg: "bg-red-600",
      hover: "hover:shadow-red-500/50",
    },
    {
      name: "twitter",
      icon: <Twitter className="w-5 h-5 text-white" />,
      bg: "bg-sky-500",
      hover: "hover:shadow-sky-400/50",
    },
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Animated Background Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 -left-96 w-192 h-192 rounded-full border border-blue-500/10 animate-pulse"></div>
        <div className="absolute -bottom-96 -right-96 w-192 h-192 rounded-full border border-red-500/10 animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header with Gradient */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-red-400">
            Contact Power Pulse Gym
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reach out to us for membership inquiries, training information, or
            facility questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Reach Out to Us
            </h3>

            <div className="space-y-4 md:space-y-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${item.color} p-4 md:p-6 rounded-xl md:rounded-2xl flex items-center overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20`}
                >
                  {/* Card Overlay Effect */}
                  <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center">
                    <div className="mr-4 transition-transform duration-500 group-hover:rotate-12">
                      {item.icon}
                    </div>
                    <span className="text-gray-200 text-base md:text-lg">
                      {item.text}
                    </span>
                  </div>

                  {/* Bottom Gradient Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-75"></div>
                </div>
              ))}
            </div>

            {/* Hours of Operation - Enhanced */}
            <div className="relative bg-gradient-to-br from-blue-500/10 to-gray-800 p-5 md:p-6 rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 mt-8">
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Hours of Operation
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex justify-between border-b border-gray-700/50 pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-300">6:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700/50 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-300">7:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-blue-300">8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>
            </div>

            {/* New Social Media Section */}
            <div className="relative bg-gradient-to-br from-purple-500/10 to-gray-800 p-5 md:p-6 rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-4">
                  {followIcons.map(({ name, icon, bg, hover }) => (
                    <a
                      key={name}
                      href={`#${name}`}
                      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ${bg} transition-all duration-300 shadow-md ${hover} hover:scale-110`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75"></div>
            </div>
          </div>

          {/* Contact Form - Enhanced */}
          <div className="relative bg-gradient-to-br from-gray-800 to-black p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 order-1 md:order-2">
            {/* Card Overlay Effect */}
            <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                Drop Us a Line
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-300 text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-3 md:p-4 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-gray-200 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full p-3 md:p-4 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-gray-200 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full p-3 md:p-4 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-gray-200 placeholder-gray-500"
                      required
                    ></textarea>
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 md:py-4 rounded-lg md:rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group ${
                      isSubmitting
                        ? "opacity-80"
                        : "hover:shadow-lg hover:shadow-blue-500/20"
                    }`}
                  >
                    {/* Button Background Shimmer Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"></span>

                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75"></div>
          </div>
        </div>

        {/* New Location Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Find Us
            </h3>
            <div className="w-full h-64 md:h-80 bg-gray-700 rounded-lg overflow-hidden relative">
              {/* Placeholder for an actual map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28492.663089492333!2d75.7720324!3d26.7895629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743399684389!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // ✅ React expects an object for styles
                  allowFullScreen="" // ✅ camelCase in JSX
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
