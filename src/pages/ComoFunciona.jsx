import { Link } from "react-router-dom";
import { useState } from "react";
import CountUp from "../components/CountUp";
import useTypewriter from "../hooks/useTypewriter";

const faqs = [
  { q: "¿Tiene algún coste el uso de la plataforma para los clientes de JyS?", a: "No. El acceso a JyS Conectados es un beneficio intrínseco y 100% gratuito para todas las empresas que mantengan servicios contables, tributarios, legales o laborales vigentes con JYS Asesoría y Capacitación E.I.R.L." },
  { q: "¿Qué requisitos debe cumplir una empresa externa para ofrecer servicios?", a: "Debe contar con RUC activo y habido, al menos 2 años de experiencia continua, cartas de recomendación verificadas y ofrecer un descuento preferencial comprobable frente a su tarifario público." },
  { q: "¿Cómo se valida la credencial corporativa al solicitar un beneficio?", a: "Cada afiliado cuenta con código QR e identificador único. Al contactar al aliado vía WhatsApp o correo oficial, este contrasta el código en la base de datos de JyS en menos de un minuto." },
  { q: "¿Qué ocurre si un aliado no respeta el descuento o las condiciones?", a: "JyS Conectados cuenta con mesa de mediación directa. En caso de incumplimiento comprobado, la empresa es suspendida y el cliente recibe asesoramiento sin costo." },
];

const HERO_WORDS = ["Exclusivos.", "Corporativos.", "Estratégicos.", "Inteligentes."];

