import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import ServiceCarousel from "../components/ServiceCarousel";
import SlidingTabs from "../components/SlidingTabs";
import EmptyState from "../components/EmptyState";
import VideoPlayer from "../components/VideoPlayer";
import useDominantColor from "../hooks/useDominantColor";

const categories = [
  { key: "all", label: `Todos (${services.length})` },
  { key: "tech", label: "Tecnología y Cloud" },
  { key: "marketing", label: "Marketing y Branding" },
  { key: "diseno", label: "Diseño y Construcción" },
  { key: "inmobiliaria", label: "Inmobiliaria" },
  { key: "salud", label: "Salud y Óptica" },
  { key: "financiero", label: "Finanzas y Créditos" },
  { key: "gastronomia", label: "Gastronomía" },
  { key: "alojamiento", label: "Alojamiento" },
  { key: "familia", label: "Juego y Familia" },
];

function ProviderMark({ s, size = "sm" }) {
  const box = size === "lg"
    ? "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl text-base sm:text-lg"
    : "w-10 h-10 rounded-xl text-sm";
  if (s.logo) {
    return <img src={s.logo} alt={`Logo de ${s.provider}`} className={`${box} shrink-0 object-contain p-1 bg-surface-container-high shadow-inner`} loading="lazy" decoding="async" />;
  }
  return <div className={`${box} shrink-0 bg-surface-container-high flex items-center justify-center font-bold text-primary shadow-inner`} aria-hidden>{s.initials}</div>;
}

const CATEGORY_LABELS = {
  tech: "Tecnología y Cloud",
  marketing: "Marketing y Branding",
  diseno: "Diseño y Construcción",
  inmobiliaria: "Inmobiliaria",
  salud: "Salud y Óptica",
  financiero: "Finanzas y Créditos",
  gastronomia: "Gastronomía",
  alojamiento: "Alojamiento",
  familia: "Juego y Primera Infancia",
};

function SectionTitle({ icon, children, chip }) {
  return (
    <div className="flex items-center gap-2.5 pb-3 border-b border-surface-container">
      <span className="material-symbols-outlined text-primary text-xl sm:text-[22px]" aria-hidden>{icon}</span>
      <h3 className="font-bold uppercase tracking-wider text-on-surface text-[15px] sm:text-[16px]">{children}</h3>
      {chip && <span className="ml-auto text-xs text-tertiary bg-surface-container px-2.5 py-1 rounded-full shrink-0">{chip}</span>}
    </div>
  );
}

function ServiceCard({ s, i, onOpen }) {
  const color = useDominantColor(s.cover);
  return (
    <article
      onClick={() => onOpen(s.id)}
      style={{ animationDelay: `${Math.min(i, 8) * 40}ms`, "--card-color": color }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(s.id)}
      aria-label={`Ver detalle ${s.title} de ${s.provider}`}
      className={`animate-cardIn group cursor-pointer relative flex flex-col justify-between bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border focus-ring convenio-card ${s.featured ? "convenio-card--featured" : ""}`}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-low border-b border-surface-container">
        <img
          src={s.cover}
          alt={`${s.title} - ${s.provider}`}
          loading="lazy"
          decoding="async"
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" aria-hidden></div>
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className={`px-2.5 py-1 rounded-full text-[13px] font-bold flex items-center gap-1 border backdrop-blur-md ${s.featured ? "bg-secondary-fixed/95 text-on-secondary-fixed border-secondary-fixed-dim" : "bg-surface-container-lowest/90 text-on-surface-variant border-surface-container"}`}>{s.featured && <span className="material-symbols-outlined text-xs" aria-hidden>verified</span>}{s.badge}</span>
          <span className={`px-2.5 py-1 rounded-full text-[13px] font-bold border backdrop-blur-md ${s.featured ? "bg-primary-fixed/95 text-on-primary-fixed border-primary-fixed-dim" : "bg-primary-fixed/95 text-on-primary-fixed border-primary-fixed-dim"}`}>{s.discount}</span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-inverse-surface/70 backdrop-blur-md text-inverse-on-surface text-[13px] font-semibold border border-white/10">
          <span className="material-symbols-outlined text-sm" aria-hidden>photo_library</span>{s.images?.length || 0} fotos{s.video && <><span className="mx-0.5 text-white/40" aria-hidden>·</span><span className="material-symbols-outlined text-sm" aria-hidden>videocam</span>video</>}
        </div>
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-on-surface">
          <span className="material-symbols-outlined text-base" aria-hidden>arrow_outward</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <ProviderMark s={s} />
          <div className="min-w-0"><p className="text-[14px] font-semibold text-tertiary truncate">{s.provider}</p>{s.rating && s.reviews ? (<div className="flex items-center gap-1 text-secondary min-h-[20px]" aria-label={`Calificación ${s.rating} de 5`}><span className="material-symbols-outlined text-sm" aria-hidden>star</span><span className="text-[13px] font-bold">{s.rating}</span><span className="text-[14px] text-tertiary">({s.reviews})</span></div>) : (<div className="flex items-center gap-1 text-tertiary min-h-[20px]"><span className="material-symbols-outlined text-sm text-secondary-container" aria-hidden>verified</span><span className="text-[13px] font-medium">Convenio verificado JyS</span></div>)}</div>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-[18px] text-on-surface group-hover:text-primary transition-colors duration-200 leading-tight line-clamp-2 min-h-[2.5em]">{s.title}</h3>
          <p className="text-[15px] text-tertiary line-clamp-2 min-h-[3em]">{s.desc}</p>
        </div>
        <ul className="space-y-1.5 pt-1">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-[14px] text-on-surface-variant min-w-0"><span className="material-symbols-outlined text-secondary-container text-base shrink-0" aria-hidden>check_circle</span><span className="truncate min-w-0">{b}</span></li>
          ))}
        </ul>
        <div className="pt-4 mt-auto flex items-center justify-between border-t border-surface-container/50">
          <div className="flex flex-col"><span className="text-[13px] text-tertiary uppercase font-semibold tracking-wider">{s.footerLabel}</span><span className={`text-[15px] font-bold ${s.featured ? "text-primary" : "text-on-surface"}`}>{s.footerValue}</span></div>
          <span className="convenio-card-cta inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[14px] font-semibold transition-transform duration-200 group-hover:scale-[1.02]">Ver Detalle <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_forward</span></span>
        </div>
      </div>
    </article>
  );
}

