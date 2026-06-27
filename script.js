// ============================================================
// BIRTHDAY WEBSITE — PARTH ❤️ KANIKA
// ============================================================

// ============================================================
// ✏️  EDIT THESE — All your customisations go here
// ============================================================

// Anniversary date (when Kanika proposed in person)
const ANNIVERSARY_DATE = new Date('2024-04-11T00:00:00');

// ✏️  ADD KANIKA'S PHOTOS HERE
// Put the photo files in the same folder as index.html
// Then add entries to this array like the example below
// { src: 'kanika1.jpg', caption: 'My love', date: 'Jan 2024', wide: false }
// Set wide: true for the first/hero photo to make it span full width
const PHOTOS = [
{ src: 'kanika1.jpg', caption: 'My favourite girl', date: 'Jan 2024', wide: true },
  // { src: 'kanika2.jpg', caption: 'Always smiling', date: 'Apr 2024', wide: false },
  // { src: 'kanika3.jpg', caption: 'Her birthday 🎂', date: '28 Jun 2024', wide: false },
  // { src: 'kanika4.jpg', caption: 'Just her', date: '2025', wide: false },
  // Add as many as you want!
];

// ✏️  REASONS I LOVE YOU — Edit or add your own!
const REASONS = [
  "Because you said 'Aree aap uth gyaa?' and my whole day got brighter",
  "Because your pure heart attracted me before I even knew the word for it",
  "Because you listen — really listen — to everything I say",
  "Because you make me feel safe enough to be my real self",
  "Because YOU had the courage to propose first on April 11th 💍",
  "Because you said 'Yesss yessss yessss' and made me the luckiest person alive",
  "Because you said 'You complete me' at 3 AM and meant every word",
  "Because you love sad songs and then send them so I feel it too",
  "Because you check on me even when you're busy with your own world",
  "Because you get shy when I compliment you — and it's the most adorable thing",
  "Because you said 'Tujh jsa ldka mrko janmoon m kbhi nhi milegaaa' 😭♥️",
  "Because 'I miss you more' — you always say it back and I believe you",
  "Because you are my favourite conversation at the end of every day",
  "Because you trust me with your softest feelings",
  "Because your smile is the most beautiful thing I've ever seen",
  "Because you make even ordinary moments feel like memories worth keeping",
  "Because you said 'meri existence bhi special kr di' and made me cry happy tears",
  "Because you are my home, wherever you are",
  "Because you remember small things and care about big ones",
  "Because 'Din terse shuru hota h. Terpe khatam hota h.' — that's just true",
  "Because you said 'I love you' and changed the whole meaning of those words",
  "Because you are the prayer I didn't know I was making",
  "Because you make me want to be the person you believe I am",
  "Because you chose me too — and you chose me first",
  "Because of the way you say 'jaan'",
  "Because even after everything, you're still right here",
  "Because you dreamed about us and I want to make every dream real",
  "Because you are irreplaceable — in this life and every one after",
  "Because you turned my ordinary days into magic just by being in them",
  "Because you are you — and that is everything",
];

// ✏️  MUSIC — Place an mp3 file (e.g. song.mp3) in this folder
//           then change the audio src in index.html to match the filename

// ============================================================
// LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic', offset: 80 });
    initGallery();
    initReasons();
  }, 3000);
});

// ============================================================
// CURSOR
// ============================================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

document.querySelectorAll('a, button, .gallery-item, .gallery-placeholder, .polaroid, .msg-card, .reason-card, .kd-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width = '20px'; cursor.style.height = '20px'; follower.style.width = '50px'; follower.style.height = '50px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width = '8px'; cursor.style.height = '8px'; follower.style.width = '28px'; follower.style.height = '28px'; });
});

(function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
})();

