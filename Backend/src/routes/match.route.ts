import { Router } from "express";

const matchRouter = Router();
import { addMatch, getMatches } from "../controllers/match.controller";

matchRouter.post("/add", addMatch);
matchRouter.get("/get", getMatches);

export default matchRouter;
