"use client";
import { useEffect } from "react";

export default function TitleWatcher() {
  useEffect(() => {
    const originalTitle = document.title;
    const faviconEl = document.querySelector("link[rel='icon']");

    const originalFavicon = faviconEl
      ? faviconEl.getAttribute("href")
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzknKibNmbtrulPPbHn2z9aag15Hd0ohznsXqZ1G0Iuw&s";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back to Portfolio";
        if (faviconEl) faviconEl.setAttribute("href", "/pray.png");
      } else {
        document.title = originalTitle;
        if (faviconEl) faviconEl.setAttribute("href", originalFavicon);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // No UI
}