// ============================================================
// FLOATING HEARTS
// ============================================================
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const HEART_CHARS = ['❤', '💕', '🌹', '✨', '💖', '🌸'];
class Heart {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = 10 + Math.random() * 20;
    this.speed = 0.3 + Math.random() * 0.8;
    this.opacity = 0.1 + Math.random() * 0.5;
    this.drift = (Math.random() - 0.5) * 0.3;
    this.char = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
    this.rot = 0;
    this.rotSpeed = (Math.random() - 0.5) * 0.1;
  }
  update() { this.y -= this.speed; this.x += this.drift; this.rot += this.rotSpeed; if (this.y < -30) this.reset(); }
  draw() {
    ctx.save(); ctx.globalAlpha = this.opacity; ctx.font = this.size + 'px serif';
    ctx.translate(this.x, this.y); ctx.rotate(this.rot); ctx.fillText(this.char, 0, 0); ctx.restore();
  }
}
const hearts = [];
for (let i = 0; i < 25; i++) { const h = new Heart(); h.y = Math.random() * canvas.height; hearts.push(h); }
(function animateHearts() { ctx.clearRect(0,0,canvas.width,canvas.height); hearts.forEach(h => { h.update(); h.draw(); }); requestAnimationFrame(animateHearts); })();

// ============================================================
// SPARKLES IN HERO
// ============================================================
const sparkleContainer = document.getElementById('sparkleContainer');
for (let i = 0; i < 30; i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.setProperty('--dur', (1.5 + Math.random() * 2) + 's');
  s.style.setProperty('--delay', (Math.random() * 2) + 's');
  const size = (3 + Math.random() * 6) + 'px';
  s.style.width = size; s.style.height = size;
  sparkleContainer.appendChild(s);
}

// ============================================================
// MUSIC
// ============================================================
const audio = document.getElementById('bgMusic');
let playing = false;
function toggleMusic() {
  const btn = document.getElementById('musicToggle');
  if (playing) {
    audio.pause();
    btn.querySelector('.music-label').textContent = 'Play Music';
    btn.classList.remove('playing');
  } else {
    audio.play().catch(() => {});
    btn.querySelector('.music-label').textContent = 'Pause Music';
    btn.classList.add('playing');
  }
  playing = !playing;
}

// ============================================================
// GALLERY — Kanika's photos only
// ============================================================
function initGallery() {
  if (PHOTOS.length === 0) return; // keep placeholders
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  PHOTOS.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item' + (p.wide ? ' wide' : '');
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', (i % 6) * 100);
    item.innerHTML = `
      <img src="${p.src}" alt="${p.caption}" loading="lazy">
      <div class="overlay"><span class="cap">${p.caption} · ${p.date}</span></div>
    `;
    item.addEventListener('click', () => openLightbox(p.src, p.caption + ' · ' + p.date));
    grid.appendChild(item);
  });
}

// ============================================================
// REASONS
// ============================================================
function initReasons() {
  const grid = document.getElementById('reasonsGrid');
  REASONS.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (i % 8) * 80);
    card.innerHTML = `<div class="reason-num">${String(i+1).padStart(2,'0')} ✦</div><div class="reason-text">${r}</div>`;
    grid.appendChild(card);
  });
}

