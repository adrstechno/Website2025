import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenisInstance } from "../hooks/useLenis";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToHashTarget = () => {
      if (!hash) return false;
      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return false;

      if (lenisInstance?.scrollTo) {
        lenisInstance.scrollTo(target, { offset: -96, immediate: true, force: true });
      } else {
        target.scrollIntoView({ block: "start" });
      }
      return true;
    };

    const forceTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenisInstance?.scrollTo) {
        lenisInstance.scrollTo(0, { immediate: true, force: true });
      }
    };

    if (hash) {
      const rafHash = requestAnimationFrame(() => {
        scrollToHashTarget();
      });
      return () => cancelAnimationFrame(rafHash);
    }

    forceTop();
    const raf = requestAnimationFrame(forceTop);
    return () => cancelAnimationFrame(raf);
  }, [pathname, search, hash]);

  return null;
}
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

