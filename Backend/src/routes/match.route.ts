import { Router } from "express";

const matchRouter = Router();
import { addMatch } from "../controllers/match.controller";

matchRouter.post("/add", addMatch);

export default matchRouter;
