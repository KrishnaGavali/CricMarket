import { Request, Response } from "express";
import Match from "../models/Match.model";

// filepath: D:/cricmarket/Backend/src/controllers/match.controller.ts

// Controller to add a new match
export const addMatch = async (req: Request, res: Response): Promise<any> => {
  try {
    const {
      teamA,
      teamALogo,
      teamB,
      teamBLogo,
      basePriceTeamA,
      basePriceTeamB,
      ipoStopTime,
      auctionEndTime,
    } = req.body;

    // Validate required fields
    if (!teamA || !teamALogo || !teamB || !teamBLogo) {
      return res.status(400).json({
        message: "Team names and logo URLs are required.",
      });
    }

    // Create a new match document
    const newMatch = new Match({
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
    const savedMatch = await newMatch.save();

    res.status(201).json({
      message: "Match added successfully.",
      match: savedMatch,
    });
  } catch (error) {
    console.error("Error adding match:", error);
    res.status(500).json({
      message: "An error occurred while adding the match.",
    });
  }
};
