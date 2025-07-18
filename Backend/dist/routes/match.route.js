"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchRouter = (0, express_1.Router)();
const match_controller_1 = require("../controllers/match.controller");
matchRouter.post("/add", match_controller_1.addMatch);
exports.default = matchRouter;
