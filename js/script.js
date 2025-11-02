// Chat engine with typing effect + quick-suggest chips (front-end only)
const chatEl = document.getElementById('chat');
const formEl = document.getElementById('chat-form');
const inputEl = document.getElementById('user-input');

function addMessage(text, who = 'bot') {
  const row = document.createElement('div');
  row.className = `msg ${who}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerText = text;
  row.appendChild(bubble);
  chatEl.appendChild(row);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function addTyping() {
  const row = document.createElement('div');
  row.className = 'msg bot';
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = '<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
  row.appendChild(bubble);
  chatEl.appendChild(row);
  chatEl.scrollTop = chatEl.scrollHeight;
  return row;
}



function matchReply(text) {
  const q = text.toLowerCase();
  let best = null, bestScore = 0;
  for (const entry of window.RESPONSES) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry.reply;
    }
  }
  if (best && bestScore > 0) return best;
  return window.FALLBACKS[Math.floor(Math.random() * window.FALLBACKS.length)];
}

async function botReply(text) {
  const typingRow = addTyping();
  const delay = Math.min(1200, Math.max(400, text.length * 15));
  await new Promise(r => setTimeout(r, delay));
  typingRow.remove();
  addMessage(text, 'bot');
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = (inputEl.value || '').trim();
  if (!val) return;
  addMessage(val, 'user');
  inputEl.value = '';
  const reply = matchReply(val);
  botReply(reply);
});



// About modal (robust: DOMContentLoaded + event delegation)
document.addEventListener('DOMContentLoaded', () => {
  function qs(id){ return document.getElementById(id); }
  function openAbout(){ const m = qs('about-modal'); if (m) m.hidden = false; }
  function closeAbout(){ const m = qs('about-modal'); if (m) m.hidden = true; }

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t) return;
    if (t.id === 'about-btn') { openAbout(); }
    if (t.id === 'about-close') { closeAbout(); }
    const modal = qs('about-modal');
    if (modal && !modal.hidden && t === modal) { closeAbout(); }
  });

  document.addEventListener('keydown', (e) => {
    const modal = qs('about-modal');
    if (e.key === 'Escape' && modal && !modal.hidden) closeAbout();
  });
});
// End About modal

// Quick-suggest chips
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const msg = chip.getAttribute('data-msg') || '';
    if (!msg) return;
    addMessage(msg, 'user');
    const reply = matchReply(msg);
    botReply(reply);
  });
});

// Theme + Contact controls
const THEME_KEY = "psf-theme";
function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
}
function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}
applyTheme(getSavedTheme());
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const next = document.body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

document.getElementById('contact-btn')?.addEventListener('click', () => {
  const btn = document.getElementById('contact-btn');
  let email = btn?.getAttribute('data-email') || '';
  if (!email) {
    // If not set, ask for an email once and store it in the attribute (not persistent)
    const entered = prompt("Enter your contact email (optional):", "");
    if (entered) {
      email = entered.trim();
      btn.setAttribute('data-email', email);
    }
  }
  const subject = encodeURIComponent("Peer Support Finder – Contact");
  const body = encodeURIComponent("Hi! I’m interested in your Peer Support Finder project.\n\n");
  const href = email ? `mailto:${email}?subject=${subject}&body=${body}` : `mailto:?subject=${subject}&body=${body}`;
  window.location.href = href;
});

// Greeting
addMessage("Hi! I’m your AI study partner for BCIT/SET. Ask about course tips, study partners, or campus resources.");

// Resources slide-out logic
document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('resources-panel');
  const btn = document.getElementById('resources-btn');
  const close = document.getElementById('close-resources');

  function openPanel() {
    if (panel) {
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add('show'));
    }
  }
  function closePanel() {
    if (panel) {
      panel.classList.remove('show');
      setTimeout(() => { panel.hidden = true; }, 300);
    }
  }

  btn?.addEventListener('click', openPanel);
  close?.addEventListener('click', closePanel);
  panel?.addEventListener('click', (e) => {
    if (e.target === panel) closePanel();
  });
});
