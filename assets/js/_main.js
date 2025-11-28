/* ==========================================================================
   Main
   ========================================================================== */

(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if (checkbox.checked && !toggle.contains(target) && !sidebar.contains(target)) {
      checkbox.checked = false;
    }
  }, false);

  // Language switcher logic
  var langSwitcher = document.getElementById('language-switcher');
  if (langSwitcher) {
    var langFlag = document.getElementById('language-flag');
    var currentLang = 'ko';

    langSwitcher.addEventListener('click', function() {
      if (currentLang === 'ko') {
        langFlag.textContent = '🇺🇸';
        currentLang = 'en';
      } else {
        langFlag.textContent = '🇰🇷';
        currentLang = 'ko';
      }
    });
  }
})(document);