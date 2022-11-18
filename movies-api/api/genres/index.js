import express, { application } from "express";
import { genres } from "./genresData";

const router = express.Router();
router.get("/", (req, res) => {
  res.json(genres);
});
export default router;
