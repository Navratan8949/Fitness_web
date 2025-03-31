import React, { useState, useEffect } from "react";
import {
  Dumbbell,
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Calendar,
  Phone,
  LogIn,
  Clock,
  Star,
  Package,
  Bell,
} from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isClassesOpen, setIsClassesOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll event to change navbar appearance when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    setIsClassesOpen(false);
  };

  const toggleClassesMenu = (e) => {
    e && e.preventDefault();
    setIsClassesOpen(!isClassesOpen);
  };

  const navClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${
      scrolled
        ? "py-2 bg-black/95 backdrop-blur-lg shadow-lg "
        : "py-4 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md"
    }
  `;

  const NavLink = ({ href, icon, children, isActive, hasSubmenu, onClick }) => (
    <a
      href={href}
      className={`
        relative group flex items-center px-3 py-2 rounded-lg transition duration-300 text-sm md:text-base
        ${
          isActive
            ? "text-blue-400 bg-blue-900/20"
            : "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
        }
      `}
      onClick={onClick || (() => handleLinkClick(href.substring(1)))}
    >
      {icon && (
        <span className="mr-2 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {hasSubmenu && (
        <ChevronDown
          size={14}
          className={`ml-1 transition-transform duration-300 ${
            isClassesOpen ? "rotate-180" : ""
          }`}
        />
      )}

      {/* Animated underline effect */}
      <span
        className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
        transition-all duration-300 rounded-full opacity-80
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
      `}
      ></span>

      {/* Glow effect on hover */}
      <span
        className={`
        absolute inset-0 rounded-lg bg-blue-500/0 transition-all duration-300
        ${
          isActive
            ? "bg-blue-500/5 shadow-inner"
            : "group-hover:bg-blue-500/5 group-hover:shadow-inner"
        }
      `}
      ></span>
    </a>
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo with enhanced animation */}
        <div
          className="flex items-center text-white text-2xl font-bold tracking-wider group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative mr-3">
            <Dumbbell
              size={28}
              className={`
                text-blue-400 transform transition-all duration-700 
                ${isHovered ? "rotate-180 scale-110" : ""}
              `}
            />
            {/* Animated ring effect */}
            <span
              className={`
              absolute inset-0 rounded-full bg-blue-500/20 
              transition-all duration-500 
              ${isHovered ? "scale-150 opacity-0" : "scale-100 opacity-0"}
            `}
            ></span>
          </div>
          <div className="flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transition-all duration-300">
              MJ FITNESS
            </span>
            <span className="text-xs text-gray-400 tracking-widest -mt-1 transition-all duration-300 group-hover:text-gray-300">
              CLUB CENTER
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle - Enhanced */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              text-white p-2 rounded-lg focus:outline-none transition-all duration-300
              ${
                isMenuOpen
                  ? "bg-red-900/30 hover:bg-red-800/40 rotate-90"
                  : "bg-blue-900/30 hover:bg-blue-800/40"
              }
            `}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links - Desktop - Enhanced */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink
            href="#home"
            icon={<Home size={18} />}
            isActive={activeLink === "home"}
          >
            Home
          </NavLink>

          <div className="relative">
            <NavLink
              href="#classes"
              icon={<Calendar size={18} />}
              isActive={activeLink === "classes"}
              hasSubmenu={true}
              onClick={(e) => {
                e.preventDefault();
                toggleClassesMenu();
              }}
            >
              Classes
            </NavLink>

            {/* Enhanced Classes Dropdown */}
            <div
              className={`
                absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-blue-900/30 
                rounded-lg shadow-xl overflow-hidden transition-all duration-300 w-48
                ${
                  isClassesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }
              `}
            >
              {/* Triangle indicator */}
              <div className="absolute -top-2 right-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></div>

              <div className="py-1">
                {[
                  {
                    href: "#strength",
                    label: "Strength Training",
                    icon: <Dumbbell size={14} />,
                  },
                  {
                    href: "#cardio",
                    label: "Cardio Classes",
                    icon: <Star size={14} />,
                  },
                  {
                    href: "#yoga",
                    label: "Yoga & Flexibility",
                    icon: <Package size={14} />,
                  },
                  {
                    href: "#hiit",
                    label: "HIIT Workouts",
                    icon: <Bell size={14} />,
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-300 hover:bg-blue-900/20 hover:text-blue-400 transition-colors duration-200 flex items-center"
                    onClick={() => handleLinkClick(item.href.substring(1))}
                  >
                    <span className="mr-2 text-blue-400">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            href="#trainers"
            icon={<Users size={18} />}
            isActive={activeLink === "trainers"}
          >
            Trainers
          </NavLink>

          <NavLink
            href="#schedule"
            icon={<Clock size={18} />}
            isActive={activeLink === "schedule"}
          >
            Schedule
          </NavLink>

          <NavLink
            href="#contact"
            icon={<Phone size={18} />}
            isActive={activeLink === "contact"}
          >
            Contact
          </NavLink>
        </div>

        {/* Enhanced Membership CTA Button */}
        <div className="hidden md:block">
          <a
            href="#membership"
            className="
              relative overflow-hidden flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
              bg-size-200 bg-pos-0 hover:bg-pos-100
              text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-blue-900/30
              border border-blue-400/20 transition-all duration-500 
              hover:shadow-blue-500/40 hover:scale-105 group
            "
          >
            {/* Background shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <LogIn
              size={18}
              className="mr-2 transition-transform group-hover:rotate-12 duration-300"
            />
            <span>Join Now</span>
          </a>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`
          md:hidden transition-all duration-500 overflow-hidden border-t border-blue-900/30
          ${
            isMenuOpen
              ? "max-h-screen py-4 bg-gray-900/95 backdrop-blur-xl"
              : "max-h-0 border-t-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 space-y-2">
          {/* Mobile Menu Links */}
          {[
            { href: "#home", label: "Home", icon: <Home size={18} /> },
            { href: "#trainers", label: "Trainers", icon: <Users size={18} /> },
            { href: "#schedule", label: "Schedule", icon: <Clock size={18} /> },
            { href: "#contact", label: "Contact", icon: <Phone size={18} /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                flex items-center p-3 rounded-lg transition-all duration-300
                ${
                  activeLink === item.href.substring(1)
                    ? "bg-blue-900/20 text-blue-400 shadow-inner shadow-blue-900/20"
                    : "text-gray-300 hover:bg-blue-900/10 hover:text-blue-400"
                }
              `}
              onClick={() => handleLinkClick(item.href.substring(1))}
            >
              <span className="mr-3 text-blue-400">{item.icon}</span>{" "}
              {item.label}
            </a>
          ))}

          {/* Classes Menu with Toggle */}
          <div>
            <div
              className={`
                flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-300
                ${
                  activeLink === "classes"
                    ? "bg-blue-900/20 text-blue-400 shadow-inner shadow-blue-900/20"
                    : "text-gray-300 hover:bg-blue-900/10 hover:text-blue-400"
                }
              `}
              onClick={toggleClassesMenu}
            >
              <div className="flex items-center">
                <Calendar size={18} className="mr-3 text-blue-400" /> Classes
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-500 ${
                  isClassesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Enhanced Mobile Classes Submenu */}
            <div
              className={`
                pl-8 space-y-1 overflow-hidden transition-all duration-500
                ${isClassesOpen ? "max-h-60 mt-2 mb-2" : "max-h-0"}
              `}
            >
              {[
                {
                  href: "#strength",
                  label: "Strength Training",
                  icon: <Dumbbell size={16} />,
                },
                {
                  href: "#cardio",
                  label: "Cardio Classes",
                  icon: <Star size={16} />,
                },
                {
                  href: "#yoga",
                  label: "Yoga & Flexibility",
                  icon: <Package size={16} />,
                },
                {
                  href: "#hiit",
                  label: "HIIT Workouts",
                  icon: <Bell size={16} />,
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-3 text-gray-400 hover:text-blue-400 rounded-lg transition-all duration-300"
                  onClick={() => handleLinkClick(item.href.substring(1))}
                >
                  <span className="mr-2 text-blue-500">{item.icon}</span>{" "}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Membership CTA Button */}
          <div className="pt-4">
            <a
              href="#membership"
              className="
                relative overflow-hidden block text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600
                bg-size-200 bg-pos-0 hover:bg-pos-100
                text-white px-4 py-3 rounded-lg font-medium shadow-lg
                border border-blue-400/20 transition-all duration-300 group
              "
            >
              {/* Background shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

              <LogIn
                size={18}
                className="inline-block mr-2 transition-transform group-hover:rotate-12 duration-300"
              />
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
