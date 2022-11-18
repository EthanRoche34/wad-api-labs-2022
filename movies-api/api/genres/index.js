import express, { application } from "express";
import Genre from "./genreModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

// Get all Genres
router.get("/", async (req, res) => {
  const genres = await Genre.find();
  res.status(200).json(genres);
});

export default router;
