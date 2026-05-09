
console.log("core_alpha geladen – Cube-Motor aktiv.");

// Cube 0 Input-Pol
function cube0Input(value) {
  const pol = document.querySelector(".cube0 .input-pol");
  if (!pol) return;

  pol.textContent = value;
  pol.style.boxShadow = "0 0 14px #00eaff, inset 0 0 6px #000";
}
