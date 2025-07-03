"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../app/dashboard/dashboard.css";
import { TrendingDown, TrendingUp } from "lucide-react";

const MatchCard = () => {
  const [runsInThisOver, setRunsInThisOver] = useState<Array<string>>([]); // Example runs in this over

  useEffect(() => {
    setRunsInThisOver(["6", "1", "W", "4", "0", "NB", "WD", "WD", "1"]);
  }, []);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [runsInThisOver]); // run this effect whenever runs change

  return (
    <div className="border border-slate-700 rounded-lg h-fit backdrop-blur-sm p-1 flex flex-col min-w-full items-center">
      {/* Left Section */}
      <div className="flex flex-col items-start w-full justify-around md:flex-row">
        {/* Team Info Section */}
        <div className="w-full flex items-center justify-evenly">
          <div
            className="flex items-center  w-full flex-col gap-y-1  pr-2 md:pr-0 min-[375px]:flex-row min-[375px]:justify-evenly pb-3 md:pb-0"
            id="teamInfo"
          >
            {/* Team A - Mumbai Indians */}
            <div
              className="flex items-center gap-0 flex-col w-[45%]"
              id="teamA"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src="/MumbaiIndians.png"
                  alt="Team A Logo"
                  className="rounded-full h-16 w-16"
                  width={60}
                  height={60}
                />
                <p className="text-sm text-white ml-2">MI</p>
                <p className="text-xs text-gray-400">Batting</p>
                <p className="text-sm text-gray-400">145-3</p>
              </div>
            </div>

            {/* VS Separator */}
            <div className="text-gray-400 font-bold text-xl w-[10%]">VS</div>

            {/* Team B - CSK */}
            <div className="flex items-center flex-col w-[45%]" id="teamB">
              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src="/csk.png"
                  alt="Team B Logo"
                  className="rounded-full h-16 w-16"
                  width={60}
                  height={60}
                />
                <p className="text-sm text-white ml-2">CSK</p>
                <p className="text-xs text-gray-400">Bowling</p>
                <p className="text-sm text-gray-400 flex items-center gap-x-1">
                  <span>178-5</span>
                  <span className="text-white text-xs">(T)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col items-center justify-evenly w-full text-center gap-y-5 border-y border-blue-800 py-3 mb-3 md:mb-0 md:border-y-0 md:border-0 md:border-blue-800 md:py-0 md:w-[125%] md:h-full md:flex-col md:mr-3">
          <div className="flex items-center justify-evenly w-full">
            <div className="w-1/2 md:w-fit">
              <p className="text-xs text-gray-400">Overs</p>
              <p className="text-sm text-white">15.2</p>
            </div>

            <div className="flex flex-col justify-start items-center w-1/2 md:w-fit">
              <div className=" flex flex-col items-start">
                <p className="text-sm text-white">
                  <span className="text-xs text-gray-400">Inings 1 :</span>{" "}
                  178/5
                </p>
                <p className="text-sm text-white">
                  <span className="text-xs text-gray-400">Inings 2 :</span>{" "}
                  145/3
                  <span className="text-gray-300 animate-pulse"> (live)</span>
                </p>
              </div>
            </div>
          </div>

          {/* This Over */}
          <div className="flex flex-col gap-1 w-44">
            <p className="text-center text-xs">This Over</p>
            <div
              className="overflow-x-auto custom-scrollbar w-42 scroll-smooth"
              ref={scrollRef}
            >
              <div className="flex items-center gap-x-2 pr-2">
                {runsInThisOver.map((run, index) => (
                  <div
                    key={index}
                    className={`min-w-[20px] max-w-[20px] h-fit max=tems-center justify-center rounded-sm border border-white ${
                      run === "W"
                        ? "bg-red-800"
                        : run === "0"
                        ? "bg-gray-700"
                        : "bg-blue-800"
                    }`}
                  >
                    <span className="text-white text-xs">{run}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full flex flex-col items-end justify-start p-1"
        id="userMatchStats"
      >
        <div className=" bg-white/10 rounded-lg backdrop-blur-sm border border-slate-700 p-1 w-full">
          <div className=" pb-1 flex items-center justify-evenly">
            <div className="text-white flex flex-col">
              <span>MI </span>
              <p className="flex gap-x-1">
                <span className="text-green-500">₹155</span>
                <TrendingUp className="text-green-500" />
              </p>
            </div>
            <div className="text-white flex flex-col">
              <span>CSK </span>
              <p className="flex gap-x-1">
                <span className="text-red-500">₹40</span>
                <TrendingDown className="text-red-500" />
              </p>
            </div>
            <div className="">
              <p className="flex flex-col lg:flex-row lg:items-center lg:gap-x-1">
                <span className="text-xs text-gray-400">ROI : </span>
                <span className="text-white text-sm">₹4556</span>
                <span className="text-white text-sm">(4.564%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center w-fit h-fit p-3 bg-blue-800 rounded-lg lg:h-[15%]">
        Enter into Match
      </button>
    </div>
  );
};

export default MatchCard;
