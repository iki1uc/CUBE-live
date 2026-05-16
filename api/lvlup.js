// /api/lvlup.js

export default function lvlup(req, res) {
  // Deine FULL/MINI Logik
  const full = Math.random() > 0.5; // Beispiel

  res.json({ full });
}
