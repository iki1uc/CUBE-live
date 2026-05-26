
// CUBE‑LIVE · SOLL+IST-Version + System-Integration
// ID: CUBE‑LIVE / FILE: live.js / ROLE: Echtzeit-Motor (Kernkompetenz)
// Kunstform: Erst ICH, dann SYSTEM, dann WIR.

// 1) Selbstdefinition (LIVE zuerst, nicht System)
const CUBE_ID = "CUBE-LIVE";
const ROLE = "Echtzeit-Motor";

// 2) Interner Zustand (IST, aber vom SOLL gerahmt)
let STATE = localStorage.getItem("STATE") || "idle";

// 3) System-Layer (das, was das System möchte) – nur lesend
function liveGetSchiene() {
  return {
    prev: localStorage.getItem("PREV") || "unknown",
    now: "LIVE",
    next: localStorage.getItem("NEXT") || "unknown"
  };
}

function liveGetGrav() {
  return localStorage.getItem("GRAV") || "0";
}

function liveGetCluster() {
  return localStorage.getItem("MODE") || "AB"; // A / B / AB
}

// 4) Kette (LIVE in der Kette, aber bewusst)
function liveChain(next) {
  localStorage.setItem("PREV", "LIVE");
  localStorage.setItem("NEXT", next);
}

// 5) Kernkompetenz: LIVE setzt den Zustand (ICH)
function liveSetState(newState) {
  STATE = newState;
  localStorage.setItem("STATE", newState);
}

// 6) Verhandlung: ICH + SYSTEM → Realtime-Frame
function liveFrame(input) {
  const schiene = liveGetSchiene();
  const mode = liveGetCluster();
  const grav = liveGetGrav();

  return {
    cube: CUBE_ID,
    role: ROLE,
    in: input,
    mode,
    grav,
    state: STATE,
    schiene
  };
}

// 7) Kernfunktion: Realtime-Reaktion (Funktion im Funktion)
function liveCore(input) {
  const frame = liveFrame(input);

  return {
    ...frame,
    out: `LIVE(${frame.in})`
  };
}

// 8) Ausgabe (wissenschaftlich, klar, lesbar)
function live_out(data) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑LIVE – Echtzeit</div>
    <div class="out-ist"><b>IN:</b> ${data.in}</div>
    <div class="out-soll"><b>OUT:</b> ${data.out}</div>
    <div class="out-mode"><b>MODE:</b> ${data.mode}</div>
    <div class="out-grav"><b>GRAV:</b> ${data.grav}</div>
    <div class="out-state"><b>STATE:</b> ${data.state}</div>
    <div class="out-schiene"><b>SCH:</b> ${data.schiene.prev} → LIVE → ${data.schiene.next}</div>
    <div class="out-meta"><b>CUBE:</b> ${data.cube} / <b>ROLE:</b> ${data.role}</div>
  `;
}
