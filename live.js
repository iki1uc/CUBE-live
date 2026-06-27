/* ============================================================
   CUBE‑LIVE · FINAL UPGRADE
   Echtzeit‑Motor · Frame · Sinn · Output · Status · Shine
   ============================================================ */

/* ------------------------------------------------------------
   1) EICH – Zeitstempel
------------------------------------------------------------ */
function EICH() {
  const now = new Date();
  return {
    datum: now.toLocaleDateString("de-DE"),
    uhrzeit: now.toLocaleTimeString("de-DE"),
    stamp: now.getTime(),
    iso: now.toISOString()
  };
}

/* ------------------------------------------------------------
   2) LIVE‑FRAME – Grundstruktur
------------------------------------------------------------ */
function liveFrame(input) {
  const schiene = liveGetSchiene();
  const mode    = liveGetCluster();
  const grav    = liveGetGrav();
  const eich    = EICH();

  return {
    cube: CUBE_ID,
    role: ROLE,
    in:   input,
    mode,
    grav,
    state: STATE,
    schiene,
    eich
  };
}

/* ------------------------------------------------------------
   3) LIVE‑SINN – Ableitung
------------------------------------------------------------ */
function liveSinn(data) {
  return {
    essenz:   data.out,
    richtung: data.schiene.next,
    zeit:     data.eich.uhrzeit,
    datum:    data.eich.datum,
    kern:     `${data.cube} / ${data.role}`
  };
}

/* ------------------------------------------------------------
   4) LIVE‑CORE – Motor
------------------------------------------------------------ */
function liveCore(input) {
  const frame = liveFrame(input);
  const sinn  = liveSinn(frame);

  return {
    ...frame,
    out: `LIVE(${frame.in})`,
    sinn
  };
}

/* ------------------------------------------------------------
   5) LIVE‑OUTPUT – Darstellung
------------------------------------------------------------ */
function live_out(data) {
  const out = document.getElementById("out");
  if (!out) return;

  out.innerHTML = `
    <div class="out-title">CUBE‑LIVE – Echtzeit</div>
    <div class="out-ist"><b>IN:</b> ${data.in}</div>
    <div class="out-soll"><b>OUT:</b> ${data.out}</div>
    <div class="out-mode"><b>MODE:</b> ${data.mode}</div>
    <div class="out-grav"><b>GRAV:</b> ${data.grav}</div>
    <div class="out-state"><b>STATE:</b> ${data.state}</div>
    <div class="out-schiene"><b>SCH:</b> ${data.schiene.prev} → LIVE → ${data.schiene.next}</div>
    <div class="out-eich"><b>EICH:</b> ${data.eich.uhrzeit} / ${data.eich.datum}</div>
    <div class="out-sinn"><b>7‑Sinn:</b> Essenz=${data.sinn.essenz}, Richtung=${data.sinn.richtung}</div>
    <div class="out-meta"><b>CUBE:</b> ${data.cube} / <b>ROLE:</b> ${data.role}</div>
  `;
}

/* ------------------------------------------------------------
   6) CUBE‑0 Input‑Pol
------------------------------------------------------------ */
function cube0Input(value) {
  const pol = document.querySelector(".cube0 .input-pol");
  if (!pol) return;

  pol.textContent = value;
  pol.style.boxShadow = "0 0 14px #00eaff, inset 0 0 6px #000";
}

/* ------------------------------------------------------------
   7) KLECKS‑MOVE (DE/FR)
------------------------------------------------------------ */
// Roh. Laut. Anfang.
// Impact brut. Début.

console.log("KLECKS‑MOVE aktiv – Rohimpuls gesetzt.");

/* ------------------------------------------------------------
   8) Wissenschaftlicher Output (Shine‑Layer)
------------------------------------------------------------ */
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

Ableitung (Shine):
1. Klarheit
2. Struktur
3. Verbindung
4. Shine
5. Live`;
});

/* ------------------------------------------------------------
   9) STATUS‑MELDER
------------------------------------------------------------ */
window.cube_status = window.cube_status || {};
window.cube_status["cubeLive"] = {
  ok: true,
  reason: "",
  needs: []
};

console.log("Cube‑LIVE Status: OK");

/* ------------------------------------------------------------
   10) WÜRFEL‑Berechnung
------------------------------------------------------------ */
function berechneWuerfel() {
  const p1 = Number(document.getElementById("p1").value);
  const p2 = Number(document.getElementById("p2").value);
  const p3 = Number(document.getElementById("p3").value);
  const p4 = Number(document.getElementById("p4").value);

  const summe = p1 + p2 + p3 + p4;
  document.getElementById("output").innerText = "Summe: " + summe;
}

/* ------------------------------------------------------------
   11) START‑INSTANCE – Verbindung zu index.html
------------------------------------------------------------ */
if (!localStorage.getItem("PREV")) localStorage.setItem("PREV", "index");
if (!localStorage.getItem("NEXT")) localStorage.setItem("NEXT", "LIVE");

console.log("core_alpha geladen – Cube‑Motor aktiv.");

// LIVE starten
const result = liveCore("start");
live_out(result);

/* ============================================================
   ENDE · CUBE‑LIVE UPGRADE
============================================================ */
