import React from "react";
import Image from "next/image";
import "../../app/dashboard/dashboard.css";

const MatchCard = () => {
  const RunsInThisOver = ["6", "1", "W", "4", "0", "NB", "WD", "WD", "1"]; // Example runs in this over

  return (
    <div className="matchCard border-white border rounded-lg h-fit bg-white/5 backdrop-blur-sm p-2 flex">
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
          <div className="text-white font-bold text-xl mx-3">VS</div>

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
              <span className="text-gray-300"> (ongoing)</span>
            </p>
          </div>

          {/* This Over */}
          <div className="flex flex-col gap-1 w-32">
            <p className="text-center text-xs">This Over</p>
            <div className="overflow-x-auto custom-scrollbar2 w-44">
              <div className="flex items-center gap-x-2 pr-2">
                {RunsInThisOver.map((run, index) => (
                  <div
                    key={index}
                    className={`min-w-[20px] max-w-[20px] h-fit  max=tems-center justify-center rounded-sm border border-white
                      ${
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

      {/* Right section (reserved for future user stats maybe?) */}
      <div className="h-full w-1/4 bg-red-500" id="userMatchStats"></div>
    </div>
  );
};

export default MatchCard;
