import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen relatvie">
      <Image
        src={"/HeroSectionImg.png"}
        alt=""
        width={500}
        height={900}
        className=" absolute w-full h-full"
        quality={0}
      />
      <div className=" w-full h-[10%] " id="navBarPlaceholder" />

      <div className="flex">
        <div className="h-[90%] w-full p-10 z-[2] relative">
          <div className="  h-full w-full text-foreground">
            <p className="mt-24 font-semibold text-center text-white text-5xl  sm:text-6xl md:text-8xl">
              Cric<span className="text-foreground">Market</span>
            </p>
            <p className="text-white text-base text-center mx-auto font-semibold mt-1">
              Predict, <span className="text-blue-700">Invest, </span> and{" "}
              <span className="text-blue-700">Win (Virtually!)</span>
            </p>
            <div className="text-white md:max-w-[75%] lg:max-w-[50%] xl:max-w-[35%] mx-auto mt-4">
              <p className="font-semibold text-center text-white text-sm md:text-base">
                Cric<span className="text-foreground">Market</span> is a dynamic
                fantasy cricket market where your virtual currency powers
                strategic, real-time team stock trading and puts your cricket
                knowledge to the ultimate test.
              </p>
            </div>
            <div className=" w-full flex mt-2 justify-center items-center sm:gap-x-2 gap-y-2 flex-col sm:flex-row">
              <button className="px-4 py-2 bg-blue-800 border border-blue-800 text-white rounded-md cursor-pointer hover:bg-blue-950 hover:text-white transition-all duration-300 text-base md:text-xl">
                Start Playing Now
              </button>
              <button className="px-4 py-2  border border-white text-white rounded-md cursor-pointer hover:bg-gray-950 hover:text-white transition-all duration-300 text-base md:text-xl">
                How to Play (YouTube)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
