// outLive.js – Wissenschaftlicher Output für Cube‑LIVE
// (WÜRFEL‑System – Shine-kompatibel, Präsentations-Layer)

document.addEventListener("DOMContentLoaded", () => {
  const out = document.getElementById("out");
  if (!out) return;

  out.innerText =
`IST:
Cube‑LIVE präsentiert die Ergebnisse aller Cubes.
Er verbindet IST, SOLL und Ableitung zu einem sichtbaren Gesamtbild.

SOLL:
Klare, verständliche Darstellung des Systemzustands.
Cube‑LIVE ist die sichtbare Oberfläche des ALL4ALL‑Systems.

Ableitung (Präsentation / Shine):

1. Klarheit → Informationen sichtbar machen.
2. Struktur → Ergebnisse ordnen.
3. Verbindung → Cubes zusammenführen.
4. Shine → Präsentation veredeln.
5. Live → Zustand in Echtzeit zeigen.

Cube‑LIVE = das sichtbare Gesicht des Systems.`;
});

// STATUS-MELDER FÜR CUBE-LIVE
window.cube_status["cubeLive"] = {
  ok: true,
  reason: "",
  needs: []
};

