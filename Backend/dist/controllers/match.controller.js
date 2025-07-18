"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMatch = void 0;
const Match_model_1 = __importDefault(require("../models/Match.model"));
// filepath: D:/cricmarket/Backend/src/controllers/match.controller.ts
// Controller to add a new match
const addMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamA, teamALogo, teamB, teamBLogo, basePriceTeamA, basePriceTeamB, ipoStopTime, auctionEndTime, } = req.body;
        // Validate required fields
        if (!teamA || !teamALogo || !teamB || !teamBLogo) {
            return res.status(400).json({
                message: "Team names and logo URLs are required.",
            });
        }
        // Create a new match document
        const newMatch = new Match_model_1.default({
            teamAName: teamA,
            teamBName: teamB,
            teamALogoURL: teamALogo,
            teamBLogoURL: teamBLogo,
            teamAStockPrice: basePriceTeamA,
            teamBStockPrice: basePriceTeamB,
            ipoStopTime: new Date(ipoStopTime),
            auctionEndTime: new Date(auctionEndTime),
        });
        // Save the match to the database
        const savedMatch = yield newMatch.save();
        res.status(201).json({
            message: "Match added successfully.",
            match: savedMatch,
        });
    }
    catch (error) {
        console.error("Error adding match:", error);
        res.status(500).json({
            message: "An error occurred while adding the match.",
        });
    }
});
exports.addMatch = addMatch;
