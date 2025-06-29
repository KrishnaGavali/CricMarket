import React from "react";
import { Trophy, TrendingUp } from "lucide-react";

const sampleLeaderboard = [
  { username: "User1", return: 23000 },
  { username: "User2", return: 21500 },
  { username: "User3", return: 19800 },
];

const medalColors = ["text-yellow-400", "text-gray-300", "text-yellow-700"];

const Leaderboard = ({ data = sampleLeaderboard }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full max-w-md backdrop-blur-sm text-sm text-gray-200 space-y-2 shadow-md">
      <div className="flex items-center gap-2 text-white text-lg font-semibold mb-3">
        <Trophy className="text-yellow-400 w-5 h-5" />
        Leaderboard
      </div>
      <ul className="divide-y divide-white/10 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
        {data.map((user, index) => (
          <li
            key={user.username}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 text-center">
                {index < 3 ? (
                  <span className={`text-xl ${medalColors[index]}`}>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">{index + 1}.</span>
                )}
              </span>
              <span className="font-medium">{user.username}</span>
            </div>
            <div className="flex items-center gap-1 text-green-400">
              ₹{user.return.toLocaleString()}
              <TrendingUp className="w-3 h-3" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
