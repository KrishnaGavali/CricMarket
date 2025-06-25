import GameFlow from "@/Components/Home/GameFlow";
import HeroSection from "@/Components/Home/HeroSection";
import HowItWorks from "@/Components/Home/HowItWorks";

import React from "react";
import Footer from "../Components/Home/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <GameFlow />
      <Footer />
    </>
  );
};

export default HomePage;
