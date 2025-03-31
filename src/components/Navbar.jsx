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
} from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isClassesOpen, setIsClassesOpen] = useState(false);

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
  };

  const navClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${
      scrolled
        ? "py-2 bg-black/95 backdrop-blur-lg shadow-lg border-b border-blue-900/30"
        : "py-4 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md"
    }
  `;

  const NavLink = ({ href, icon, children, isActive, hasSubmenu }) => (
    <a
      href={href}
      className={`
        relative group flex items-center px-3 py-2 rounded-lg transition duration-300
        ${
          isActive
            ? "text-blue-400 bg-blue-900/20"
            : "text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"
        }
      `}
      onClick={() => handleLinkClick(href.substring(1))}
    >
      {icon && <span className="mr-2">{icon}</span>}
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
        absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
        group-hover:w-full transition-all duration-300 rounded-full
        ${isActive ? "w-full" : ""}
      `}
      ></span>
    </a>
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold tracking-wider group">
          <Dumbbell
            size={28}
            className="mr-2 text-blue-400 transform transition duration-700 group-hover:rotate-180"
          />
          <div className="flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              POWER PULSE
            </span>
            <span className="text-xs text-gray-400 tracking-widest -mt-1">
              FITNESS CENTER
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white bg-blue-900/30 p-2 rounded-lg focus:outline-none transition-transform duration-300 hover:bg-blue-800/30"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
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
                setIsClassesOpen(!isClassesOpen);
              }}
            >
              Classes
            </NavLink>

            {/* Classes Dropdown */}
            <div
              className={`
                absolute top-full right-0 mt-1 bg-gray-900/95 backdrop-blur-xl border border-blue-900/30 
                rounded-lg shadow-xl overflow-hidden transition-all duration-300 w-48
                ${
                  isClassesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }
              `}
            >
              <div className="py-1">
                <a
                  href="#strength"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                >
                  Strength Training
                </a>
                <a
                  href="#cardio"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                >
                  Cardio Classes
                </a>
                <a
                  href="#yoga"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                >
                  Yoga & Flexibility
                </a>
                <a
                  href="#hiit"
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                >
                  HIIT Workouts
                </a>
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

        {/* Membership CTA Button */}
        <div className="hidden md:block">
          <a
            href="#membership"
            className="
              flex items-center bg-gradient-to-r from-blue-600 to-purple-600 
              text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-blue-900/30
              border border-blue-400/20 transition-all duration-300 
              hover:shadow-blue-500/40 hover:scale-105
            "
          >
            <LogIn size={18} className="mr-2" />
            <span>Join Now</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden bg-gray-900/95 border-t border-blue-900/30
          ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"}
        `}
      >
        <div className="container mx-auto px-4 space-y-2">
          <a
            href="#home"
            className={`
              flex items-center p-2 rounded-lg 
              ${
                activeLink === "home"
                  ? "bg-blue-900/20 text-blue-400"
                  : "text-gray-300"
              }
            `}
            onClick={() => handleLinkClick("home")}
          >
            <Home size={18} className="mr-2" /> Home
          </a>

          <div>
            <div
              className={`
                flex items-center justify-between p-2 rounded-lg cursor-pointer
                ${
                  activeLink === "classes"
                    ? "bg-blue-900/20 text-blue-400"
                    : "text-gray-300"
                }
              `}
              onClick={() => setIsClassesOpen(!isClassesOpen)}
            >
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" /> Classes
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isClassesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Mobile Classes Submenu */}
            <div
              className={`
                pl-8 space-y-1 overflow-hidden transition-all duration-300
                ${isClassesOpen ? "max-h-40 mt-1 mb-2" : "max-h-0"}
              `}
            >
              <a
                href="#strength"
                className="block p-2 text-gray-400 hover:text-blue-400 rounded-lg"
              >
                Strength Training
              </a>
              <a
                href="#cardio"
                className="block p-2 text-gray-400 hover:text-blue-400 rounded-lg"
              >
                Cardio Classes
              </a>
              <a
                href="#yoga"
                className="block p-2 text-gray-400 hover:text-blue-400 rounded-lg"
              >
                Yoga & Flexibility
              </a>
              <a
                href="#hiit"
                className="block p-2 text-gray-400 hover:text-blue-400 rounded-lg"
              >
                HIIT Workouts
              </a>
            </div>
          </div>

          <a
            href="#trainers"
            className={`
              flex items-center p-2 rounded-lg 
              ${
                activeLink === "trainers"
                  ? "bg-blue-900/20 text-blue-400"
                  : "text-gray-300"
              }
            `}
            onClick={() => handleLinkClick("trainers")}
          >
            <Users size={18} className="mr-2" /> Trainers
          </a>

          <a
            href="#schedule"
            className={`
              flex items-center p-2 rounded-lg 
              ${
                activeLink === "schedule"
                  ? "bg-blue-900/20 text-blue-400"
                  : "text-gray-300"
              }
            `}
            onClick={() => handleLinkClick("schedule")}
          >
            <Clock size={18} className="mr-2" /> Schedule
          </a>

          <a
            href="#contact"
            className={`
              flex items-center p-2 rounded-lg 
              ${
                activeLink === "contact"
                  ? "bg-blue-900/20 text-blue-400"
                  : "text-gray-300"
              }
            `}
            onClick={() => handleLinkClick("contact")}
          >
            <Phone size={18} className="mr-2" /> Contact
          </a>

          {/* Mobile Membership CTA Button */}
          <div className="pt-2">
            <a
              href="#membership"
              className="
                block text-center bg-gradient-to-r from-blue-600 to-purple-600 
                text-white px-4 py-3 rounded-lg font-medium shadow-lg
                border border-blue-400/20
              "
            >
              <LogIn size={18} className="inline-block mr-2" />
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
