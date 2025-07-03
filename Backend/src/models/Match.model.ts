import mongoose, { Schema } from "mongoose";

const MatchSchema = new Schema({
  teamAName: {
    type: String,
    required: true,
  },
  teamBName: {
    type: String,
    required: true,
  },
  teamALogoURL: {
    type: String,
    required: true,
  },
  teamBLogoURL: {
    type: String,
    required: true,
  },
  teamACurrentStatus: {
    type: String,
    enum: ["Batting", "Bowling"],
    default: "Batting",
  },
  teamBCurrentStatus: {
    type: String,
    enum: ["Batting", "Bowling"],
    default: "Bowling",
  },
  teamAScore: {
    type: Number,
    default: 0,
  },
  teamBScore: {
    type: Number,
    default: 0,
  },
  teamAWickets: {
    type: Number,
    default: 0,
  },
  teamBWickets: {
    type: Number,
    default: 0,
  },
  teamAStockPrice: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  teamBStockPrice: {
    type: Number,
    default: 0,
  },
  overs: {
    type: Number,
    default: 0,
  },
  thisOver: {
    type: Array,
    default: [],
  },
  matchStatus: {
    type: String,
    enum: ["scheduled", "in-progress", "completed"],
    default: "scheduled",
  },
});

export default mongoose.model("Match", MatchSchema);
