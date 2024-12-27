import express from "express";
import { handleGenerateShortUrl, handleAnalytics } from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateShortUrl);
router.get('/analytics/:shortId',handleAnalytics);

export default router;
