import { useRef, useEffect, useState } from "react";

export default function VideoPlayer({ src, poster, title }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 1;
    setMuted(true);

    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [src]);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 1;
    video.muted = false;
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    setMuted(false);
  };

  return (
    <div className="relative inline-flex max-w-full">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        poster={poster}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        className="h-auto w-auto max-h-[70vh] max-w-full object-contain select-none"
        aria-label={`Video del local de ${title}`}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
      {muted && (
        <button
          type="button"
          onClick={enableSound}
          className="absolute top-4 left-1/2 -translate-x-1/2 cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-inverse-surface/85 text-inverse-on-surface text-[14px] font-semibold backdrop-blur-md shadow-lg hover:bg-inverse-surface focus-ring transition-colors duration-200"
          aria-label="Activar sonido del video"
        >
          <span className="material-symbols-outlined text-base" aria-hidden>volume_off</span>
          Activar sonido
        </button>
      )}
    </div>
  );
}
