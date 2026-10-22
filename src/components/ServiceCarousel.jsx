import { useState, useRef, useEffect, useCallback } from "react";
import EmptyState from "./EmptyState";

const AUTOPLAY_MS = 5000;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80";

export default function ServiceCarousel({ images = [], title = "" }) {
  const len = images.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const [reduce] = useState(() => prefersReducedMotion());

  const goTo = useCallback(
    (idx) => {
      if (!len) return;
      setCurrent(((idx % len) + len) % len);
    },
    [len]
  );
  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Autoplay — pausa en hover/focus/touch y respeta prefers-reduced-motion
  useEffect(() => {
    if (len <= 1 || paused || reduce) return;
    const id = window.setInterval(() => setCurrent((c) => (c + 1) % len), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [len, paused, reduce]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "Home") { e.preventDefault(); goTo(0); }
    else if (e.key === "End") { e.preventDefault(); goTo(len - 1); }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (start == null) return;
    const delta = e.changedTouches[0].clientX - start;
    if (Math.abs(delta) > 40) (delta < 0 ? next : prev)();
  };

  if (!len) {
    return (
      <EmptyState
        icon="image"
        title="Sin imágenes referenciales"
        description="Este convenio aún no cuenta con galería fotográfica."
      />
    );
  }

  return (
    <div
      className="w-full space-y-3 sm:space-y-4 focus:outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label={`Galería de ${title}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-surface-container-low">
        <div
          className={`flex ${reduce ? "" : "transition-transform duration-500 ease-out"}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <figure
              key={i}
              className="relative shrink-0 w-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${len}: ${img.caption || img.alt}`}
              aria-hidden={i !== current}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1100}
                height={688}
                className="w-full aspect-[16/10] object-contain select-none"
                draggable={false}
                onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/35 to-transparent p-3 sm:p-4 pt-10 sm:pt-12 flex items-end justify-between gap-2 pointer-events-none">
                <span className="text-inverse-on-surface text-[14px] sm:text-[15px] font-semibold bg-inverse-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{img.caption || `Imagen ${i + 1}`}</span>
                <span className="text-inverse-on-surface text-[13px] font-medium bg-inverse-surface/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shrink-0">{i + 1} / {len}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {len > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="cursor-pointer absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest hover:scale-105 transition-all duration-200 focus-ring opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden>chevron_left</span>
            </button>
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="cursor-pointer absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest hover:scale-105 transition-all duration-200 focus-ring opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden>chevron_right</span>
            </button>
          </>
        )}
      </div>

      {len > 1 && (
        <div className="flex items-center justify-center gap-2.5">
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a imagen ${i + 1}`}
                aria-current={current === i}
                onClick={() => goTo(i)}
                className={`cursor-pointer rounded-full transition-all duration-300 focus-ring ${current === i ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-surface-container-high hover:bg-surface-container-highest"}`}
              />
            ))}
          </div>
        </div>
      )}

      {len > 1 && !reduce && (
        <div className="h-1 w-full bg-surface-container-high/70 rounded-full overflow-hidden" aria-hidden>
          <div
            key={current}
            className="h-full bg-gradient-to-r from-primary-container to-secondary-container animate-carouselProgress"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          />
        </div>
      )}
    </div>
  );
}
