import React from "react";

const matchHistory = [
  { teamA: "CSK", teamB: "MI", return: 420, rate: "+12.3%" },
  { teamA: "RCB", teamB: "KKR", return: -150, rate: "-4.2%" },
  { teamA: "GT", teamB: "LSG", return: 880, rate: "+22.5%" },
  { teamA: "DC", teamB: "SRH", return: -70, rate: "-1.7%" },
  { teamA: "RR", teamB: "PBKS", return: 320, rate: "+8.1%" },
  { teamA: "CSK", teamB: "RCB", return: 1200, rate: "+30.0%" },
];

const Profile = () => {
  return (
    <div className="max-w-72 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-lg lg:flex flex-col gap-6 text-white z-[2] lg:max-w-96 lg:w-full">
      {/* Header */}
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-bold tracking-wide">Krishna Gavali 👋</h3>
        <p className="text-sm text-gray-400">krishnagavali973@gmail.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 border-y border-blue-800 py-2">
        <div className="flex flex-col items-center">
          <p>Matches</p>
          <p className="text-xl text-white font-medium">35</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Total Return</p>
          <p className="text-xl text-white font-medium">₹4573</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Return Rate</p>
          <p className="text-xl text-green-400 font-medium">+45.7%</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Best Return</p>
          <p className="text-xl text-yellow-300 font-medium">₹1200</p>
        </div>
      </div>

      {/* Match History */}
      <div className="flex flex-col gap-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent custom-scrollbar mb-2">
        <h4 className="text-lg font-semibold text-white mt-2">Match History</h4>
        {matchHistory.map((match, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white/10 px-3 py-2 rounded-md text-sm text-gray-200"
          >
            <div className="flex-1 truncate">
              <span className="text-white font-medium">
                {match.teamA} vs {match.teamB}
              </span>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  match.return >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                ₹{match.return}
              </p>
              <p
                className={`text-xs ${
                  match.return >= 0 ? "text-green-300" : "text-red-300"
                }`}
              >
                {match.rate}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-3">
        <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold transition-all duration-200 ease-in-out cursor-pointer">
          Edit Profile
        </button>
        <button className="w-full py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl font-semibold transition-all duration-200 ease-in-out cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
