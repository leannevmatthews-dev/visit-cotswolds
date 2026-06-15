(function () {
    'use strict';

    function bindVideo(wrap, overlaySelector) {
        var video = wrap.querySelector('video');
        if (!video) return;

        function syncState() {
            wrap.classList.toggle('is-playing', !video.paused && !video.ended);
        }

        video.addEventListener('play', syncState);
        video.addEventListener('pause', syncState);
        video.addEventListener('ended', syncState);

        var overlay = wrap.querySelector(overlaySelector);
        if (overlay) {
            overlay.style.pointerEvents = 'auto';
            overlay.style.cursor = 'pointer';
            overlay.addEventListener('click', function () {
                if (video.paused) {
                    video.play().catch(function () {});
                }
            });
        }
    }

    document.querySelectorAll('[data-village-video]').forEach(function (wrap) {
        bindVideo(wrap, '.village-hero__video-placeholder');
    });

    document.querySelectorAll('[data-village-film]').forEach(function (wrap) {
        bindVideo(wrap, '.village-film__overlay');
    });
})();
