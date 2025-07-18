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
    enum: ["Batting", "Bowling", "Waiting"],
    default: "Waiting",
  },
  teamBCurrentStatus: {
    type: String,
    enum: ["Batting", "Bowling", "Waiting"],
    default: "Waiting",
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
    type: Number,
    required: true,
  },
  teamBStockPrice: {
    type: Number,
    required: true,
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
    enum: ["scheduled", "in-progress", "completed", "paused"],
    default: "scheduled",
  },
  onGoingMatchStatus: {
    type: Schema.Types.Mixed,
    enum: ["auction", "in_match", null],
    default: "auction",
  },
});

export default mongoose.model("Match", MatchSchema);
