import MatchCard from "../../Components/dashboard/MatchCard";
import "./dashboard.css";

const UserDashBoardPage = () => {
  const matchArrayData = new Array(3).fill({
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
              <h1 className="text-xl font-semibold">Your Matches</h1>
              <div className="overflow-y-auto flex flex-col gap-2 pr-2 flex-1 custom-scrollbar">
                {matchArrayData.map((_, index) => (
                  <MatchCard key={index} />
                ))}
              </div>
            </div>
            {/* Available Matches */}
            <div className="w-[40%] h-full flex flex-col" id="availableMatches">
              <h2 className="text-lg font-semibold mb-3">Available Matches</h2>
              <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center">
                <p className="text-slate-400">No available matches</p>
              </div>
            </div>
          </div>

          {/* Leaderboard + Guide */}
          <div className="flex-1 flex gap-4">
            {/* Leaderboard */}
            <div className="w-1/2 bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-bold mb-2">Leaderboard</h3>
              <p className="text-sm text-slate-300 mb-4">
                Top 123 traders this match
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>🏆 User1 - ₹23,000</li>
                <li>🥈 User2 - ₹21,500</li>
                <li>🥉 User3 - ₹19,800</li>
              </ul>
            </div>

            {/* Guide Buttons */}
            <div className="w-1/2 bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">New Here?</h3>
                <p className="text-sm text-slate-300">
                  Kickstart your journey:
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
                  Get Started
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition">
                  Watch Tutorial 📺
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Profile Section */}
        <div className="w-72 bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl p-4 shadow-md flex-col gap-4 hidden lg:flex">
          <div className="text-center">
            <h3 className="text-lg font-bold">Krishna 👋</h3>
            <p className="text-sm text-slate-400">krishna@cricmarket.com</p>
          </div>
          <div className="text-sm text-slate-300 space-y-2">
            <p>🎮 Matches Played: 12</p>
            <p>💰 Total Return: ₹1,23,000</p>
            <p>📈 ROI: 18.5%</p>
            <p>🧠 Avg Return/Match: ₹10,250</p>
          </div>
          <div className="mt-auto flex flex-col gap-2">
            <button className="w-full py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="w-full py-2 bg-red-600 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoardPage;
