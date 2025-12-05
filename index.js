import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

// 🟢 ROOT
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Multi Downloader API is running!" });
});

// 🟣 TIKTOK DOWNLOADER
app.get("/api/tiktok", async (req, res) => {
  try {
    const url = req.query.url;
    const api = await axios.get(`https://api.tiklydown.me/api/download?url=${url}`);
    res.json(api.data);
  } catch (e) {
    res.json({ error: "Gagal mengambil data TikTok" });
  }
});

// 🔵 INSTAGRAM DOWNLOADER
app.get("/api/instagram", async (req, res) => {
  try {
    const url = req.query.url;
    const api = await axios.get(`https://api.igdownloader.app/api/v1/get?url=${url}`);
    res.json(api.data);
  } catch (e) {
    res.json({ error: "Gagal mengambil data Instagram" });
  }
});

// 🔴 FACEBOOK DOWNLOADER
app.get("/api/facebook", async (req, res) => {
  try {
    const url = req.query.url;
    const api = await axios.get(`https://api.fbdownload.io/api?url=${url}`);
    res.json(api.data);
  } catch (e) {
    res.json({ error: "Gagal mengambil data Facebook" });
  }
});

// ⚫ YOUTUBE DOWNLOADER (video + audio)
app.get("/api/youtube", async (req, res) => {
  try {
    const url = req.query.url;
    const api = await axios.get(`https://api.youtubedownloader.io/api?url=${url}`);
    res.json(api.data);
  } catch (e) {
    res.json({ error: "Gagal mengambil data YouTube" });
  }
});

// 🟢 RUN SERVER (untuk deploy vercel/railway, export saja)
app.listen(3000, () => console.log("Server running on port 3000"));
