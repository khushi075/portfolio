// SFIA meters: two rows of seven rectangles (August, November)
document.querySelectorAll('.meter').forEach(m => {
  const from = Number(m.dataset.from), to = Number(m.dataset.to);
  const row = (n, cls, name) => {
    const bar = document.createElement('div');
    bar.className = 'bar ' + cls;
    bar.setAttribute('role', 'img');
    bar.setAttribute('aria-label', `${name}: level ${n || 'none'} of 7`);
    for (let i = 1; i <= 7; i++) {
      const r = document.createElement('i');
      if (i <= n) { r.className = 'on'; r.style.transitionDelay = (i * 70) + 'ms'; }
      bar.appendChild(r);
    }
    return bar;
  };
  const wrap = document.createElement('div');
  wrap.className = 'bars';
  wrap.append(row(from, 'aug', 'August 2026'), row(to, 'nov', 'November 2026'));
  const label = document.createElement('p');
  label.className = 'meter-label';
  label.textContent = m.dataset.label;
  m.append(wrap, label);
});

const meters = document.querySelector('.meters');
if (meters) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { meters.classList.add('lit'); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(meters);
  } else {
    meters.classList.add('lit');
  }
}

// Hours bars: planned (outline) and actual (blue), on a shared 150-hour scale
const SCALE = 150;
document.querySelectorAll('.hours').forEach(h => {
  const plan = Number(h.dataset.plan), act = Number(h.dataset.actual);
  const pct = v => (Math.min(v, SCALE) / SCALE * 100) + '%';
  h.innerHTML =
    `<div class="track" role="img" aria-label="Planned about ${plan} hours, actual about ${act} hours">` +
    `<span class="act" style="width:${pct(act)}"></span>` +
    `<span class="plan" style="width:${pct(plan)}"></span></div>` +
    `<div class="key"><span>Planned ~${plan} h</span><span>Actual ~${act} h</span></div>`;
});
