(function () {
  'use strict';
  if (document.getElementById('rm-chat-launcher')) return;

  /* ── Inject markup ── */
  const html = `
<button class="rm-chat-launcher" id="rm-chat-launcher" aria-label="Open chat" aria-expanded="false">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6l-2 2V4h16v10z"/>
  </svg>
</button>
<div class="rm-chat-panel" id="rm-chat-panel" role="dialog" aria-label="Chat assistant" aria-hidden="true">
  <div class="rm-chat-header">
    <div class="rm-chat-header-left">
      <span class="rm-chat-status-dot" aria-hidden="true"></span>
      <div>
        <div class="rm-chat-title">Cornerstone AI Assistant</div>
        <div class="rm-chat-subtitle">Online — typically replies instantly</div>
      </div>
    </div>
    <button class="rm-chat-close" id="rm-chat-close" aria-label="Close chat">✕</button>
  </div>
  <div class="rm-chat-body" id="rm-chat-body">
    <div class="rm-chat-row rm-chat-bot">
      <div class="rm-chat-avatar" aria-hidden="true">CC</div>
      <div class="rm-chat-msg-wrap">
        <div class="rm-chat-bubble">👋 Hi there! I'm Cornerstone's virtual assistant. How can I help today?</div>
        <div class="rm-chat-time">just now</div>
      </div>
    </div>
    <div class="rm-chat-row rm-chat-user">
      <div class="rm-chat-msg-wrap">
        <div class="rm-chat-bubble">How much does a new concrete driveway cost?</div>
        <div class="rm-chat-time">just now</div>
      </div>
    </div>
    <div class="rm-chat-row rm-chat-bot">
      <div class="rm-chat-avatar" aria-hidden="true">CC</div>
      <div class="rm-chat-msg-wrap">
        <div class="rm-chat-bubble">Great question! Driveway pricing depends on size, finish type, and site prep. Most residential driveways in the Nashville area fall between $6–$12 per square foot. I'd recommend booking a free on-site estimate for an exact number — we can have someone out within 48 hours.</div>
        <div class="rm-chat-time">2 min ago</div>
      </div>
    </div>
    <div class="rm-chat-row rm-chat-user">
      <div class="rm-chat-msg-wrap">
        <div class="rm-chat-bubble">Do you do stamped patios too?</div>
        <div class="rm-chat-time">2 min ago</div>
      </div>
    </div>
    <div class="rm-chat-row rm-chat-bot">
      <div class="rm-chat-avatar" aria-hidden="true">CC</div>
      <div class="rm-chat-msg-wrap">
        <div class="rm-chat-bubble">Absolutely — stamped concrete is one of our specialties. We offer dozens of patterns and colors including brick, slate, flagstone, and custom designs. Patios typically run $12–$20 per square foot depending on complexity. Would you like me to connect you with our team?</div>
        <div class="rm-chat-time">3 min ago</div>
      </div>
    </div>
  </div>
  <div class="rm-chat-notice">🔒 Demo preview — not functional on this walkthrough site</div>
  <div class="rm-chat-input-row">
    <input class="rm-chat-input" type="text" placeholder="Type a message..." disabled aria-disabled="true" />
    <button class="rm-chat-send" disabled aria-disabled="true" aria-label="Send message (disabled)">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      </svg>
    </button>
  </div>
</div>`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  while (wrapper.firstChild) document.body.appendChild(wrapper.firstChild);

  /* ── Toggle logic ── */
  const launcher = document.getElementById('rm-chat-launcher');
  const panel    = document.getElementById('rm-chat-panel');
  const closeBtn = document.getElementById('rm-chat-close');

  function openPanel() {
    panel.classList.add('rm-chat-visible');
    panel.setAttribute('aria-hidden', 'false');
    launcher.classList.add('rm-chat-open');
    launcher.setAttribute('aria-expanded', 'true');
  }

  function closePanel() {
    panel.classList.remove('rm-chat-visible');
    panel.setAttribute('aria-hidden', 'true');
    launcher.classList.remove('rm-chat-open');
    launcher.setAttribute('aria-expanded', 'false');
  }

  launcher.addEventListener('click', function () {
    panel.classList.contains('rm-chat-visible') ? closePanel() : openPanel();
  });
  closeBtn.addEventListener('click', closePanel);
})();
