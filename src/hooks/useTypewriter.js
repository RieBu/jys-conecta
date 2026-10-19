import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Efecto máquina de escribir: cicla palabras escribiendo/borrando.
 * Respeta prefers-reduced-motion (muestra la primera palabra estática).
 */
export default function useTypewriter(words, { typeMs = 90, deleteMs = 45, holdMs = 1600 } = {}) {
  const [reduce] = useState(() => prefersReducedMotion());
  const [text, setText] = useState(() => (reduce ? words[0] || "" : ""));

  useEffect(() => {
    if (!words.length || reduce) return;

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIdx % words.length];
      if (!deleting) {
        charIdx += 1;
        setText(word.slice(0, charIdx));
        if (charIdx === word.length) {
          deleting = true;
          timer = window.setTimeout(tick, holdMs);
          return;
        }
        timer = window.setTimeout(tick, typeMs);
      } else {
        charIdx -= 1;
        setText(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
        timer = window.setTimeout(tick, deleteMs);
      }
    };

    timer = window.setTimeout(tick, typeMs);
    return () => window.clearTimeout(timer);
  }, [words, typeMs, deleteMs, holdMs, reduce]);

  return text;
}
