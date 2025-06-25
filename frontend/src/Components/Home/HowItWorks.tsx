import Image from "next/image";
import React from "react";

const howItWorksData = [
  {
    imageSrc: "/portfolio.png",
    altText: "Build Your Virtual Portfolio",
    title: "Build Your Virtual Portfolio",
    description:
      "Use your virtual currency to buy and sell shares of your favorite cricket teams. Strategically build a powerful fantasy portfolio to get highest ROI as match unfolds.",
  },
  {
    imageSrc: "/sport.png",
    altText: "Real-Time Performance Impact",
    title: "Real-Time Performance Impact",
    description:
      "Team stock prices react instantly to real-time match events and player performances, making every moment count for your investments.",
  },
  {
    imageSrc: "/trade.png",
    altText: "Trade Instantly",
    title: "Trade Instantly.",
    description:
      "Fast trading engine ensures your buy and sell orders are executed in real-time, giving you the edge in a dynamic market.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col z-[2] relative text-white my-20">
      <p className="text-center text-white text-3xl font-semibold mb-10">
        How it Works
      </p>
      <div className="w-full flex">
        <div className="h-full w-full flex items-center justify-evenly flex-wrap">
          {howItWorksData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-800/10 backdrop-blur-xs border border-slate-500 rounded-2xl w-60 h-96 p-2.5 flex flex-col justify-between m-3"
            >
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={100}
                height={100}
                className="mx-auto my-2"
              />
              <p className="text-foreground text-center text-xl">
                {item.title}
              </p>
              <p className="text-white text-left text-base mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
