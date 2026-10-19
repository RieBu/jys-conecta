import { useEffect } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const nodes = () => Array.from(document.querySelectorAll("[data-reveal]:not(.is-visible)"));
    const reduce = prefersReducedMotion();

    if (reduce || !("IntersectionObserver" in window)) {
      nodes().forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.getAttribute("data-reveal-delay") || 0);
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => nodes().forEach((el) => observer.observe(el));
    observeAll();

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
