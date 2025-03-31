import { useEffect, useRef } from "react";

const Trainers = () => {
  const trainersRef = useRef(null);

  const trainers = [
    {
      name: "Mike Ross",
      role: "Strength Coach",
      img: "https://source.unsplash.com/random/400x400/?trainer",
    },
    {
      name: "Sarah Lee",
      role: "Yoga Instructor",
      img: "https://source.unsplash.com/random/400x400/?yoga+trainer",
    },
    {
      name: "John Peak",
      role: "CrossFit Expert",
      img: "https://source.unsplash.com/random/400x400/?crossfit+trainer",
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-[#2E2E2E] animate-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-linear-gradient(to right, #00A3E0, #39FF14) bg-clip-text text-transparent">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group bg-[#0D0D0D]/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#2E2E2E] hover:border-[#39FF14] transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-[#ffffff]">
                  {trainer.name}
                </h3>
                <p className="text-[#00A3E0] text-lg">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
