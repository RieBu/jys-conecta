import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SlidingTabs from "./SlidingTabs";

const NAV_ITEMS = [
  { key: "/", label: "Cómo Funciona", href: "/" },
  { key: "/nosotros", label: "Nosotros", href: "/nosotros" },
  { key: "/catalogo", label: "Catálogo", href: "/catalogo" },
  { key: "/afiliate", label: "Afíliate / Contacto", href: "/afiliate" },
];

const BASE = import.meta.env.BASE_URL;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  // Close mobile on route change
  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = (isActive) =>
    `inline-flex items-center cursor-pointer min-h-[40px] px-3 py-2 rounded-lg font-semibold text-[15px] transition-colors duration-200 focus-ring ${
      isActive
        ? "bg-primary-container text-on-primary shadow-sm"
        : "text-tertiary hover:bg-surface-container hover:text-on-surface"
    }`;

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      {/* Trust bar - Enterprise Gateway pattern */}
      <div className="hidden md:flex w-full bg-inverse-surface text-tertiary-fixed-dim text-[13px] py-2">
        <div className="w-full px-[clamp(18px,2.95vw,50px)] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Operando en tiempo real</span>
            <span className="hidden lg:inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim">verified</span> ISO 27001 • Compliance 2026 • SUNAT Validado</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Central: +51 922 506 294</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:jysasesoria@gmail.com" className="hover:text-inverse-on-surface transition-colors cursor-pointer">jysasesoria@gmail.com</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[var(--z-nav)] bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container/60 shadow-sm">
        <div className="w-full px-[clamp(18px,2.95vw,50px)] flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-3 cursor-pointer" aria-label="JyS Conectados inicio">
            <img src={`${BASE}logo.jpeg`} alt="JyS Conectados" className="w-14 h-14 rounded-xl object-contain bg-surface-container-lowest p-1 ring-1 ring-surface-container" width={56} height={56} decoding="async" />
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[13px] font-bold border border-surface-container-high">RUC 20608400959</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            <SlidingTabs
              items={NAV_ITEMS}
              activeKey={location.pathname === "/como-funciona" ? "/" : location.pathname}
              className="gap-1"
              pillClassName="bg-primary-container shadow-sm"
              buttonClassName="inline-flex items-center min-h-[40px] px-3 py-2 rounded-lg font-semibold text-[15px] transition-colors duration-200 focus-ring"
              activeClassName="text-on-primary"
              inactiveClassName="text-tertiary hover:text-on-surface"
            />
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="https://wa.me/51922506294" target="_blank" rel="noreferrer" className="cursor-pointer inline-flex items-center min-h-[44px] px-4 py-2 rounded-xl bg-surface-container text-on-surface font-semibold text-[15px] hover:bg-surface-container-high transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring">
              <span className="material-symbols-outlined text-base mr-1.5" aria-hidden>support_agent</span> Soporte VIP
            </a>
            <Link to="/afiliate" className="btn-shine group cursor-pointer inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-semibold text-[15px] hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-sm focus-ring">
              Activar Afiliación <span className="material-symbols-outlined text-sm ml-1 transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_forward</span>
            </Link>
          </div>

          <button
            className="lg:hidden cursor-pointer w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center transition-colors duration-200 hover:bg-surface-container-high focus-ring"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="material-symbols-outlined" aria-hidden>{open ? "close" : "menu"}</span>
          </button>
        </div>
        {open && (
          <div id="mobile-nav" className="lg:hidden bg-surface-container-lowest border-t border-surface-container/60 px-[clamp(18px,2.95vw,50px)] py-3 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => `block text-center ${linkClass(isActive)}`}>Cómo Funciona</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/nosotros" className={({ isActive }) => `block text-center ${linkClass(isActive)}`}>Nosotros</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/catalogo" className={({ isActive }) => `block text-center ${linkClass(isActive)}`}>Catálogo</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/afiliate" className={({ isActive }) => `block text-center ${linkClass(isActive)}`}>Afíliate / Contacto</NavLink>
            <a href="https://wa.me/51922506294" target="_blank" rel="noreferrer" className="block text-center cursor-pointer min-h-[44px] py-3 rounded-xl bg-primary-container text-on-primary font-semibold">Chatear WhatsApp</a>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface py-10" role="contentinfo">
      <div className="w-full px-[clamp(18px,2.95vw,50px)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img src={`${BASE}logo.jpeg`} alt="JyS Conectados" className="w-12 h-12 rounded-lg object-contain bg-white/10 p-1 ring-1 ring-white/15" width={48} height={48} decoding="async" />
              <div className="flex flex-col">
                <span className="font-bold text-inverse-on-surface text-lg">JyS Conectados</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[13px] font-bold w-fit">Red Corporativa</span>
              </div>
            </div>
            <p className="text-tertiary-fixed-dim text-[15px] max-w-md leading-relaxed">Ecosistema de vinculación, alianzas de alto impacto y asesoría integral para ejecutivos, directores y empresas afiliadas a JYS Asesoría y Capacitación.</p>
            <p className="text-tertiary-fixed-dim text-[15px]">Razón Social: JYS Asesoría y Capacitación E.I.R.L. • RUC: 20608400959</p>
            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-secondary-fixed-dim text-[12px] font-bold border border-white/10"><span className="material-symbols-outlined text-xs">shield</span> ISO 27001</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-secondary-fixed-dim text-[12px] font-bold border border-white/10"><span className="material-symbols-outlined text-xs">verified</span> Homologado SUNAT</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-secondary-fixed-dim text-[12px] font-bold border border-white/10"><span className="material-symbols-outlined text-xs">gavel</span> Compliance 2026</span>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <a href="https://wa.me/51922506294" target="_blank" rel="noreferrer" aria-label="WhatsApp de JyS Conectados" className="social social--wa"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn de JyS Conectados" className="social social--li"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook de JyS Conectados" className="social social--fb"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"/></svg></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider text-[14px] mb-3">Soporte Rápido</h3>
            <ul className="space-y-2 text-[15px] text-tertiary-fixed-dim">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-fixed-dim" aria-hidden>call</span><a href="tel:+51922506294" className="hover:text-inverse-on-surface transition-colors cursor-pointer">Central: +51 922 506 294</a></li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-fixed-dim" aria-hidden>support_agent</span><a href="https://wa.me/51947920237" className="hover:text-inverse-on-surface transition-colors cursor-pointer">Atención VIP: +51 947 920 237</a></li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-fixed-dim" aria-hidden>mail</span><a href="mailto:jysasesoria@gmail.com" className="hover:text-inverse-on-surface transition-colors cursor-pointer">jysasesoria@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider text-[14px] mb-3">Marco Legal</h3>
            <ul className="space-y-2 text-[15px] text-tertiary-fixed-dim">
              <li><a href="#" className="hover:text-inverse-on-surface transition-colors cursor-pointer focus-ring rounded">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-inverse-on-surface transition-colors cursor-pointer focus-ring rounded">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-inverse-on-surface transition-colors cursor-pointer focus-ring rounded">Libro de Reclamaciones</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-tertiary-fixed-dim">
          <span>© 2026 JYS Asesoría y Capacitación E.I.R.L. Todos los derechos reservados.</span>
          <span>Diseño Executive Kinetic • Plus Jakarta Sans • Trust & Authority</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
