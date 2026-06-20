import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tickets } from "./data/tickets.js";

const app = express();
const port = Number(process.env.PORT) || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distPath = path.join(projectRoot, "dist");

app.get("/api/tickets", (req, res) => {
  if (req.query.empty === "true") {
    res.json([]);
    return;
  }

  res.json(tickets.filter((ticket) => ticket.status === "open"));
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

app.listen(port, () => {
  console.log(`API server ready on http://127.0.0.1:${port}`);
});
