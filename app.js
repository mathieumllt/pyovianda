document.addEventListener('DOMContentLoaded', () => {

  /* ── REVEAL on scroll ── */
  function reveal() {
    const wh = window.innerHeight;
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      if (el.getBoundingClientRect().top < wh - 70) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', reveal);
  reveal();

  /* ── NAV scroll ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 54, behavior: 'smooth' });
    });
  });

  /* ── PARALLAX ── */
  const heroBg = document.getElementById('heroBg');
  const heroEl = document.getElementById('hero');
  function parallax() {
    const sy = window.scrollY;
    const hOff = heroEl.offsetTop;
    if (sy + window.innerHeight > hOff && sy < hOff + heroEl.offsetHeight) {
      heroBg.style.transform = `translateY(${(sy - hOff) * 0.35}px)`;
    }
    document.querySelectorAll('.parallax-divider').forEach(div => {
      const dOff = div.offsetTop;
      if (sy + window.innerHeight > dOff && sy < dOff + div.offsetHeight) {
        div.querySelector('.pdiv-bg').style.transform = `translateY(${(sy - dOff) * 0.28}px)`;
      }
    });
  }
  window.addEventListener('scroll', parallax);
  parallax();

  /* ── CARD shine ── */
  document.querySelectorAll('.work').forEach(work => {
    work.addEventListener('mousemove', e => {
      const r = work.getBoundingClientRect();
      work.querySelector('.work-shine').style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      work.querySelector('.work-shine').style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
    });
  });

  /* ── COUNTDOWN ── */
  const target = new Date();
  target.setDate(target.getDate() + 30);
  function cd() {
    const d = target - new Date();
    if (d <= 0) return;
    document.getElementById('cd-d').textContent = String(Math.floor(d / 86400000)).padStart(2, '0');
    document.getElementById('cd-h').textContent = String(Math.floor(d % 86400000 / 3600000)).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(Math.floor(d % 3600000 / 60000)).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(Math.floor(d % 60000 / 1000)).padStart(2, '0');
  }
  setInterval(cd, 1000);
  cd();

  /* ── LIGHTBOX ── */
  const lb = document.getElementById('lb');
  document.querySelectorAll('.work').forEach(work => {
    work.addEventListener('click', () => {
      document.getElementById('lbImg').src            = work.querySelector('img').src;
      document.getElementById('lbN').textContent      = '№ ' + work.dataset.num;
      document.getElementById('lbT').textContent      = work.dataset.title;
      document.getElementById('lbD').textContent      = work.dataset.desc;
      document.getElementById('lbSz').textContent     = work.dataset.sub;
      document.getElementById('lbPr').textContent     = work.dataset.price;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  window.closeLb = function () {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbBg').addEventListener('click', closeLb);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

  /* ── FORM ── */
  document.getElementById('formBtn').addEventListener('click', function () {
    this.querySelector('span').textContent = '✓ DOSSIER ENREGISTRÉ';
    this.style.background = 'var(--smoke)';
    this.disabled = true;
  });

});
