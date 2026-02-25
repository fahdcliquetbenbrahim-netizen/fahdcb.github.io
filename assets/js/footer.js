/**
 * footer.js — Composant footer partagé
 * Injecte le footer identique sur toutes les pages.
 */
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.toLowerCase();
  var rootPath = path.indexOf('/pages/') !== -1 ? '../../' : '';

  var footerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-identity">
      <p class="footer-name">Cliquet-Benbrahim <span>Fahd</span></p>
      <p class="footer-cursus">
        BUT Réseaux &amp; Télécommunications — Option Cybersécurité<br/>
        IUT de Vélizy-Villacoublay &middot; 20 ans
      </p>
    </div>
    <div class="footer-meta">
      <span class="footer-pill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        BUT R&amp;T &mdash; Cybersécurité
      </span>
      <span class="footer-pill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Réalisé en Février 2026
      </span>
      <span class="footer-pill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        20 ans
      </span>
      <a href="mailto:fahdcb@outlook.fr" class="footer-pill footer-pill-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        fahdcb@outlook.fr
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; 2026 Cliquet-Benbrahim Fahd &mdash; Tous droits réservés</span>
  </div>
</footer>`;

  var mainEl = document.querySelector('main') || document.body;

  if (mainEl.tagName.toLowerCase() === 'main') {
    mainEl.insertAdjacentHTML('beforeend', footerHTML);
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // ── Smooth Scroll (Lenis) — with visibility-aware RAF ──────
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
  script.onload = function () {
    var lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    var rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Pause the RAF loop when the tab is hidden to save CPU
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      } else {
        if (!rafId) { rafId = requestAnimationFrame(raf); }
      }
    });
  };
  document.head.appendChild(script);
});
