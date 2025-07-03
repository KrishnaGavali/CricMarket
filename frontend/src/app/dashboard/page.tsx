import { Swords } from "lucide-react";
import Leaderboard from "../../Components/dashboard/LeaderBoard";
import MatchCard from "../../Components/dashboard/MatchCard";
import "./dashboard.css";
import Profile from "../../Components/dashboard/Profile";
import AvailableMatch from "../../Components/dashboard/AvailableMatch";
import Footer from "../../Components/Home/Footer";

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
    <>
      <div className="h-20 w-full" />
      <div className=" flex h-[100vh-4rem]">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 px-4 sm:px-8 py-3  backdrop-blur-sm rounded-xl sm:border sm:border-slate-700 z-[2] relative sm:mx-2 flex-1">
          <div className=" bg-transparent text-white flex z-[5] relative sm:flex-row justify-center gap-x-2 sm:justify-start">
            {/* NavBar Placeholder */}

            {/* Main Content */}

            <div className="  flex h-fit sm:h-full md:h-fit  w-[95%] sm:w-full mx-auto sm:mx-0 bg-white/5 border border-slate-700 backdrop-blur-sm rounded-xl ">
              {/* Your Matches */}
              <div className="w-full h-fit flex p-2 flex-col " id="yourMatches">
                <h1 className="text-xl font-semibold flex gap-x-3 items-center my-0.5">
                  <Swords className="text-yellow-500 h-5 w-5" />
                  <span>Your Matches</span>
                </h1>
                <div
                  className=" flex gap-x-2 custom-scrollbar w-full overflow-x-auto relative md:flex-col md:overflow-y-auto md:gap-y-2 md:h-[260px]"
                  style={{
                    scrollBehavior: "smooth",
                  }}
                >
                  {matchArrayData.map((_, index) => (
                    <MatchCard key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:flex-row sm:gap-x-2">
            <AvailableMatch />
            <Leaderboard />
          </div>
        </div>
        <div className=" hidden md:block lg:w-96 z-[2]">
          <Profile />
        </div>
      </div>
      <div />
      <Footer />
    </>
  );
};

export default UserDashBoardPage;