// ============================================================
// LIGHTBOX
// ============================================================
function openLightbox(src, caption) {
  document.getElementById('lightbox').classList.add('active');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ============================================================
// COUNTDOWN — counts from anniversary date (April 11 2024)
// ============================================================
function updateCountdown() {
  const now = new Date();
  let diff = Math.max(0, now - ANNIVERSARY_DATE);
  const totalSecs = Math.floor(diff / 1000);
  const secs = totalSecs % 60;
  const totalMins = Math.floor(totalSecs / 60);
  const mins = totalMins % 60;
  const totalHours = Math.floor(totalMins / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const years = Math.floor(totalDays / 365.25);
  const months = Math.floor((totalDays % 365.25) / 30.44);
  const days = Math.floor((totalDays % 365.25) % 30.44);
  document.getElementById('cnt-years').textContent = years;
  document.getElementById('cnt-months').textContent = months;
  document.getElementById('cnt-days').textContent = days;
  document.getElementById('cnt-hours').textContent = hours;
  document.getElementById('cnt-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cnt-secs').textContent = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================================
// POLAROID CLICK — lightbox
// ============================================================
document.querySelectorAll('.polaroid').forEach(p => {
  p.addEventListener('click', () => {
    const img = p.querySelector('img');
    if (img) openLightbox(img.src, p.querySelector('.polaroid-caption')?.textContent || '');
  });
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ============================================================
// SURPRISE — CONFETTI + HEARTS
// ============================================================
function triggerSurprise() {
  document.getElementById('surprisePre').style.display = 'none';
  document.getElementById('surpriseReveal').style.display = 'block';
  launchConfetti();
  burstHearts();
}

function launchConfetti() {
  const c = document.getElementById('confettiCanvas');
  c.width = c.offsetWidth; c.height = c.offsetHeight;
  const cx = c.getContext('2d');
  const COLORS = ['#f4b8c8','#c5b4e3','#d4a853','#f8a5c2','#a8d8ea','#fff'];
  const particles = Array.from({length:150}, () => ({
    x: c.width * 0.5, y: c.height * 0.5,
    vx: (Math.random()-0.5)*15, vy: (Math.random()-1.5)*12,
    size: 6 + Math.random()*10, color: COLORS[Math.floor(Math.random()*COLORS.length)],
    rotation: Math.random()*360, rotSpeed: (Math.random()-0.5)*8,
    gravity: 0.3 + Math.random()*0.2, opacity: 1,
    shape: Math.random() > 0.5 ? 'rect' : 'circle'
  }));
  (function draw() {
    cx.clearRect(0,0,c.width,c.height);
    let alive = false;
    particles.forEach(p => {
      if (p.opacity <= 0) return;
      alive = true;
      p.x += p.vx; p.vy += p.gravity; p.y += p.vy;
      p.rotation += p.rotSpeed; p.opacity -= 0.008; p.vx *= 0.99;
      cx.save(); cx.globalAlpha = Math.max(0, p.opacity);
      cx.translate(p.x, p.y); cx.rotate(p.rotation * Math.PI/180);
      cx.fillStyle = p.color;
      if (p.shape === 'rect') cx.fillRect(-p.size/2, -p.size/4, p.size, p.size/2);
      else { cx.beginPath(); cx.arc(0,0,p.size/2,0,Math.PI*2); cx.fill(); }
      cx.restore();
    });
    if (alive) requestAnimationFrame(draw);
  })();
}

function burstHearts() {
  const container = document.getElementById('burstContainer');
  const style = document.createElement('style');
  style.textContent = '@keyframes floatUp{0%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-80px) scale(1.5)}}';
  document.head.appendChild(style);
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.style.cssText = `position:absolute;left:${20+Math.random()*60}%;top:${20+Math.random()*60}%;font-size:${20+Math.random()*30}px;animation:floatUp 2s ease-out forwards;pointer-events:none;`;
      h.textContent = ['❤️','💕','🌹','✨','💖','🌸'][Math.floor(Math.random()*6)];
      container.appendChild(h);
      setTimeout(() => h.remove(), 2000);
    }, i * 100);
  }
}

// ============================================================
// CONSOLE GUIDE FOR PARTH
// ============================================================
console.log(`
💌 BIRTHDAY WEBSITE — SETUP GUIDE FOR PARTH
============================================

📸 TO ADD KANIKA'S PHOTOS:
   1. Copy photo files into this folder (same as index.html)
      e.g. kanika1.jpg, kanika2.jpg ...
   2. Find the PHOTOS array at the top of this file (script.js)
   3. Add entries like:
      { src: 'kanika1.jpg', caption: 'My love', date: 'Jan 2024', wide: false }
      Set wide: true for the first/hero photo (spans full width)

🎵 TO ADD MUSIC:
   1. Put an mp3 file in this folder (e.g. song.mp3)
   2. In index.html find: <source src="song.mp3">
   3. Change song.mp3 to your filename

✏️ TO WRITE YOUR OWN LETTER:
   Open index.html and find the section marked:
   <!-- ✏️ PARTH — REPLACE THIS WITH YOUR OWN LETTER -->
   Replace the paragraph text with what you want to say to Kanika.

📅 ANNIVERSARY DATE:
   Currently set to: 11 April 2024 (when Kanika proposed)
   To change: edit ANNIVERSARY_DATE at the top of this file.

🌹 Happy Birthday Kanika — 28 June 2026 💞
`);
