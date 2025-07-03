import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const AvailableMatch = () => {
  return (
    <div
      className="w-[95%] mx-auto sm:w-[52%] h-full flex-col bg-white/10 rounded-lg my-2 sm:my-0 p-2 border border-slate-700 backdrop-blur-sm flex items-start justify-center"
      id="availableMatches"
    >
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-x-2 text-white">
        <Clock className="text-yellow-400 w-5 h-5" />
        <span>Upcoming Matches</span>
      </h2>
      <div className=" flex items-center justify-center mx-auto">
        <div className=" w-32 flex flex-col items-center justify-center rounded-lg bg-white/10 border border-slate-700 backdrop-blur-sm p-2">
          <div>
            <Image
              src="/MumbaiIndians.png"
              alt="Team A Logo"
              className="rounded-full"
              width={60}
              height={60}
            />
            <p className="text-sm text-center">MI</p>
          </div>
          <div className="text-gray-400">VS</div>
          <div>
            <Image
              src="/csk.png"
              alt="Team B Logo"
              className="rounded-full"
              width={60}
              height={60}
            />
            <p className="text-sm text-center">CSK</p>
          </div>
          <button className="w-full p-1 bg-blue-800 text-white rounded-md hover:bg-blue-950 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-800">
            Join Match
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableMatch;
