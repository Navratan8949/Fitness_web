import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?gym')`,
      }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/80"></div>
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-gradient(to right, #00A3E0, #39FF14) bg-clip-text text-transparent leading-tight">
          Unleash Your Inner Beast
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Join PowerPulse Gym and transform your body with world-class training
          programs.
        </p>
        <button className="bg-linear-gradient(to right, #00A3E0, #39FF14) hover:bg-[#39FF14] px-12 py-5 rounded-full text-2xl font-bold text-[#ffffff] transition-all transform hover:scale-110 shadow-lg hover:shadow-[#39FF14]/50">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
