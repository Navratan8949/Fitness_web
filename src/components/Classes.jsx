import { useEffect, useRef } from "react";

const Classes = () => {
  const classList = [
    {
      name: "CrossFit",
      desc: "High-intensity training to push your limits",
      img: "https://source.unsplash.com/random/400x300/?crossfit",
    },
    {
      name: "Yoga",
      desc: "Find balance and flexibility",
      img: "https://source.unsplash.com/random/400x300/?yoga",
    },
    {
      name: "Bodybuilding",
      desc: "Build strength and muscle mass",
      img: "https://source.unsplash.com/random/400x300/?bodybuilding",
    },
  ];

  return (
    <section id="classes" className="py-24 animate-section bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-linear-gradient(to right, #00A3E0, #39FF14) bg-clip-text text-transparent">
          Our Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {classList.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl bg-[#2E2E2E]/50 backdrop-blur-lg border border-[#2E2E2E] hover:border-[#00A3E0] transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-gradient(to right, #00A3E0, #39FF14) opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-3 text-[#ffffff]">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