export default function Catalogo() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [modal, setModal] = useState(null);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCat = cat === "all" || s.category === cat;
      const text = `${s.title} ${s.provider} ${s.desc} ${s.badge}`.toLowerCase();
      const matchQ = text.includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  const selected = services.find((s) => s.id === modal) || services[0];

  const whatsappMsg = `Hola, soy cliente de JyS Conectados y quiero usar su promoción: ${selected.discount} — ${selected.title}.`;
  const whatsappUrl = `https://wa.me/${selected.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="w-full bg-background">
      {/* Header - semantic with search role */}
      <section aria-labelledby="catalog-title" className="relative w-full overflow-hidden bg-surface-container-lowest py-[clamp(1.5rem,3vw,2.5rem)] border-b border-surface-container">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none animate-float" aria-hidden></div>
        <div className="absolute left-1/3 -bottom-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none animate-float-slow" aria-hidden></div>
        <div className="w-full px-[clamp(18px,2.95vw,50px)] relative z-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-reveal>
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-[13px] font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-sm" aria-hidden>hub</span> Red de Aliados y Descuentos Exclusivos
              </div>
              <h1 id="catalog-title" className="font-extrabold text-[clamp(24px,2.35vw,32px)] text-on-surface tracking-tight">Catálogo de Servicios & <span className="font-script font-bold text-[1.15em] text-primary-container">Beneficios</span> Corporativos</h1>
              <p className="text-[clamp(15px,1.15vw,17px)] text-tertiary">Activa tarifas preferenciales, blindaje y herramientas contratadas directamente por JyS Conectados para potenciar tu empresa.</p>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low shadow-sm">
              <div className="flex flex-col"><span className="text-[13px] text-tertiary uppercase font-semibold tracking-wider">Ahorro Promedio Red</span><span className="font-extrabold text-[24px] text-primary">28.4%</span><span className="text-[13px] text-on-surface-variant">En más de 42 convenios activos</span></div>
              <svg className="w-24 h-12 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 100 40" aria-hidden><path d="M0 35 Q 25 28, 45 15 T 75 18 T 100 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path><path d="M0 35 Q 25 28, 45 15 T 75 18 T 100 4 L 100 40 L 0 40 Z" fill="currentColor" fillOpacity="0.12"></path></svg>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2">
            <div className="relative flex-1 max-w-xl">
              <label htmlFor="searchInput" className="sr-only">Buscar convenio</label>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-tertiary" aria-hidden><span className="material-symbols-outlined text-lg">search</span></span>
              <input
                id="searchInput"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full h-11 pl-11 pr-4 bg-surface-container-low rounded-xl text-[15px] text-on-surface placeholder:text-tertiary/70 border border-transparent outline-none transition-all duration-200 focus:bg-surface-container-lowest focus:border-primary/20 focus:shadow-md focus:shadow-primary/10 focus:ring-2 focus:ring-primary/10"
                placeholder="Buscar por servicio, empresa proveedora o especialidad..."
                type="search"
                aria-label="Buscar servicios"
              />
            </div>
            <SlidingTabs
              items={categories}
              activeKey={cat}
              onSelect={setCat}
              ariaLabel="Filtrar por categoría"
              className="gap-1 overflow-x-auto p-1 rounded-xl bg-surface-container-low border border-surface-container scrollbar-none"
              pillClassName="bg-surface-container-lowest shadow-sm border border-surface-container"
              buttonClassName="px-4 py-2 rounded-lg text-[14px] font-semibold whitespace-nowrap transition-colors duration-200 min-h-[36px] focus-ring"
              activeClassName="text-on-surface"
              inactiveClassName="text-tertiary hover:text-on-surface"
            />
          </div>
        </div>
      </section>

      {/* Results count - Operate mode clarity */}
      <div className="w-full px-[clamp(18px,2.95vw,50px)] pt-6 flex items-center justify-between">
        <p className="text-[14px] text-tertiary" aria-live="polite">
          Mostrando <strong className="text-on-surface">{filtered.length}</strong> de {services.length} convenios {cat !== "all" && `en ${categories.find((c) => c.key === cat)?.label}`} {q && `para "${q}"`}
        </p>
        {q && (
          <button onClick={() => setQ("")} className="cursor-pointer text-[14px] font-semibold text-primary hover:underline focus-ring rounded px-2 py-1">
            Limpiar búsqueda
          </button>
        )}
      </div>

      {/* Grid - proporcional */}
      <section aria-label="Listado de convenios" className="w-full px-[clamp(18px,2.95vw,50px)] py-[clamp(1rem,2vw,1.75rem)]">
        <div key={cat} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(1rem,1.6vw,1.5rem)]">
          {filtered.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} onOpen={setModal} />
          ))}

          {/* CTA Card - Conversion-Optimized */}
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-surface-container to-surface-container-high rounded-xl p-6 shadow-sm overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold border border-secondary-fixed-dim"><span className="material-symbols-outlined text-2xl" aria-hidden>handshake</span></div>
              <div className="space-y-1"><span className="text-[13px] text-secondary font-bold uppercase tracking-wider">¿Eres proveedor de confianza?</span><h3 className="font-bold text-[18px] text-on-surface">Publica tu Beneficio en la Red JyS</h3><p className="text-[15px] text-tertiary">Conecta directamente con más de 650 directores generales, gerentes y propietarios de empresas auditadas.</p></div>
            </div>
            <div className="pt-6 mt-4"><Link to="/afiliate" className="btn-shine group cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-inverse-surface text-inverse-on-surface text-[14px] font-semibold hover:bg-on-surface transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-md focus-ring">Postular como Aliado JyS <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_outward</span></Link></div>
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="mt-6">
            <EmptyState
              icon="search_off"
              title={`No se encontraron servicios para “${q}”`}
              description="Prueba con otros términos o cambia la categoría."
              action={
                <button onClick={() => { setQ(""); setCat("all"); }} className="cursor-pointer px-4 py-2 rounded-lg bg-surface-container text-on-surface text-[15px] font-semibold hover:bg-surface-container-high transition-colors duration-200 focus-ring">Ver todos los convenios</button>
              }
            />
          </div>
        )}
      </section>

      {/* MODAL - optimizado responsive: ancho aprovechado */}
      {modal && (
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-3 sm:p-4 lg:p-6 overflow-y-auto bg-inverse-surface/60 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="fixed inset-0" onClick={() => setModal(null)} aria-hidden></div>
          <div className="relative w-full sm:w-[95vw] md:w-[92vw] lg:w-[92vw] xl:w-[88vw] max-w-[1120px] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[96vh] sm:max-h-[92vh] flex flex-col animate-fadeUp">
            <div className="h-2 w-full bg-gradient-to-r from-primary-container via-secondary-container to-primary shrink-0" aria-hidden></div>
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-start justify-between gap-3 sm:gap-4 bg-surface-container-lowest shrink-0 border-b border-surface-container/60">
              <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                <ProviderMark s={selected} size="lg" />
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] sm:text-xs font-bold border border-secondary-fixed-dim"><span className="material-symbols-outlined text-xs" aria-hidden>verified</span> CONVENIO EXCLUSIVO RED JYS</span><span className="text-[13px] sm:text-xs text-tertiary truncate">{CATEGORY_LABELS[selected.category] || selected.provider}</span></div>
                  <h2 id="modal-title" className="font-extrabold text-[20px] sm:text-[24px] lg:text-[28px] text-on-surface leading-tight tracking-tight">{selected.title}</h2>
                  <p className="hidden sm:block text-[15px] lg:text-[16px] text-tertiary line-clamp-2">{selected.desc}</p>
                </div>
              </div>
              <button onClick={() => setModal(null)} aria-label="Cerrar modal" className="cursor-pointer w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-container-low hover:bg-surface-container-high flex items-center justify-center text-tertiary transition-colors duration-200 focus-ring shrink-0"><span className="material-symbols-outlined text-xl" aria-hidden>close</span></button>
            </div>

            {/* Contenido - columna única ordenada con secciones y divisores */}
            <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 overflow-y-auto space-y-8 lg:space-y-10 flex-1">
              {/* 1. Galería */}
              <section className="space-y-4" aria-label="Galería del local">
                <SectionTitle icon="photo_library" chip={`${selected.images?.length || 0} fotos`}>Galería del Local</SectionTitle>
                <ServiceCarousel images={selected.images} title={selected.title} />
              </section>

              {/* 2. Recorrido en video */}
              {selected.video && (
                <section className="space-y-4" aria-label="Recorrido del local en video">
                  <SectionTitle icon="videocam" chip="Video oficial">Recorrido del Local</SectionTitle>
                  <div className="flex items-center justify-center bg-surface-container-low rounded-xl sm:rounded-2xl shadow-sm overflow-hidden px-2 py-2">
                    <VideoPlayer src={selected.video} poster={selected.poster} title={selected.provider} />
                  </div>
                </section>
              )}

              {/* 3. Beneficio exclusivo */}
              <section className="space-y-4" aria-label="Beneficio exclusivo">
                <SectionTitle icon="percent" chip="Ahorro Activo 2026">Beneficio Exclusivo</SectionTitle>
                <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary-fixed/20 to-surface-container-low border border-primary/10 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0" aria-hidden><span className="material-symbols-outlined text-xl sm:text-2xl">percent</span></div>
                      <p className="font-bold text-primary text-[17px] sm:text-[19px] lg:text-[20px] leading-tight">{selected.discount}</p>
                    </div>
                    <div className="hidden sm:block w-px self-stretch bg-primary/10" aria-hidden></div>
                    <div className="flex flex-col pl-1 sm:pl-0">
                      <span className="text-[13px] text-tertiary uppercase font-semibold tracking-wider">{selected.footerLabel}</span>
                      <span className="text-[15px] font-bold text-on-surface">{selected.footerValue}</span>
                    </div>
                  </div>
                  {selected.bullets?.length > 0 && (
                    <ul className="px-4 sm:px-5 py-3 bg-surface-container-lowest/60 border-t border-primary/10 space-y-2">
                      {selected.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[14px] sm:text-[15px] text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5" aria-hidden>check_circle</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* 4. Indicaciones - pasos uniformes */}
              <section className="space-y-4" aria-label="Cómo reclamar la promoción">
                <SectionTitle icon="route" chip="3 Pasos Simples">¿Cómo Reclamo mi Promoción?</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-3">
                    <div className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center shrink-0 text-sm border border-primary" aria-hidden>1</div><div className="space-y-1"><p className="font-bold text-on-surface text-[16px] sm:text-[17px]">Contáctate con la empresa</p><p className="text-[14px] sm:text-[15px] text-tertiary">Escríbele por WhatsApp o llámala indicando que eres cliente de JyS Conectados.</p></div></div>
                    <div className="mt-auto flex items-center gap-2 p-3 bg-surface-container-lowest rounded-xl"><span className="material-symbols-outlined text-secondary text-xl" aria-hidden>chat</span><span className="text-[14px] sm:text-[15px] text-on-surface-variant font-medium">WhatsApp y teléfono en el botón inferior</span></div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-3">
                    <div className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center shrink-0 text-sm border border-primary" aria-hidden>2</div><div className="space-y-1"><p className="font-bold text-on-surface text-[16px] sm:text-[17px]">La empresa verifica con JyS</p><p className="text-[14px] sm:text-[15px] text-tertiary">La empresa consulta con nosotros que seas un cliente activo y al día.</p></div></div>
                    <div className="mt-auto flex items-center gap-2 p-3 bg-surface-container-lowest rounded-xl"><span className="material-symbols-outlined text-secondary text-xl" aria-hidden>verified_user</span><span className="text-[14px] sm:text-[15px] text-on-surface-variant font-medium">Validación de cliente activo con JyS</span></div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-3">
                    <div className="flex items-start gap-3"><div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center shrink-0 text-sm border border-primary" aria-hidden>3</div><div className="space-y-1"><p className="font-bold text-on-surface text-[16px] sm:text-[17px]">Recibe tu promoción</p><p className="text-[14px] sm:text-[15px] text-tertiary">Si estás apto, la empresa aplica el beneficio ofrecido en tu compra.</p></div></div>
                    <div className="mt-auto flex items-center gap-2 p-3 bg-surface-container-lowest rounded-xl"><span className="material-symbols-outlined text-primary text-xl" aria-hidden>redeem</span><span className="text-[14px] sm:text-[15px] text-on-surface-variant font-medium">{selected.discount} aplicado</span></div>
                  </div>
                </div>
              </section>

              {/* 5. Términos */}
              <section className="space-y-4" aria-label="Términos y condiciones">
                <SectionTitle icon="info">Términos y Condiciones del Convenio</SectionTitle>
                <p className="text-[15px] sm:text-[16px] text-tertiary leading-relaxed">Válido exclusivamente para Personas Jurídicas y autónomos con contrato de consultoría activo en JYS Asesoría y Capacitación E.I.R.L. Vigente durante todo el año fiscal 2026. No acumulable con otras promociones del proveedor.</p>
              </section>

              {/* 6. Contacto y ubicación */}
              {(selected.address || selected.web || selected.instagram || selected.facebook || selected.email) && (
                <section className="space-y-4" aria-label="Contacto y ubicación del aliado">
                  <SectionTitle icon="storefront">Contacto y Ubicación del Aliado</SectionTitle>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.address && (
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-low border border-surface-container text-[15px] text-tertiary"><span className="material-symbols-outlined text-base text-primary shrink-0 mt-0.5" aria-hidden>location_on</span><span>{selected.address}</span></div>
                    )}
                    {selected.email && (
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container-low border border-surface-container text-[15px] text-tertiary"><span className="material-symbols-outlined text-base text-primary shrink-0 mt-0.5" aria-hidden>mail</span><a href={`mailto:${selected.email}`} className="hover:text-primary hover:underline transition-colors duration-200">{selected.email}</a></div>
                    )}
                  </div>
                  {(selected.web || selected.instagram || selected.phone) && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {selected.web && (
                        <a href={selected.web} target="_blank" rel="noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface text-[14px] font-semibold hover:bg-surface-container-high transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-base" aria-hidden>language</span>Sitio Web</a>
                      )}
                      {selected.instagram && (
                        <a href={selected.instagram} target="_blank" rel="noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface text-[14px] font-semibold hover:bg-surface-container-high transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-base" aria-hidden>photo_camera</span>Instagram</a>
                      )}
                      {selected.facebook && (
                        <a href={selected.facebook} target="_blank" rel="noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface text-[14px] font-semibold hover:bg-surface-container-high transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-base" aria-hidden>thumb_up</span>Facebook</a>
                      )}
                      {selected.phone && (
                        <a href={`tel:${selected.phone.replace(/\s/g, "")}`} className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface text-[14px] font-semibold hover:bg-surface-container-high transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-base" aria-hidden>call</span>{selected.phone}</a>
                      )}
                    </div>
                  )}
                </section>
              )}
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-surface-container-low flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-surface-container shrink-0">
              <div className="flex items-center gap-2 text-tertiary w-full lg:w-auto"><span className="material-symbols-outlined text-lg" aria-hidden>verified</span><span className="text-[15px] sm:text-[16px]">La empresa validará tu condición de cliente activo con JyS antes de aplicar el beneficio.</span></div>
              <div className="flex items-center gap-2.5 w-full lg:w-auto">
                <a href={`tel:${selected.phone.replace(/\s/g, "")}`} className="cursor-pointer flex-1 lg:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 min-h-[46px] rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-high text-[15px] sm:text-[16px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring"><span className="material-symbols-outlined text-base" aria-hidden>call</span>Llamar a {selected.provider}</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-shine cursor-pointer flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 min-h-[46px] rounded-xl font-bold text-[15px] sm:text-[16px] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring bg-primary-container text-on-primary hover:bg-primary border border-primary-container"><span className="material-symbols-outlined text-base" aria-hidden>chat</span>WhatsApp a {selected.provider}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
