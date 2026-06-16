(function () {
    'use strict';

    var NAV_ITEMS = [
        { id: 'villages', label: 'Villages' },
        { id: 'stays', label: 'Places to Stay' },
        { id: 'eat', label: 'Places to Eat' },
        { id: 'experiences', label: 'Things to Do' },
        { id: 'whats-on', label: "What's On" },
        { id: 'journal', label: 'The Journal' },
        { id: 'plan', label: 'Plan Your Visit' }
    ];

    function getDepth() {
        var path = window.location.pathname;
        if (path.indexOf('/pages/villages/') !== -1) return 2;
        if (path.indexOf('/pages/') !== -1) return 1;
        return 0;
    }

    function getLinks() {
        var maps = {
            0: {
                villages: 'pages/villages/index.html',
                journal: 'pages/journal.html',
                'whats-on': 'pages/whats-on.html',
                experiences: 'pages/things-to-do.html',
                stays: 'pages/places-to-stay.html',
                eat: 'pages/places-to-eat.html',
                plan: 'pages/plan-your-visit.html'
            },
            1: {
                villages: 'villages/index.html',
                journal: 'journal.html',
                'whats-on': 'whats-on.html',
                experiences: 'things-to-do.html',
                stays: 'places-to-stay.html',
                eat: 'places-to-eat.html',
                plan: 'plan-your-visit.html'
            },
            2: {
                villages: 'index.html',
                journal: '../journal.html',
                'whats-on': '../whats-on.html',
                experiences: '../things-to-do.html',
                stays: '../places-to-stay.html',
                eat: '../places-to-eat.html',
                plan: '../plan-your-visit.html'
            }
        };
        return maps[getDepth()];
    }

    function getCurrentPage() {
        var path = window.location.pathname;
        var file = path.split('/').pop() || 'index.html';

        if (getDepth() === 0 && (file === 'index.html' || file === '')) return '';
        if (file === 'journal.html') return 'journal';
        if (file === 'whats-on.html') return 'whats-on';
        if (file === 'things-to-do.html') return 'experiences';
        if (file === 'places-to-stay.html') return 'stays';
        if (file === 'places-to-eat.html') return 'eat';
        if (file === 'plan-your-visit.html') return 'plan';
        if (path.indexOf('/villages/') !== -1) return 'villages';
        return '';
    }

    function buildOverlay() {
        var links = getLinks();
        var current = getCurrentPage();
        var overlay = document.createElement('div');
        overlay.className = 'site-nav-overlay';
        overlay.id = 'site-nav-overlay';
        overlay.setAttribute('aria-hidden', 'true');

        var linksHtml = NAV_ITEMS.map(function (item) {
            var active = item.id === current ? ' is-active' : '';
            return '<li><a href="' + links[item.id] + '" class="' + active.trim() + '">' + item.label + '</a></li>';
        }).join('');

        overlay.innerHTML =
            '<div class="site-nav-backdrop" data-nav-close></div>' +
            '<nav class="site-nav-panel" role="navigation" aria-label="Main navigation">' +
                '<div class="site-nav-header">' +
                    '<span class="site-nav-title">MENU</span>' +
                    '<button type="button" class="site-nav-close" data-nav-close aria-label="Close menu">' +
                        '<span class="material-symbols-outlined">close</span>' +
                    '</button>' +
                '</div>' +
                '<ul class="site-nav-links">' + linksHtml + '</ul>' +
            '</nav>';

        document.body.appendChild(overlay);
        return overlay;
    }

    function openNav(overlay, toggles) {
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('site-nav-open');
        toggles.forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'true');
        });
    }

    function closeNav(overlay, toggles) {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('site-nav-open');
        toggles.forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    function findMenuToggles() {
        var toggles = Array.from(document.querySelectorAll('[data-nav-toggle]'));
        if (toggles.length) return toggles;

        var candidates = document.querySelectorAll('nav button, header button, nav [class*="cursor-pointer"], header [class*="cursor-pointer"]');
        candidates.forEach(function (el) {
            var icon = el.querySelector('.material-symbols-outlined');
            if (!icon) return;
            var text = (icon.textContent || '').trim();
            if (text === 'menu') {
                if (el.tagName === 'SPAN' && el.parentElement) {
                    el.parentElement.setAttribute('data-nav-toggle', '');
                    el.parentElement.setAttribute('aria-label', 'Open menu');
                    el.parentElement.setAttribute('aria-expanded', 'false');
                    if (!toggles.includes(el.parentElement)) toggles.push(el.parentElement);
                } else {
                    el.setAttribute('data-nav-toggle', '');
                    el.setAttribute('aria-label', 'Open menu');
                    el.setAttribute('aria-expanded', 'false');
                    if (!toggles.includes(el)) toggles.push(el);
                }
            }
        });

        return toggles;
    }

    function splitHeaderNav() {
        var leftCol = document.querySelector('.site-header__left');
        var rightCol = document.querySelector('.site-header__right');
        if (!leftCol || !rightCol) return;

        var nav = rightCol.querySelector('.site-header__nav:not(.site-header__nav--right)');
        if (!nav || leftCol.querySelector('.site-header__nav--left')) return;

        var links = Array.from(nav.querySelectorAll('a'));
        var splitAt = 4;
        if (links.length <= splitAt) return;

        var leftNav = document.createElement('nav');
        leftNav.className = 'site-header__nav site-header__nav--left';
        leftNav.setAttribute('aria-label', 'Main navigation');

        links.slice(0, splitAt).forEach(function (link) {
            leftNav.appendChild(link);
        });
        nav.classList.add('site-header__nav--right');
        leftCol.appendChild(leftNav);
    }

    function init() {
        splitHeaderNav();
        var overlay = buildOverlay();
        var toggles = findMenuToggles();

        toggles.forEach(function (btn) {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (overlay.classList.contains('is-open')) {
                    closeNav(overlay, toggles);
                } else {
                    openNav(overlay, toggles);
                }
            });
        });

        overlay.querySelectorAll('[data-nav-close]').forEach(function (el) {
            el.addEventListener('click', function () {
                closeNav(overlay, toggles);
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
                closeNav(overlay, toggles);
            }
        });

        overlay.querySelectorAll('.site-nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeNav(overlay, toggles);
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