export default function ComoFunciona() {
  const [openIdx, setOpenIdx] = useState(0);
  const scriptWord = useTypewriter(HERO_WORDS);
  return (
    <div className="w-full overflow-hidden">
      {/* Ambient glow - reduced to avoid layout thrashing */}
      <div className="relative w-full">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-primary/10 via-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full animate-float-slow" aria-hidden></div>

        {/* HERO - Persuade mode */}
        <section aria-labelledby="hero-title" className="relative w-full overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:min-h-[70vh] pb-10 lg:pb-12">
            <div className="absolute inset-0 z-0 hidden lg:block" aria-hidden>
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
                alt=""
                loading="eager"
                decoding="async"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/90 via-50% to-transparent to-90%"></div>
            </div>
            {/* Texto */}
            <div className="relative z-10 flex items-center px-[clamp(18px,2.95vw,50px)] py-[clamp(2.5rem,5vw,5rem)]">
              <div className="w-full max-w-xl flex flex-col items-start animate-fadeUp">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[13px] font-bold tracking-wider uppercase mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden></span> Plataforma Oficial de Sinergia Empresarial
                </div>
                <h1 id="hero-title" className="font-extrabold text-[clamp(28px,2.9vw,42px)] leading-[1.06] tracking-tight text-on-surface mb-4">
                  Conectamos Empresas, <br className="hidden sm:inline" />
                  <span className="whitespace-nowrap">
                    <span className="text-primary">Impulsamos Beneficios</span>{" "}
                    <span className="font-script font-bold text-[1.05em] leading-none text-primary-container">
                      {scriptWord}
                      <span className="inline-block w-[2px] h-[0.85em] bg-primary-container ml-1 align-baseline animate-pulse" aria-hidden></span>
                    </span>
                  </span>
                </h1>
                <p className="text-[clamp(17px,1.5vw,21px)] leading-7 text-tertiary max-w-[min(92%,38rem)] mb-6">
                  La extensión oficial de <strong className="text-on-surface font-semibold">JYS Asesoría y Capacitación</strong> que potencia la sinergia comercial entre clientes calificados, firmas auditoras y aliados estratégicos de primer nivel.
                </p>
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
                  <Link to="/catalogo" className="btn-shine group cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-primary-container text-on-primary font-semibold text-[16px] shadow-md hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring">
                    Explorar Promociones <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_forward</span>
                  </Link>
                  <a href="#como-participar" className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-surface-container-high text-on-surface font-semibold text-[16px] hover:bg-surface-container-highest transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-sm focus-ring">
                    <span className="material-symbols-outlined text-lg text-primary" aria-hidden>handshake</span> Quiero Ofrecer Mis Servicios
                  </a>
                </div>
                {/* Metric cards - Trust & Authority badge hover */}
                <div className="grid grid-cols-3 gap-3 w-full pt-2 animate-fadeUp delay-100">
                  {[
                    { icon: "verified_user", end: 50, prefix: "+", suffix: "", label: "Convenios activos aprobados", col: "text-primary" },
                    { icon: "savings", end: 35, prefix: "", suffix: "%", label: "Ahorro medio corporativo", col: "text-secondary" },
                    { icon: "shield", end: 100, prefix: "", suffix: "%", label: "Validación jurídica JyS", col: "text-secondary-container" },
                  ].map((b) => (
                    <div key={b.label} className="p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                      <div className={`flex items-center gap-1 ${b.col} mb-1`}><span className="material-symbols-outlined text-base" aria-hidden>{b.icon}</span><CountUp end={b.end} prefix={b.prefix} suffix={b.suffix} className="font-bold text-on-surface text-[20px]" /></div>
                      <span className="text-[13px] font-bold text-tertiary leading-snug">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen grande, pegada al borde derecho */}
            <div className="relative min-h-[340px] sm:min-h-[460px] animate-fadeUp delay-200">
              <img
                className="absolute inset-0 w-full h-full object-cover lg:hidden"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="Directores ejecutivos revisando convenios en lounge corporativo - JyS Conectados"
                loading="lazy"
                decoding="async"
                width={900}
                height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/20 to-transparent lg:hidden" aria-hidden></div>
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg flex items-center justify-between border border-white/30">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined" aria-hidden>badge</span></div>
                  <div className="truncate"><div className="font-bold text-on-surface text-[15px] truncate">Credencial Virtual JyS</div><div className="text-[13px] text-tertiary">Acceso Multicategoría Inmediato</div></div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] font-bold shrink-0 border border-secondary-fixed-dim">ACTIVO</span>
              </div>
              <div className="absolute top-5 right-5 bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-surface-container animate-pulseSoft">
                <div className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center"><span className="material-symbols-outlined text-sm font-bold" aria-hidden>trending_up</span></div>
                <div><div className="text-[13px] text-tertiary uppercase tracking-wider font-semibold">Red en Expansión</div><div className="font-bold text-on-surface text-[16px]">+1,200 Ejecutivos</div></div>
              </div>
            </div>
          </div>

          {/* Trust logo carousel - Enterprise Gateway */}
          <div className="relative px-[clamp(18px,2.95vw,50px)] pt-6 border-t border-surface-container animate-fadeUp delay-300" aria-label="Empresas que confían">
            <p className="text-[13px] font-bold tracking-widest uppercase text-tertiary text-center mb-4">Respaldado por líderes del empresariado auditado</p>
            <div className="marquee-group marquee-mask overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-3 md:gap-6 opacity-70">
                {["Mi Tribu", "Hashtag Pe", "Pam Smith", "AP Arquitectos", "HPJ Tecnician", "Ópticas Mega Lens", "Credinorte", "Utama", "Andina Crepería", "Mi Tribu", "Hashtag Pe", "Pam Smith", "AP Arquitectos", "HPJ Tecnician", "Ópticas Mega Lens", "Credinorte", "Utama", "Andina Crepería"].map((name, i) => (
                  <span key={`${name}-${i}`} className="px-4 py-2 rounded-lg bg-surface-container-low text-on-surface-variant text-[14px] font-bold whitespace-nowrap cursor-default hover:bg-surface-container transition-colors duration-200" aria-hidden={i >= 9}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3 PILARES */}
      <section aria-labelledby="pilares-title" className="w-full py-[clamp(2rem,4vw,4rem)] bg-surface-container-low">
        <div className="w-full px-[clamp(18px,2.95vw,50px)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4" data-reveal>
            <div className="max-w-2xl">
              <div className="text-[13px] text-primary uppercase font-bold tracking-widest mb-1">Arquitectura de Confianza</div>
              <h2 id="pilares-title" className="font-bold text-[30px] lg:text-[34px] text-on-surface">¿En qué consiste JyS Conectados?</h2>
              <p className="text-[17px] text-tertiary mt-2">No somos un tablón público de anuncios. Diseñamos un club empresarial cerrado que une la oferta y la demanda corporativa con el sello de auditoría de JYS Asesoría y Capacitación.</p>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-[14px] font-semibold"><span className="material-symbols-outlined text-secondary text-base" aria-hidden>verified</span>Modelo de Relacionamiento B2B Exclusivo</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,1.75rem)]">
            {[
              { n: "01", t: "Comunidad Selecta JyS", d: "Conexión directa con una cartera curada de directores, accionistas y gerentes generales pertenecientes a empresas asesoradas activamente por nuestro equipo multidisciplinario.", ic: "groups", bg: "bg-primary-fixed", col: "text-primary", label: "Perfil Auditado" },
              { n: "02", t: "Tarifas y Convenios Preferenciales", d: "Descuentos reales no indexados al mercado masivo. Cada convenio estipula condiciones de servicio y precio VIP negociadas con anterioridad bajo acuerdo marco.", ic: "price_change", bg: "bg-secondary-fixed", col: "text-secondary", label: "Beneficio de Alto Impacto" },
              { n: "03", t: "Cero Comisiones Ocultas", d: "JyS Conectados no cobra intermediación a los usuarios finales ni cobra comisiones por transacción. Fomentamos valor genuino y lealtad corporativa dentro del ecosistema.", ic: "balance", bg: "bg-tertiary-fixed", col: "text-on-tertiary-fixed", label: "100% Transparente" },
            ].map((p, i) => (
              <article key={p.n} data-reveal data-reveal-delay={i * 90} className="group glow-border relative bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-default">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center ${p.col} mb-4 group-hover:scale-105 transition-transform duration-200 border border-black/5`}><span className="material-symbols-outlined text-2xl" aria-hidden>{p.ic}</span></div>
                  <div className={`text-[13px] ${p.col} font-bold uppercase tracking-wider mb-1`}>Pilar {p.n}</div>
                  <h3 className="font-bold text-[20px] text-on-surface mb-2">{p.t}</h3>
                  <p className="text-[16px] text-tertiary leading-relaxed">{p.d}</p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-high/30 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl border-t border-surface-container">
                  <span className="text-[13px] text-on-surface font-semibold">{p.label}</span><span className={`material-symbols-outlined ${p.col} text-base`} aria-hidden>check_circle</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO PARTICIPAS */}
      <section id="como-participar" aria-labelledby="participar-title" className="w-full py-[clamp(2.5rem,5vw,6rem)] bg-surface">
        <div className="w-full px-[clamp(18px,2.95vw,50px)]">
          <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] font-bold uppercase tracking-wider border border-secondary-fixed-dim">Mecanismo Paso a Paso</span>
            <h2 id="participar-title" className="font-bold text-[30px] lg:text-[40px] text-on-surface mt-3 tracking-tight">¿Cómo Participas en el Ecosistema?</h2>
            <p className="text-[17px] text-tertiary mt-2">Dos rutas diseñadas para optimizar el valor mutuo: si buscas maximizar la eficiencia de tus compras de servicios o si deseas convertirte en un proveedor preferente.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1rem,2.5vw,2rem)] items-start">
            <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-surface-container relative overflow-hidden hover:shadow-lg transition-shadow duration-200" data-reveal>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" aria-hidden></div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/10"><span className="material-symbols-outlined" aria-hidden>person_pin</span></div><div><span className="text-[13px] text-primary font-bold uppercase tracking-wider">Ruta Comprador & Beneficiario</span><h3 className="font-bold text-[20px] text-on-surface">Para Miembros y Clientes</h3></div></div>
              </div>
              <div className="space-y-6">
                {[
                  { n: 1, t: "Activa tu credencial o código de afiliado JyS", d: "Tu ejecutivo te otorgará el identificador único que valida que tu empresa forma parte de la cartera certificada.", active: true },
                  { n: 2, t: "Explora el catálogo categorizado", d: "Navega por rubros clave como Asesoría Legal, Soluciones Cloud y Software, Salud Ocupacional, Coworking y más.", pills: ["Legal", "SaaS ERP", "Salud & Seguros", "Coworking"] },
                  { n: 3, t: "Despliega el procedimiento exprés de reclamo", d: "Haz clic en el convenio para revelar términos de vigencia, contacto prioritario y botón directo de WhatsApp." },
                  { n: 4, t: "Presenta tu cupón o credencial digital", d: "Al formalizar la orden con el aliado, se aplicará de forma directa el beneficio contractual garantizado por JyS.", active: true },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center shrink-0 mt-0.5 text-[15px] border ${s.active ? "bg-primary text-on-primary border-primary" : "bg-surface-container-high text-on-surface border-surface-container-highest"}`}>{s.n}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-on-surface text-[16px]">{s.t}</h4><p className="text-[15px] text-tertiary mt-1">{s.d}</p>
                      {s.pills && <div className="flex flex-wrap gap-1.5 mt-2">{s.pills.map((pl) => <span key={pl} className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-[13px]">{pl}</span>)}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-surface-container-low p-3 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary text-[13px] font-bold"><span className="material-symbols-outlined text-base" aria-hidden>task_alt</span>Garantía de cumplimiento incluida</div>
                <Link to="/catalogo" className="cursor-pointer font-bold text-on-surface text-[13px] hover:text-primary transition-colors duration-200 flex items-center gap-1 focus-ring rounded px-1">Ver Promociones <span className="material-symbols-outlined text-sm" aria-hidden>chevron_right</span></Link>
              </div>
            </article>

            <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-md border border-surface-container relative overflow-hidden hover:shadow-lg transition-shadow duration-200" data-reveal data-reveal-delay="120">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary-container" aria-hidden></div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/10"><span className="material-symbols-outlined" aria-hidden>corporate_fare</span></div><div><span className="text-[13px] text-secondary font-bold uppercase tracking-wider">Ruta Proveedor & Aliado</span><h3 className="font-bold text-[20px] text-on-surface">Para Empresas y Profesionales</h3></div></div>
              </div>
              <div className="space-y-6">
                {[
                  { n: 1, t: "¡Te unes al programa!", d: "El cliente de JyS confirma su participación en JyS Conectados, sin ningún costo adicional.", active: true },
                  { n: 2, t: "Tú eliges el beneficio", d: "Nos indicas qué descuento, promoción, producto o servicio especial deseas ofrecer a los demás clientes de JyS." },
                  { n: 3, t: "Formalizamos el convenio", d: "Firmamos un convenio donde establecemos las condiciones, vigencia y alcance del beneficio." },
                  { n: 4, t: "¡Visitamos tu empresa!", d: "Coordinamos una fecha para visitar tus instalaciones y realizar fotos y videos de tus productos, servicios y establecimiento." },
                  { n: 5, t: "¡Promocionamos tu negocio!", d: "Publicamos el material audiovisual en los canales de JyS Conectados para difundir tu beneficio.", active: true },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center shrink-0 mt-0.5 text-[15px] border ${s.active ? "bg-secondary-container text-on-secondary-container border-secondary-fixed-dim" : "bg-surface-container-high text-on-surface border-surface-container-highest"}`}>{s.n}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-on-surface text-[16px]">{s.t}</h4><p className="text-[15px] text-tertiary mt-1">{s.d}</p>
                      {s.check && <div className="flex items-center gap-1.5 mt-2 text-tertiary text-[13px]"><span className="material-symbols-outlined text-sm text-secondary" aria-hidden>verified</span>Evaluación en 48 a 72 horas hábiles</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-secondary-fixed/40 p-3 rounded-xl flex items-center justify-between border border-secondary-fixed-dim/30">
                <div className="flex items-center gap-2 text-on-secondary-fixed text-[13px] font-bold"><span className="material-symbols-outlined text-base" aria-hidden>rocket_launch</span>Canal comercial B2B de alta conversión</div>
                <Link to="/afiliate" className="cursor-pointer font-bold text-on-secondary-fixed-variant text-[13px] hover:underline flex items-center gap-1 focus-ring rounded px-1">Postular mi Empresa <span className="material-symbols-outlined text-sm" aria-hidden>chevron_right</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Sectores - badge hover effects */}
      <section aria-labelledby="sectores-title" className="w-full py-[clamp(2rem,3.5vw,3rem)] bg-surface-container-lowest border-y border-surface-container">
        <div className="w-full px-[clamp(18px,2.95vw,50px)]">
          <div className="flex items-center justify-between mb-6" data-reveal>
            <div><span className="text-[13px] text-primary font-bold uppercase tracking-wider">Diversidad del Ecosistema</span><h3 id="sectores-title" className="font-bold text-[20px] text-on-surface">Sectores y Rubros Habilitados</h3></div>
            <span className="text-tertiary text-[15px] hidden md:inline">Todos los servicios operan bajo acuerdo marco JyS</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(0.75rem,1.5vw,1.25rem)]">
            {[
              { ic: "terminal", t: "Tecnología & TI", n: "1 convenio", bg: "bg-secondary-fixed text-secondary" },
              { ic: "campaign", t: "Marketing & Branding", n: "1 convenio", bg: "bg-tertiary-fixed text-tertiary" },
              { ic: "architecture", t: "Diseño & Construcción", n: "2 convenios", bg: "bg-tertiary-fixed text-tertiary" },
              { ic: "domain", t: "Inmobiliaria", n: "1 convenio", bg: "bg-primary-fixed text-primary" },
              { ic: "visibility", t: "Salud & Óptica", n: "1 convenio", bg: "bg-primary-fixed text-primary" },
              { ic: "savings", t: "Finanzas & Créditos", n: "1 convenio", bg: "bg-secondary-fixed text-secondary" },
              { ic: "restaurant", t: "Gastronomía", n: "1 convenio", bg: "bg-tertiary-fixed text-tertiary" },
              { ic: "hotel", t: "Alojamiento & Turismo", n: "1 convenio", bg: "bg-primary-fixed text-primary" },
              { ic: "child_care", t: "Juego & Familia", n: "1 convenio", bg: "bg-secondary-fixed text-secondary" },
            ].map((c) => (
              <Link key={c.t} to="/catalogo" className="cursor-pointer p-4 rounded-xl bg-surface-container-low hover:bg-surface-container hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center focus-ring">
                <div className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center mb-2 border border-black/5`}><span className="material-symbols-outlined" aria-hidden>{c.ic}</span></div>
                <span className="font-bold text-on-surface text-[15px]">{c.t}</span><span className="text-[14px] text-tertiary mt-1">{c.n}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía + FAQ - audit score improvement: semantic, focus, contrast */}
      <section className="w-full py-[clamp(2rem,4vw,4rem)] bg-surface-container-low">
        <div className="w-full px-[clamp(18px,2.95vw,50px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.25rem,3vw,2rem)] items-start">
            <div className="lg:col-span-5 bg-gradient-to-br from-inverse-surface to-inverse-surface/90 text-inverse-on-surface p-6 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[520px] border border-white/10" data-reveal>
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-secondary-container/10 rounded-full blur-2xl" aria-hidden></div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/20 text-secondary-fixed-dim text-[13px] font-bold uppercase tracking-wider mb-6 border border-white/10"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg" aria-hidden>stars</span>Sello Oficial de Calidad y Solvencia</div>
                <h3 className="font-bold text-[26px] leading-tight mb-3">Garantía Corporativa JYS Asesoría y Capacitación</h3>
                <p className="text-[16px] text-tertiary-fixed-dim mb-6 leading-relaxed">Cada convenio publicado ha superado un filtro estricto de auditoría tributaria, verificación de reclamos ante INDECOPI y solvencia técnica. No avalamos intermediarios desconocidos; defendemos la tranquilidad de su empresa.</p>
                <ul className="space-y-2 mb-8">
                  {["Firma de Convenio Bilateral de Calidad de Servicio (SLA)", "Canal de arbitraje directo y resolución exprés por JyS", "Actualización quincenal de beneficios vigentes"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[14px]"><span className="material-symbols-outlined text-secondary-fixed-dim text-lg" aria-hidden>check_box</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-container-highest/10 -mx-6 -mb-6 p-6 border-t border-white/10">
                <div className="text-secondary-fixed font-bold text-[14px] mb-1">¿Deseas postular o necesitas una credencial VIP?</div>
                <p className="text-tertiary-fixed-dim text-[14px] mb-3">Comunícate de inmediato con el comité evaluador de alianzas.</p>
                <Link to="/afiliate" className="cursor-pointer inline-flex items-center justify-center gap-2 w-full py-3 min-h-[44px] rounded-xl bg-secondary-container text-on-secondary-container font-bold text-[16px] hover:bg-secondary-fixed-dim transition-colors duration-200 focus-ring">Ir al Centro de Afiliación y Contacto <span className="material-symbols-outlined text-lg" aria-hidden>arrow_forward</span></Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3" data-reveal data-reveal-delay="120">
              <div className="mb-2"><span className="text-[13px] text-primary font-bold uppercase tracking-wider">Despejando Inquietudes</span><h3 className="font-bold text-[26px] text-on-surface">Preguntas Clave sobre JyS Conectados</h3></div>
              {faqs.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container">
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="cursor-pointer flex items-center justify-between w-full text-left min-h-[44px] focus-ring rounded-lg"
                    >
                      <span className="font-bold text-on-surface text-[16px] pr-4">{f.q}</span>
                      <span className={`material-symbols-outlined text-tertiary transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} aria-hidden>expand_more</span>
                    </button>
                    <div id={`faq-${i}`} role="region" className={`${isOpen ? "block" : "hidden"} mt-3 pt-3 text-[16px] text-tertiary border-t border-surface-container`}>{f.a}</div>
                  </div>
                );
              })}
              <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between mt-1">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary" aria-hidden>support_agent</span><span className="text-[14px] text-on-surface">¿Tienes una duda adicional?</span></div>
                <Link to="/afiliate" className="cursor-pointer font-bold text-primary text-[14px] hover:underline shrink-0 focus-ring rounded px-2 py-1">Escríbenos directamente</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-[clamp(2rem,4vw,3rem)] bg-primary text-on-primary">
        <div className="w-full px-[clamp(18px,2.95vw,50px)] flex flex-col md:flex-row items-center justify-between gap-6" data-reveal>
          <div className="max-w-xl"><h3 className="font-bold text-[26px]">Empieza a maximizar el valor de tu afiliación hoy</h3><p className="text-on-primary-container text-[16px] mt-1">Descubre todas las ofertas disponibles o súmate como aliado para conectar con el empresariado más consolidado.</p></div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/catalogo" className="cursor-pointer px-6 py-3 min-h-[44px] rounded-xl bg-surface-container-lowest text-primary font-bold text-[16px] hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-md focus-ring inline-flex items-center">Ver Directorio de Convenios</Link>
            <Link to="/afiliate" className="cursor-pointer px-6 py-3 min-h-[44px] rounded-xl bg-primary-container border border-white/20 text-on-primary font-bold text-[16px] hover:bg-on-primary-fixed-variant transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring inline-flex items-center">Unirme a la Red</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
