"use client";
import React from "react";
import { useParams } from "next/navigation";
import MatchCard from "@/Components/dashboard/MatchCard";
import AddMatchOverlay from "../../../Components/admin/AddMatchOvelay";

const AdminPage = () => {
  const { adminAuthToken } = useParams();
  const [showAddMatchOverlay, setShowAddMatchOverlay] = React.useState(false);

  return (
    <div className=" h-screen w-full flex flex-col items-center justify-start text-white z-[1] relative">
      <div className=" w-full h-20" />
      <div className="h-[calc(100vh-5rem)] flex items-center justify-start m-[1%] w-[99%] rounded-xl border border-slate-700 p-2 gap-x-2">
        <div className=" bg-white/5 backdrop-blur-sm border border-slate-700 rounded-lg p-4 w-1/4 h-full flex flex-col">
          <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-700">
            <p className="text-xl">Manage Matches</p>
            <button
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
              onClick={() => setShowAddMatchOverlay(true)}
            >
              Add Match
            </button>
          </div>
        </div>
        <div className=" bg-white/5 backdrop-blur-sm border border-slate-700 rounded-lg p-2 h-full flex-1 flex flex-col gap-y-2">
          <MatchCard />
          <div className="flex-1 w-full rounded-xl m-1 flex justify-evenly items-center">
            <div className="w-[32%] h-full rounded-lg border border-slate-700 p-2">
              <p>Update Match Data Section</p>
            </div>
            <div className="w-[32%] h-full rounded-lg border border-slate-700 p-2">
              <p>Match Stock Order Book</p>
            </div>
            <div className="w-[32%] h-full rounded-lg border border-slate-700 p-2">
              <p>Users Stats</p>
            </div>
          </div>
        </div>
      </div>
      {showAddMatchOverlay && (
        <AddMatchOverlay onClose={() => setShowAddMatchOverlay(false)} />
      )}
    </div>
  );
};

export default AdminPage;
