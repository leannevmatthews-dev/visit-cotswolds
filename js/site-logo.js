(function () {
    'use strict';

    var LOGO_SVG =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" fill="none" aria-hidden="true">' +
        '<text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" ' +
        'font-family="\'Cormorant Garamond\', \'EB Garamond\', Georgia, serif" ' +
        'font-weight="300" font-size="32" letter-spacing="0.15em" fill="#EDE5D8">VISIT COTSWOLDS</text>' +
        '</svg>';

    function replaceLogoImages(selector, className) {
        document.querySelectorAll(selector).forEach(function (img) {
            var svg = img.ownerDocument.createRange().createContextualFragment(LOGO_SVG);
            var el = svg.firstChild;
            el.classList.add(className);
            img.replaceWith(el);
        });
    }

    function init() {
        replaceLogoImages('.site-header__logo img', 'site-header__logo-svg');
        replaceLogoImages('.site-logo img', 'site-logo-svg');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
