import React, { useState } from "react";
import { X, Trash2, PlusCircle } from "lucide-react";

const AddMatchOverlay = ({ onClose }: { onClose: () => void }) => {
  const [matchDetails, setMatchDetails] = useState({
    teamA: "",
    teamALogo: "",
    teamB: "",
    teamBLogo: "",
    basePriceTeamA: "",
    basePriceTeamB: "",
    ipoStopTime: "",
    auctionEndTime: "",
  });

  const [errors, setErrors] = useState({
    teamALogo: "",
    teamBLogo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMatchDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateUrl = (url: string) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*\/?$/;
    return urlPattern.test(url);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!validateUrl(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Invalid URL. Please provide a valid Cloudinary URL.",
      }));
      setMatchDetails((prev) => ({ ...prev, [name]: "" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setMatchDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClearFields = () => {
    setMatchDetails({
      teamA: "",
      teamALogo: "",
      teamB: "",
      teamBLogo: "",
      basePriceTeamA: "",
      basePriceTeamB: "",
      ipoStopTime: "",
      auctionEndTime: "",
    });
    setErrors({
      teamALogo: "",
      teamBLogo: "",
    });
  };

  const handleSubmit = () => {
    if (!matchDetails.teamALogo || !matchDetails.teamBLogo) {
      alert("Please provide valid URLs for both team logos.");
      return;
    }
    console.log("Match Details Submitted:", matchDetails);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/5 backdrop-blur-md border border-slate-700 rounded-lg p-6 w-[90%] max-w-4xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-700">
          <h2 className="text-xl text-white flex items-center gap-2">
            <PlusCircle className="text-blue-500" />
            Add New Match
          </h2>
          <button
            onClick={onClose}
            className="text-white bg-red-600 px-3 py-1 rounded-md hover:bg-red-500 transition-all flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="teamA"
            placeholder="Team A Name"
            value={matchDetails.teamA}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          <input
            type="text"
            name="teamB"
            placeholder="Team B Name"
            value={matchDetails.teamB}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          <input
            type="text"
            name="teamALogo"
            placeholder="Team A Logo URL (Cloudinary)"
            value={matchDetails.teamALogo}
            onChange={handleUrlChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          {errors.teamALogo && (
            <p className="text-red-500 text-sm">{errors.teamALogo}</p>
          )}
          <input
            type="text"
            name="teamBLogo"
            placeholder="Team B Logo URL (Cloudinary)"
            value={matchDetails.teamBLogo}
            onChange={handleUrlChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          {errors.teamBLogo && (
            <p className="text-red-500 text-sm">{errors.teamBLogo}</p>
          )}
          <input
            type="number"
            name="basePriceTeamA"
            placeholder="Base Price for Team A (₹)"
            value={matchDetails.basePriceTeamA}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          <input
            type="number"
            name="basePriceTeamB"
            placeholder="Base Price for Team B (₹)"
            value={matchDetails.basePriceTeamB}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white"
          />
          <input
            type="datetime-local"
            name="ipoStopTime"
            value={matchDetails.ipoStopTime}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white [&::-webkit-calendar-picker-indicator]:filter-white"
          />
          <input
            type="datetime-local"
            name="auctionEndTime"
            value={matchDetails.auctionEndTime}
            onChange={handleChange}
            className="bg-transparent border border-slate-700 rounded-md p-2 text-white [&::-webkit-calendar-picker-indicator]:filter-white"
          />
        </div>
        <div className="mt-6 flex justify-end gap-x-4">
          <button
            onClick={handleClearFields}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-all flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear Fields
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            Add Match
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMatchOverlay;
