// START-INSTANCE · verbindet index.html mit CUBE-LIVE

// 1) Standard-Schiene setzen, falls leer
if (!localStorage.getItem("PREV")) localStorage.setItem("PREV", "index");
if (!localStorage.getItem("NEXT")) localStorage.setItem("NEXT", "LIVE");

// 2) CUBE-LIVE laden
const script = document.createElement("script");
script.src = "live.js";
document.head.appendChild(script);

// 3) Wenn geladen → LIVE starten
script.onload = () => {
  const result = liveCore("start");
  live_out(result);
};



