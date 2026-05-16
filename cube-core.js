// --------------------------------------
// CUBE-LIVE MOTOR
// --------------------------------------

console.log("CUBELIVE aktiv – GIF/LEVEL Engine bereit.");

// GIF-Pfade
const CUBE_GIF_FULL = "iki1üc-COPYRIGHT.gif";
const CUBE_GIF_MINI = "2ui-copyright.gif";

// GIF anzeigen
function cubeShow(src) {
  const img = document.getElementById("cube_gif");
  if (!img) return;

  img.style.display = "none";
  img.onerror = () => {
    console.warn("FULL GIF fehlgeschlagen – MINI wird geladen.");
    img.src = CUBE_GIF_MINI;
  };
  img.onload = () => {
    img.style.display = "block";
  };

  img.src = src;
}

// LVL-UP Ablauf
async function cubeLVLUP() {
  try {
    const res = await fetch("/api/lvlup");
    const data = await res.json();

    if (data && data.full === true) {
      cubeShow(CUBE_GIF_FULL);
    } else {
      cubeShow(CUBE_GIF_MINI);
    }
  } catch (err) {
    console.error("API Fehler – MINI wird geladen.", err);
    cubeShow(CUBE_GIF_MINI);
  }
}

// Startzustand
window.addEventListener("load", () => {
  cubeShow(CUBE_GIF_MINI);
});

// --------------------------------------
// KONTAKT + JOB (dein Originalcode)
// --------------------------------------

function cubeKontakt(cubeID, projekt) {
  const bereit =
    cubeID + " → Bereitschaft 100% → Ressourcen stabil → Leitung frei → Projekt: " +
    projekt + " → Bereit zur Arbeitseinleitung.";

  const anker = document.getElementById("cube-anker");
  const status = document.getElementById("cube-status");

  if (!anker || !status) {
    console.error("Anker oder Status nicht gefunden – HTML-Seite ohne Cube-Layout.");
    return;
  }

  anker.textContent = bereit;

  const start =
    cubeID + " → Arbeit eingeleitet → Prozess läuft…";

  status.textContent = start;

  cubeJob(cubeID);
}

function cubeJob(cubeID) {
  switch (cubeID) {
    case "CUBE_0":
      console.log("Cube 0: System-Initialisierung läuft.");
      break;
    case "CUBE_1":
      console.log("Cube 1: RAW-Prozess gestartet.");
      break;
    case "CUBE_2":
      console.log("Cube 2: SAFE-Analyse aktiv.");
      break;
    case "CUBE_3":
      console.log("Cube 3: ADMIN-Verwaltung arbeitet.");
      break;
    case "CUBE_4":
      console.log("Cube 4: Harmonie-Abgleich läuft.");
      break;
    case "CUBE_5":
      console.log("Cube 5: Klärungsprozess aktiv.");
      break;
    default:
      console.warn("Unbekannter Cube:", cubeID);
  }
}
