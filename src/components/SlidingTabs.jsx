import { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Sliding Tab Indicator — píldora flotante que se desliza entre opciones.
 * Mide la posición/tamaño del elemento activo y anima con left/width.
 * Si un item incluye `href`, renderiza un <Link> (para navegación).
 */
export default function SlidingTabs({
  items,
  activeKey,
  onSelect,
  className = "",
  pillClassName = "",
  buttonClassName = "",
  activeClassName = "",
  inactiveClassName = "",
  ariaLabel,
}) {
  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const btn = btnRefs.current[activeKey];
      if (!container || !btn) return;
      setPill({ left: btn.offsetLeft, width: btn.offsetWidth, ready: true });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeKey]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={ariaLabel}
      className={`relative flex items-center ${className}`}
    >
      <span
        className={`absolute top-1 bottom-1 rounded-lg ${pillClassName}`}
        style={{
          left: pill.left,
          width: pill.width,
          opacity: pill.ready ? 1 : 0,
          transition:
            "left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease",
        }}
        aria-hidden
      />
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const cls = `relative z-10 cursor-pointer ${buttonClassName} ${isActive ? activeClassName : inactiveClassName}`;
        if (item.href) {
          return (
            <Link
              key={item.key}
              to={item.href}
              ref={(el) => { btnRefs.current[item.key] = el; }}
              onClick={() => onSelect?.(item.key)}
              aria-current={isActive ? "page" : undefined}
              className={cls}
            >
              {item.label}
            </Link>
          );
        }
        return (
          <button
            key={item.key}
            ref={(el) => { btnRefs.current[item.key] = el; }}
            onClick={() => onSelect(item.key)}
            aria-pressed={isActive}
            className={cls}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
