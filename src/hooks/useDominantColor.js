import { useState, useEffect } from "react";

const cache = new Map();

function extractDominantColor(src) {
  if (cache.has(src)) return cache.get(src);

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const size = 56;
        const ratio = img.naturalWidth / img.naturalHeight || 1;
        canvas.width = size;
        canvas.height = Math.max(1, Math.round(size / ratio));
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return resolve(null);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const buckets = new Map();
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          if (lum < 40 || lum > 225) continue;
          const key = `${r >> 4},${g >> 4},${b >> 4}`;
          buckets.set(key, (buckets.get(key) || 0) + 1);
        }
        let bestKey = null;
        let bestCount = 0;
        buckets.forEach((count, key) => {
          if (count > bestCount) {
            bestCount = count;
            bestKey = key;
          }
        });
        if (!bestKey) return resolve(null);
        let [r, g, b] = bestKey.split(",").map(Number);
        r = Math.min(255, (r << 4) + 8);
        g = Math.min(255, (g << 4) + 8);
        b = Math.min(255, (b << 4) + 8);
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const target = 70;
        if (lum > target) {
          const factor = target / lum;
          r = Math.round(r * factor);
          g = Math.round(g * factor);
          b = Math.round(b * factor);
        }
        resolve(`rgb(${r}, ${g}, ${b})`);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });

  cache.set(src, promise);
  return promise;
}

export default function useDominantColor(src) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    let active = true;
    if (!src) return undefined;
    extractDominantColor(src).then((c) => {
      if (active) setColor(c);
    });
    return () => {
      active = false;
    };
  }, [src]);

  return color;
}