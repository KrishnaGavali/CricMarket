"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchRouter = (0, express_1.Router)();
const match_controller_1 = require("../controllers/match.controller");
matchRouter.post("/add", match_controller_1.addMatch);
matchRouter.get("/get", match_controller_1.getMatches);
exports.default = matchRouter;
