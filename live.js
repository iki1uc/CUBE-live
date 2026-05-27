function EICH() {
  const now = new Date();
  return {
    datum: now.toLocaleDateString("de-DE"),
    uhrzeit: now.toLocaleTimeString("de-DE"),
    stamp: now.getTime(),
    iso: now.toISOString()
  };
}

function liveFrame(input) {
  const schiene = liveGetSchiene();
  const mode = liveGetCluster();
  const grav = liveGetGrav();
  const eich = EICH();

  return {
    cube: CUBE_ID,
    role: ROLE,
    in: input,
    mode,
    grav,
    state: STATE,
    schiene,
    eich
  };
}

function liveSinn(data) {
  return {
    essenz: data.out,
    richtung: data.schiene.next,
    zeit: data.eich.uhrzeit,
    datum: data.eich.datum,
    kern: `${data.cube} / ${data.role}`
  };
}

function liveCore(input) {
  const frame = liveFrame(input);
  const sinn = liveSinn(frame);

  return {
    ...frame,
    out: `LIVE(${frame.in})`,
    sinn
  };
}

function live_out(data) {
  document.getElementById("out").innerHTML = `
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
