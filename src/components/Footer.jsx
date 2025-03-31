const Footer = () => {
  return (
    <footer className="py-16 bg-[#0D0D0D] border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-extrabold text-[#00A3E0] mb-6">
              PowerPulse
            </h3>
            <p className="text-gray-400 text-lg">
              Transforming lives through fitness and dedication.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffffff]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="hover:text-[#39FF14] transition-colors"
                >
                  Trainers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffffff]">
              Contact
            </h4>
            <p className="text-gray-400 text-lg">123 Fitness Ave</p>
            <p className="text-gray-400 text-lg">info@powerpulse.com</p>
            <p className="text-gray-400 text-lg">+1 234 567 890</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffffff]">
              Newsletter
            </h4>
            <p className="text-gray-400 text-lg mb-4">
              Stay updated with our latest offers.
            </p>
            <form className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-[#2E2E2E] text-[#ffffff] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
              />
              <button className="bg-[#00A3E0] hover:bg-[#39FF14] px-6 py-3 rounded-lg text-[#ffffff] font-semibold transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-[#39FF14] text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#39FF14] text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#39FF14] text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-center text-gray-500 mt-10 text-lg">
          © 2025 PowerPulse Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
