"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../app/dashboard/dashboard.css";
import { TrendingDown, TrendingUp } from "lucide-react";

const MatchCard = () => {
  const [runsInThisOver, setRunsInThisOver] = useState([
    "6",
    "1",
    "W",
    "4",
    "0",
    "NB",
    "WD",
    "WD",
    "1",
  ]); // Example runs in this over

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [runsInThisOver]); // run this effect whenever runs change

  return (
    <div className="matchCard border-white border rounded-lg h-fit bg-white/5 backdrop-blur-sm p-2 flex">
      {/* Left Section */}
      <div className="flex flex-col items-center px-1 h-full w-3/4 justify-center border-r border-blue-800">
        {/* Team Info Section */}
        <div
          className="flex items-center justify-start w-full h-full"
          id="teamInfo"
        >
          {/* Team A - Mumbai Indians */}
          <div className="flex items-center gap-2" id="teamA">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/MumbaiIndians.png"
                alt="Team A Logo"
                className="rounded-full"
                width={60}
                height={60}
              />
              <p className="text-xs text-gray-400">Batting</p>
              <p className="text-sm text-gray-400">145-3</p>
            </div>
            <p className="text-sm text-white ml-2">Mumbai Indians</p>
          </div>

          {/* VS Separator */}
          <div className="text-gray-400 font-bold text-xl mx-3">VS</div>

          {/* Team B - CSK */}
          <div className="flex items-center gap-2" id="teamB">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/csk.png"
                alt="Team B Logo"
                className="rounded-full"
                width={60}
                height={60}
              />
              <p className="text-xs text-gray-400">Bowling</p>
              <p className="text-sm text-gray-400 flex items-center gap-x-1">
                <span>178-5</span>
                <span className="text-white text-xs">(T)</span>
              </p>
            </div>
            <p className="text-sm text-white ml-2">Chennai Super Kings</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-1 items-center w-full h-full text-center px-2 gap-x-10 border-t border-blue-800 pt-2">
          <div>
            <p className="text-xs text-gray-400">Overs</p>
            <p className="text-sm text-white">15.2</p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-white">
              <span className="text-xs text-gray-400">Inings 1 :</span> 178/5
            </p>
            <p className="text-sm text-white">
              <span className="text-xs text-gray-400">Inings 2 :</span> 145/3
              <span className="text-gray-300 animate-pulse"> (live)</span>
            </p>
          </div>

          {/* This Over */}
          <div className="flex flex-col gap-1 w-44">
            <p className="text-center text-xs">This Over</p>
            <div
              className="overflow-x-auto custom-scrollbar2 w-42 scroll-smooth"
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
        className="h-full w-1/4 flex flex-col items-end justify-start p-1"
        id="userMatchStats"
      >
        <div className=" w-full h-full bg-white/10 rounded-lg backdrop-blur-sm border border-slate-700 flex flex-col p-1">
          <div className=" w-full flex justify-end text-green-500">
            <TrendingUp />
          </div>
          <div className=" border-b border-slate-400 pb-1">
            <div className="text-white flex gap-3 ">
              <p>
                <span>MI </span>
                <span className="text-green-500">₹155</span>
              </p>
              <TrendingUp className="text-green-500" />
            </div>
            <div className="text-white flex gap-3 ">
              <p>
                <span>CSK </span>
                <span className="text-red-500">₹40</span>
              </p>
              <TrendingDown className="text-red-500" />
            </div>
          </div>
          <div className="">
            <p>
              <span className="text-xs text-gray-400">ROI : </span>
              <span className="text-white text-sm">4556 (4.564%)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
