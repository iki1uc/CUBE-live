// /api/server.js

import express from "express";
import lvlup from "./lvlup.js";

const app = express();

app.get("/api/lvlup", lvlup);

app.listen(3000, () => {
  console.log("API läuft auf Port 3000");
});
