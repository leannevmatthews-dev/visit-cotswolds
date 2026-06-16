"use client";

import { useEffect } from "react";

export function VillageHeroVideo() {
  useEffect(() => {
    document.querySelectorAll("[data-village-video]").forEach((wrap) => {
      const video = wrap.querySelector("video");
      if (!video) return;

      const syncState = () => {
        wrap.classList.toggle("is-playing", !video.paused && !video.ended);
      };

      video.addEventListener("play", syncState);
      video.addEventListener("pause", syncState);
      video.addEventListener("ended", syncState);

      const overlay = wrap.querySelector(".village-hero__video-placeholder");
      if (overlay instanceof HTMLElement) {
        overlay.style.pointerEvents = "auto";
        overlay.style.cursor = "pointer";
        overlay.addEventListener("click", () => {
          if (video.paused) {
            video.play().catch(() => {});
          }
        });
      }
    });
  }, []);

  return null;
}
