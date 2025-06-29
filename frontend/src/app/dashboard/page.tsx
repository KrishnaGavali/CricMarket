import { Swords } from "lucide-react";
import Leaderboard from "../../Components/dashboard/LeaderBoard";
import MatchCard from "../../Components/dashboard/MatchCard";
import "./dashboard.css";
import Image from "next/image";

const UserDashBoardPage = () => {
  const matchArrayData = new Array(2).fill({
    teamA: {
      name: "Team A",
      score: "120/5",
    },
    teamB: {
      name: "Team B",
      score: "115/7",
    },
  });

  return (
    <div className="w-full min-h-screen bg-transparent text-white flex flex-col gap-4 font-sans z-[5] relative">
      {/* NavBar Placeholder */}
      <div className="h-20 w-full" />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-7rem)] gap-4">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Current Match Section */}
          <div className="bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-md flex gap-3 h-80">
            {/* Your Matches */}
            <div
              className="w-[60%] h-full flex border-r border-blue-800 p-3 flex-col gap-4"
              id="yourMatches"
            >
              <h1 className="text-xl font-semibold flex gap-x-3 items-center">
                <Swords className="text-yellow-500 h-5 w-5" />
                <span>Your Matches</span>
              </h1>
              <div
                className="overflow-y-auto flex flex-col gap-2 pr-2 flex-1 custom-scrollbar"
                style={{
                  scrollBehavior: "smooth",
                }}
              >
                {matchArrayData.map((_, index) => (
                  <MatchCard key={index} />
                ))}
              </div>
            </div>
            {/* Available Matches */}
            <div className="w-[40%] h-full flex flex-col" id="availableMatches">
              <h2 className="text-lg font-semibold mb-3">Available Matches</h2>
              <div className="flex-1 bg-white/5 rounded-lg grid items-center justify-center">
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
          </div>

          {/* Leaderboard + Guide */}
          <div className="flex-1 flex gap-4">
            <Leaderboard />

            {/* Guide Buttons */}
            <div className="flex-1 bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col justify-between">
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-start gap-4 shadow-md backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="text-blue-400">📌</span> New Here?
                </h2>
                <p className="text-sm text-gray-300 leading-snug">
                  Kickstart your journey and dive into the market of cricket
                  stocks. Learn the ropes or jump right in!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button className="w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow">
                    🚀 Start Onboarding
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-200 shadow">
                    📺 Watch Tutorial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Profile Section */}
        <div className="w-72 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-md hidden lg:flex flex-col gap-5 text-white font-sans">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-semibold tracking-wide">Krishna 👋</h3>
            <p className="text-sm text-gray-400">krishna@cricmarket.com</p>
          </div>

          <div className="text-sm text-gray-300 space-y-3">
            <div className="flex justify-between items-center">
              <span>🎮 Matches Played</span>
              <span className="text-white font-medium">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span>💰 Total Return</span>
              <span className="text-green-400 font-semibold">₹1,23,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>📈 ROI</span>
              <span className="text-purple-400 font-semibold">18.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>🧠 Avg/Match</span>
              <span className="text-yellow-300 font-semibold">₹10,250</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold transition">
              Edit Profile
            </button>
            <button className="w-full py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl font-semibold transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoardPage;
