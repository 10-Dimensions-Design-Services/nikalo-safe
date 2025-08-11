// src/ScrollToHashElement.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Scroll to top when there's no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
