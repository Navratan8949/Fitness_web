import React from "react";
import { BackgroundBubbles } from "./gymComponents/BackgroundBubbles";
import { HeroSection } from "./gymComponents/HeroSection";
import { WhyUsSection } from "./gymComponents/WhyUsSection";
import { MembershipSection } from "./gymComponents/MembershipSection";
import { AboutPage } from "./gymComponents/AboutPage";
import { ContactSection } from "./gymComponents/ContactSection";
import Navbar from "./gymComponents/Navbar";
import { Footer } from "./gymComponents/Footer";
import { CertificateSection } from "./gymComponents/Certificate";
import CustomCursor from "./gymComponents/CustomCurson";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* <CustomCursor />
      <BackgroundBubbles /> */}
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <CertificateSection />
      <MembershipSection />
      <AboutPage />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
