document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.toLowerCase();
  var isHome =
    path === '' ||
    path === '/' ||
    path.endsWith('/') ||
    path.endsWith('/index.html') ||
    path.endsWith('index.html');

  var rootPath = path.indexOf('/pages/') !== -1 ? '../../' : '';

  var cvBtn = `
    <a href="${rootPath}assets/docs/cv.pdf" download class="cv-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      CV
    </a>`;

  var emailBtn = `
    <div class="email-popup-wrapper">
      <button class="header-email-btn" id="emailToggleBtn" title="Contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </button>
      <div class="email-popup" id="emailPopup">
        <span class="email-popup-addr">fahdcb@outlook.fr</span>
        <button class="email-copy-btn" id="emailCopyBtn" title="Copier l'adresse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="2" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </button>
      </div>
    </div>`;

  var backBtn = `
    <a href="javascript:history.back()" class="back-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
      </svg>
      Retour
    </a>`;

  var headerHTML;
  if (isHome) {
    headerHTML = `
    <header class="hero-header">
      <div class="logo">
        <span class="logo-bracket">&lt;</span>Portfolio<span class="logo-bracket">/&gt;</span>
      </div>
      <div class="header-title">
        <span class="header-site-name">Fahd Cliquet-Benbrahim</span>
        <span class="header-site-sub">BUT R&amp;T · Cybersécurité · IUT Vélizy</span>
      </div>
      <div class="header-actions">
        ${emailBtn}
        ${cvBtn}
      </div>
    </header>`;
  } else {
    headerHTML = `
    <header class="cat-header">
      ${backBtn}
      <div class="header-title">
        <span class="header-site-name">Fahd Cliquet-Benbrahim</span>
        <span class="header-site-sub">BUT R&amp;T · Cybersécurité · IUT Vélizy</span>
      </div>
      <div class="header-actions">
        ${emailBtn}
        ${cvBtn}
      </div>
    </header>`;
  }

  // Inject header at the beginning of the container
  var container = document.querySelector('main.hero') || document.querySelector('.category-page') || document.body;
  container.insertAdjacentHTML('afterbegin', headerHTML);

  // ── Email popup logic (fully encapsulated, no globals) ─────
  var copyIconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var checkIconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  document.getElementById('emailToggleBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    var popup = document.getElementById('emailPopup');
    if (popup) popup.classList.toggle('open');
  });

  document.getElementById('emailCopyBtn').addEventListener('click', function () {
    navigator.clipboard.writeText('fahdcb@outlook.fr').then(function () {
      var btn = document.getElementById('emailCopyBtn');
      if (btn) {
        btn.innerHTML = checkIconSVG;
        setTimeout(function () {
          btn.innerHTML = copyIconSVG;
        }, 1800);
      }
    });
  });

  document.addEventListener('click', function () {
    var popup = document.getElementById('emailPopup');
    if (popup) popup.classList.remove('open');
  });
});
