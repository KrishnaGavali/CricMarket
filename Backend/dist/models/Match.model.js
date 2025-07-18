"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const MatchSchema = new mongoose_1.Schema({
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
        type: mongoose_1.default.Schema.Types.Mixed,
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
exports.default = mongoose_1.default.model("Match", MatchSchema);
