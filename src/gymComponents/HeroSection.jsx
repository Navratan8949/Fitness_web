import React, { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  Dumbbell,
  Star,
  PlayCircle,
  Users,
  Calendar,
  Award,
  Heart,
  RotateCw,
  Clock,
  Flame,
} from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activePromo, setActivePromo] = useState(0);
  const promos = [
    "50% OFF First Month",
    "Free Personal Training Session",
    "No Contract Required",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Add the animation styles dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(3deg); }
      }
      
      @keyframes float-reverse {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-3deg); }
      }
      
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes particle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        20% { opacity: 0.3; }
        80% { opacity: 0.3; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
      }
      
      @keyframes glow {
        0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.4)); }
        50% { filter: drop-shadow(0 0 15px rgba(147, 51, 234, 0.6)); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes bounce-pulse {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(10px); }
      }
      
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      .animate-particle { animation: particle 15s linear infinite; }
      .animate-glow { animation: glow 3s ease-in-out infinite; }
      .animate-bounce-pulse { animation: bounce-pulse 2s ease-in-out infinite; }
      
      .shimmer {
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
        background-size: 200% 100%;
        animation: shimmer 2.5s infinite;
      }
    `;
    document.head.appendChild(style);

    // Parallax effect
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    // Promo text rotation
    const promoInterval = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promos.length);
    }, 3000);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(promoInterval);
    };
  }, [promos.length]);

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - 0.5) * -15}px, ${
      (mousePosition.y - 0.5) * -15
    }px)`,
    transition: "transform 0.2s ease-out",
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen pb-5 flex items-center justify-center text-center text-white overflow-hidden pt-24 md:pt-32"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
          transform: `scale(${isHovering ? 1.03 : 1}) translate(${
            (mousePosition.x - 0.5) * -8
          }px, ${(mousePosition.y - 0.5) * -8}px)`,
          transformOrigin: "center",
          transition: "transform 10s ease-out",
        }}
      ></div>

      {/* Enhanced Overlays */}
      <div className="absolute inset-0 bg-black/70 z-1"></div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-black/70 z-2"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * -5}px, ${
            (mousePosition.y - 0.5) * -5
          }px)`,
          transition: "transform 0.8s ease-out",
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.8)_100%)] z-3"></div>

      {/* Moving Particles */}
      <div className="absolute inset-0 z-3">
        {Array.from({ length: 25 }).map((_, index) => {
          const size = Math.random() * 12 + 3;
          const isCircle = Math.random() > 0.4;
          const opacity = Math.random() * 0.25 + 0.1;
          const hue = Math.floor(Math.random() * 60) + 200; // Blue to purple hues

          return (
            <div
              key={index}
              className={`absolute ${
                isCircle ? "rounded-full" : "rotate-45"
              } animate-particle`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: isCircle
                  ? `hsla(${hue}, 90%, 70%, ${opacity})`
                  : "transparent",
                border: !isCircle
                  ? `1px solid hsla(${hue}, 90%, 70%, ${opacity})`
                  : "none",
                animationDuration: `${Math.random() * 12 + 8}s`,
                animationDelay: `${Math.random() * 4}s`,
                filter: Math.random() > 0.6 ? "blur(1.5px)" : "none",
              }}
            ></div>
          );
        })}
      </div>

      {/* Gym Equipment Silhouettes with Parallax */}
      <div className="absolute inset-0 overflow-hidden z-4">
        <Dumbbell
          className="absolute text-blue-500/15 animate-float"
          size={100}
          style={{
            ...parallaxStyle,
            top: "10%",
            left: "5%",
            animationDelay: "0s",
            animationDuration: "7s",
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.25))",
          }}
        />
        <Dumbbell
          className="absolute text-purple-500/15 animate-float-reverse"
          size={80}
          style={{
            ...parallaxStyle,
            top: "65%",
            right: "10%",
            animationDelay: "1.5s",
            animationDuration: "9s",
            filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.25))",
          }}
        />
        <Star
          className="absolute text-yellow-500/15 animate-pulse animate-glow"
          size={90}
          style={{
            ...parallaxStyle,
            bottom: "15%",
            left: "15%",
          }}
        />
        <Star
          className="absolute text-white/10 animate-spin-slow"
          size={70}
          style={{
            ...parallaxStyle,
            top: "25%",
            right: "20%",
          }}
        />
        <Award
          className="absolute text-blue-400/10 animate-float"
          size={100}
          style={{
            ...parallaxStyle,
            bottom: "25%",
            right: "25%",
            animationDelay: "2s",
            animationDuration: "8s",
            filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.15))",
          }}
        />
        <Flame
          className="absolute text-orange-500/10 animate-float"
          size={90}
          style={{
            ...parallaxStyle,
            top: "35%",
            left: "20%",
            animationDelay: "1s",
            filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.2))",
          }}
        />
        <Heart
          className="absolute text-red-400/10 animate-float-reverse"
          size={85}
          style={{
            ...parallaxStyle,
            bottom: "35%",
            left: "5%",
            animationDelay: "2s",
            filter: "drop-shadow(0 0 8px rgba(248, 113, 113, 0.2))",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 px-4 sm:px-6 lg:px-8 transition-all duration-1500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Promotion Banner */}
        <div className="inline-block mb-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-full backdrop-blur-lg border border-white/10 relative overflow-hidden">
          <div className="shimmer absolute inset-0"></div>
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase relative z-10 flex items-center">
            <Flame size={16} className="mr-2 text-orange-400" />
            {promos[activePromo]}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-none">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(96, 165, 250, 0.25))",
            }}
          >
            TRANSFORM
          </span>{" "}
          <br className="md:hidden" />
          <span className="relative inline-block">
            YOUR BODY
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl sm:max-w-2xl mx-auto text-gray-200 font-light leading-relaxed">
          Unlock Your Full Potential. Build Strength. Achieve Greatness.
          <span className="block mt-2 text-gray-300/80 text-base sm:text-lg">
            Join our community of fitness enthusiasts today!
          </span>
        </p>

        {/* Buttons */}
        <div className="space-x-4 sm:space-x-6 mb-12 sm:mb-16 flex justify-center flex-col sm:flex-row items-center gap-2">
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium tracking-wide transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-white/10 relative overflow-hidden group items-center"
            onMouseEnter={(e) => {
              const button = e.currentTarget;
              const rect = button.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const ripple = document.createElement("span");
              ripple.classList.add(
                "absolute",
                "w-full",
                "h-full",
                "rounded-full",
                "bg-white/30",
                "scale-0",
                "transition-transform",
                "duration-700"
              );
              ripple.style.top = "0";
              ripple.style.left = "0";
              ripple.style.transform = "scale(0)";
              ripple.style.transformOrigin = `${x}px ${y}px`;

              button.appendChild(ripple);

              setTimeout(() => {
                ripple.style.transform = "scale(4)";
                ripple.style.opacity = "0";
                setTimeout(() => {
                  button.removeChild(ripple);
                }, 700);
              }, 10);
            }}
          >
            <span className="relative z-10 flex items-center text-sm sm:text-base">
              <RotateCw
                size={16}
                className="mr-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              JOIN NOW
            </span>
          </button>
          <button
            className="bg-transparent border-2 border-white/40 backdrop-blur-md text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium tracking-wide hover:bg-white/10 transition duration-300 relative overflow-hidden"
            onClick={() => setVideoModal(true)}
          >
            <div className="flex items-center text-sm sm:text-base">
              <PlayCircle size={18} className="mr-2 text-blue-400" />
              WATCH TOUR
            </div>
          </button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 sm:mt-12">
          {[
            {
              icon: <Users size={24} />,
              value: "15+",
              label: "Expert Trainers",
              gradient: "from-blue-400 to-blue-600",
              iconColor: "text-blue-400",
            },
            {
              icon: <Calendar size={24} />,
              value: "30+",
              label: "Weekly Classes",
              gradient: "from-purple-400 to-purple-600",
              iconColor: "text-purple-400",
            },
            {
              icon: <Award size={24} />,
              value: "2000+",
              label: "Happy Members",
              gradient: "from-red-400 to-orange-500",
              iconColor: "text-orange-400",
            },
            {
              icon: <Clock size={24} />,
              value: "24/7",
              label: "Access",
              gradient: "from-green-400 to-green-500",
              iconColor: "text-green-400",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-black/40 px-6 py-4 sm:px-8 sm:py-5 rounded-xl border border-white/10 transform transition duration-500 hover:scale-105 hover:bg-black/50 group relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
                opacity: 0,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-1000`}
              ></div>
              <div
                className={`flex items-center justify-center mb-2 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-pulse z-10">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-300 mb-2 uppercase tracking-widest font-medium">
            Explore More
          </span>
          <div className="relative">
            <ChevronDown className="text-white/80" size={28} />
            <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-blue-500/30"></div>
          </div>
        </div>
      </div> */}

      {/* Video Modal */}
      {videoModal && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-lg transition-opacity duration-500"
          onClick={() => setVideoModal(false)}
        >
          <div
            className="relative bg-gray-900/90 p-4 sm:p-6 rounded-2xl w-11/12 sm:w-4/5 max-w-4xl border border-white/10 shadow-2xl transform transition-all duration-500 scale-100 opacity-100"
            style={{ backdropFilter: "blur(16px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 sm:-top-12 right-0 text-white bg-black/50 px-3 sm:px-4 py-2 rounded-full border border-white/10 backdrop-blur-md hover:bg-black/70 transition duration-300 flex items-center"
              onClick={() => setVideoModal(false)}
            >
              <span className="mr-2 text-sm sm:text-base">Close</span>
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rotate-45 w-full h-0.5 bg-white rounded-full top-1/2 -translate-y-1/2"></div>
                <div className="absolute inset-0 -rotate-45 w-full h-0.5 bg-white rounded-full top-1/2 -translate-y-1/2"></div>
              </div>
            </button>
            <div className="aspect-video bg-black flex items-center justify-center rounded-xl overflow-hidden border border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
              <span className="text-gray-400 flex flex-col items-center relative z-10">
                <PlayCircle
                  size={40}
                  className="mb-3 text-blue-500 animate-pulse"
                />
                <span className="text-sm sm:text-base">
                  Gym Tour Video Would Play Here
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
