import { useState } from "react";
import IsometricPlayButton from "../components/IsometricPlayButton";

export default function AfiliateContacto() {
  const [memberOpen, setMemberOpen] = useState(false);
  const [schedOpen, setSchedOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({ razon: "", ruc: "", servicio: "tecnologia", descuento: "", contacto: "", telefono: "" });

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  const handlePartner = (e) => {
    e.preventDefault();
    showToast("¡Gracias por enviar la postulación! Revisaremos la propuesta en menos de 24 horas.");
    setForm({ razon: "", ruc: "", servicio: "tecnologia", descuento: "", contacto: "", telefono: "" });
  };
  const handleMember = (e) => {
    e.preventDefault();
    showToast("¡Afiliación enviada con éxito! Revisa tu bandeja corporativa.");
    setMemberOpen(false);
  };
  const handleSched = (e) => {
    e.preventDefault();
    showToast("¡Videollamada confirmada! Enlace enviado a tu calendario y WhatsApp.");
    setSchedOpen(false);
  };

  return (
    <div className="w-full bg-background">
      <div className="w-full px-[clamp(18px,2.95vw,50px)] pb-10">
        {/* Hero */}
        <section aria-labelledby="afiliate-title" className="relative pt-[clamp(1rem,2vw,1.75rem)] pb-[clamp(1.5rem,3vw,2.5rem)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-fadeUp">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] tracking-wider uppercase font-bold border border-secondary-fixed-dim"><span className="material-symbols-outlined text-sm text-secondary" aria-hidden>handshake</span>Ecosistema de Crecimiento B2B</div>
              <h1 id="afiliate-title" className="font-extrabold text-[clamp(30px,3.75vw,50px)] leading-none tracking-tight text-on-surface pt-2">Únete a <span className="text-primary-container">JyS Conectados</span> y <span className="font-script font-bold text-[1.15em] leading-none text-primary-container">Multiplica tus Oportunidades Comerciales.</span></h1>
              <p className="text-[clamp(15px,1.3vw,18px)] text-tertiary pt-2 max-w-[min(92%,42rem)]">Conéctate con nuestro equipo de consultores o intégrate a la mayor red de convenios empresariales respaldada por auditores y asesores legales.</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low shadow-sm self-start md:self-auto animate-fadeUp delay-100">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 border border-primary/10"><span className="material-symbols-outlined text-2xl" aria-hidden>hub</span></div>
              <div><div className="font-bold text-on-surface text-[18px]">+2,400 Firmas</div><div className="text-[13px] text-tertiary">Actualmente enlazadas en red</div></div>
            </div>
          </div>
        </section>

        {/* Dual Path */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,2vw,1.5rem)] mb-8 animate-fadeUp delay-200">
          <article className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-primary-fixed/30 blur-2xl pointer-events-none" aria-hidden></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface text-[13px] uppercase tracking-wide font-semibold">Ruta 01 • Directivo / Miembro</span>
                <span className="material-symbols-outlined text-primary-container text-3xl" aria-hidden>corporate_fare</span>
              </div>
              <h2 className="font-bold text-[24px] text-on-surface mb-2">Quiero Afiliarme como Miembro / Cliente</h2>
              <p className="text-[16px] text-tertiary mb-6">Diseñado para CEOs, gerentes de compras y responsables de operaciones que buscan maximizar eficiencias de coste.</p>
              <div className="w-full h-44 rounded-xl overflow-hidden mb-6 relative shadow-inner">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Sala de directorio JyS - networking ejecutivo" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent flex items-end p-3" aria-hidden>
                  <span className="text-[13px] text-inverse-on-surface font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-sm text-secondary-fixed" aria-hidden>workspace_premium</span>Acceso Ilimitado • Membresía Vigente 2026</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { t: "Acceso sin límites a descuentos de catálogo", d: "Tarifas preferenciales garantizadas en servicios jurídicos, software, consultoría y logística." },
                  { t: "Cupones y bonos mensuales exclusivos", d: "Acreditación directa a balances operativos y líneas prioritarias." },
                  { t: "Mesas de Networking Ejecutivo JyS", d: "Convocatorias privadas trimestrales para generar sinergias." },
                ].map((b) => (
                  <li key={b.t} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 mt-0.5 border border-primary-fixed-dim"><span className="material-symbols-outlined text-primary text-sm font-bold" aria-hidden>check</span></div>
                    <div><p className="font-semibold text-on-surface text-[15px]">{b.t}</p><p className="text-[14px] text-tertiary">{b.d}</p></div>
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-xl bg-surface-container-low mb-6"><div className="text-[13px] text-primary font-bold uppercase tracking-wider mb-1">Requisitos de Ingreso</div><p className="text-[14px] text-on-surface-variant">Ser cliente activo de JyS Asesoría o registrarse con RUC válido.</p></div>
            </div>
            <button onClick={() => setMemberOpen(true)} className="btn-shine cursor-pointer w-full py-3 px-4 min-h-[44px] rounded-xl bg-primary-container text-on-primary font-semibold text-[16px] hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-md flex items-center justify-center gap-2 focus-ring"> <span className="material-symbols-outlined text-lg" aria-hidden>bolt</span>Activar Mi Afiliación Gratuita</button>
          </article>

          <article className="lg:col-span-7 flex flex-col justify-between p-6 rounded-xl bg-surface-container-lowest shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" aria-hidden></div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] uppercase tracking-wide font-semibold border border-secondary-fixed-dim">Ruta 02 • Proveedor Calificado</span>
                <span className="material-symbols-outlined text-secondary text-3xl" aria-hidden>storefront</span>
              </div>
              <h2 className="font-bold text-[24px] text-on-surface mb-2">Quiero Ofrecer Servicios de mi Empresa</h2>
              <p className="text-[16px] text-tertiary mb-4">Integra tu portafolio en el directorio oficial de compras de más de 2,400 corporaciones.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                <div className="p-3 rounded-xl bg-surface-container-low"><span className="material-symbols-outlined text-secondary text-xl mb-1" aria-hidden>domain</span><div className="font-bold text-on-surface text-[14px]">Alcance Directo</div><div className="text-[14px] text-tertiary">Directores de compra verificados.</div></div>
                <div className="p-3 rounded-xl bg-surface-container-low"><span className="material-symbols-outlined text-primary-container text-xl mb-1" aria-hidden>verified_user</span><div className="font-bold text-on-surface text-[14px]">Sello de Calidad</div><div className="text-[14px] text-tertiary">Distintivo homologado por JyS.</div></div>
                <div className="p-3 rounded-xl bg-surface-container-low"><span className="material-symbols-outlined text-secondary text-xl mb-1" aria-hidden>trending_up</span><div className="font-bold text-on-surface text-[14px]">Ventas B2B</div><div className="text-[14px] text-tertiary">Incremento en tracción mensual.</div></div>
              </div>
              <form className="space-y-3" onSubmit={handlePartner} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col"><label htmlFor="razon" className="text-[14px] font-semibold text-on-surface mb-1">Razón Social <span className="text-primary">*</span></label><input id="razon" value={form.razon} onChange={(e) => setForm({ ...form, razon: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] placeholder:text-tertiary/60 focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="Ej. Innova Logística S.L." required aria-required="true" type="text" /></div>
                  <div className="flex flex-col"><label htmlFor="ruc" className="text-[14px] font-semibold text-on-surface mb-1">RUC / CIF <span className="text-primary">*</span></label><input id="ruc" value={form.ruc} onChange={(e) => setForm({ ...form, ruc: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] placeholder:text-tertiary/60 focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="B-98765432" required aria-required="true" type="text" inputMode="numeric" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col"><label htmlFor="servicio" className="text-[14px] font-semibold text-on-surface mb-1">Servicio Ofrecido</label><select id="servicio" value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200"><option value="tecnologia">Tecnología, Cloud y Ciberseguridad</option><option value="logistica">Transporte, Flotas y Comercio Exterior</option><option value="marketing">Consultoría Estratégica y Marketing B2B</option><option value="facilities">Mantenimiento, Energía y Suministros</option><option value="rrhh">Reclutamiento y Beneficios Corporativos</option></select></div>
                  <div className="flex flex-col"><label htmlFor="descuento" className="text-[14px] font-semibold text-on-surface mb-1">Descuento Propuesto <span className="text-primary">*</span></label><input id="descuento" value={form.descuento} onChange={(e) => setForm({ ...form, descuento: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] placeholder:text-tertiary/60 focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="Ej. 15% permanente + onboarding" required aria-required="true" type="text" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col"><label htmlFor="contacto" className="text-[14px] font-semibold text-on-surface mb-1">Persona de Contacto <span className="text-primary">*</span></label><input id="contacto" value={form.contacto} onChange={(e) => setForm({ ...form, contacto: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] placeholder:text-tertiary/60 focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="Elena Ramos • Directora Comercial" required aria-required="true" type="text" /></div>
                  <div className="flex flex-col"><label htmlFor="telefono" className="text-[14px] font-semibold text-on-surface mb-1">Teléfono Directo <span className="text-primary">*</span></label><input id="telefono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] placeholder:text-tertiary/60 focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="+51 984 321 000" required aria-required="true" type="tel" inputMode="tel" /></div>
                </div>
                <div className="pt-2 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-tertiary text-[13px] font-semibold"><span className="material-symbols-outlined text-sm text-primary" aria-hidden>lock</span>Evaluación de cumplimiento en 24-48 horas</div>
                  <button type="submit" className="group cursor-pointer py-3 px-6 min-h-[44px] rounded-xl bg-inverse-surface text-inverse-on-surface font-semibold text-[16px] hover:bg-tertiary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-md flex items-center gap-2 focus-ring">Enviar Postulación <span className="material-symbols-outlined text-secondary-fixed text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_forward</span></button>
                </div>
              </form>
            </div>
          </article>
        </div>

        {/* Canales */}
        <section aria-labelledby="canales-title" className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-2" data-reveal>
            <div><div className="text-[13px] text-primary uppercase tracking-widest font-bold">Líneas Seguras • Atención Inmediata</div><h2 id="canales-title" className="font-bold text-[22px] text-on-surface">Canales Oficiales de JYS Asesoría y Capacitación</h2></div>
            <div className="flex items-center gap-2 text-tertiary text-[14px]"><span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden></span>Centrales operativas en tiempo real</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(0.75rem,1.5vw,1.25rem)]">
            <div className="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div><div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4 border border-primary-fixed-dim"><span className="material-symbols-outlined text-2xl" aria-hidden>call</span></div><div className="text-[13px] text-tertiary uppercase tracking-wider font-semibold">Mesa Telefónica Central</div><h3 className="font-bold text-[20px] text-on-surface mt-1 mb-1">Líneas Prioritarias</h3><p className="text-[14px] text-tertiary mb-4">Atención directa para acuerdos comerciales y quejas operativas.</p></div>
              <div className="space-y-2 bg-surface-container-low p-3 rounded-lg"><div className="flex items-center justify-between"><a href="tel:+51922506294" className="cursor-pointer font-bold text-on-surface text-[15px] hover:text-primary transition-colors duration-200">+51 922 506 294</a><span className="text-[13px] text-primary bg-primary-fixed px-2 py-0.5 rounded-full font-bold border border-primary-fixed-dim">Sede Central</span></div><div className="flex items-center justify-between"><a href="tel:+51947920237" className="cursor-pointer font-bold text-on-surface text-[15px] hover:text-primary transition-colors duration-200">+51 947 920 237</a><span className="text-[13px] text-secondary bg-secondary-fixed px-2 py-0.5 rounded-full font-bold border border-secondary-fixed-dim">Línea Urgencias</span></div></div>
            </div>
            <div className="md:col-span-4 p-6 rounded-xl bg-gradient-to-br from-inverse-surface to-tertiary text-inverse-on-surface shadow-md flex flex-col justify-between relative overflow-hidden border border-white/10">
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" aria-hidden></div>
              <div><div className="flex items-center justify-between mb-4"><div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center border border-secondary-fixed-dim"><span className="material-symbols-outlined text-2xl" aria-hidden>chat</span></div><span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] font-bold uppercase border border-secondary-fixed-dim">Respuesta &lt; 5 min</span></div><div className="text-[13px] text-secondary-fixed-dim uppercase tracking-wider font-semibold">Mensajería Corporativa</div><h3 className="font-bold text-[20px] text-inverse-on-surface mt-1 mb-1">WhatsApp Oficial JyS Conectados</h3><p className="text-[14px] text-tertiary-fixed-dim mb-4">Chatea directamente con nuestro equipo de verificación.</p></div>
              <div className="space-y-3"><div className="font-bold text-secondary-fixed text-[18px] tracking-wider">+51 922 506 294</div><a href="https://wa.me/51922506294?text=Hola%20JyS%20Conectados,%20deseo%20más%20información" target="_blank" rel="noreferrer" className="cursor-pointer w-full py-2.5 px-4 min-h-[44px] rounded-xl bg-primary-container text-on-primary font-semibold text-[16px] hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] flex items-center justify-center gap-2 shadow-sm focus-ring"> <span className="material-symbols-outlined text-lg" aria-hidden>forum</span>Chatear con un Asesor</a></div>
            </div>
            <div className="md:col-span-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div><div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface mb-4"><span className="material-symbols-outlined text-2xl" aria-hidden>mail</span></div><div className="text-[13px] text-tertiary uppercase tracking-wider font-semibold">Buzones Institucionales</div><h3 className="font-bold text-[20px] text-on-surface mt-1 mb-1">Correos Electrónicos</h3><p className="text-[14px] text-tertiary mb-4">Comunicaciones contractuales y validaciones oficiales.</p></div>
              <div className="space-y-2"><div className="p-3 rounded-lg bg-surface-container-low flex flex-col"><span className="text-[13px] text-tertiary">Gestión de Socios:</span><a href="mailto:jysasesoria@gmail.com" className="cursor-pointer font-bold text-primary text-[15px] hover:underline focus-ring rounded">jysasesoria@gmail.com</a></div><div className="p-3 rounded-lg bg-surface-container-low flex flex-col"><span className="text-[13px] text-tertiary">Alianzas y Convenios:</span><a href="mailto:jysasesoria@gmail.com" className="cursor-pointer font-bold text-primary text-[15px] hover:underline focus-ring rounded">jysasesoria@gmail.com</a></div></div>
            </div>
          </div>
        </section>

        {/* Sede + Gestor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,2vw,1.5rem)] mb-8">
          <section aria-labelledby="sede-title" data-reveal className="lg:col-span-7 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary text-[13px] uppercase font-bold tracking-widest"><span className="material-symbols-outlined text-base" aria-hidden>apartment</span>Oficina Principal de Negocios</div>
              <h3 id="sede-title" className="font-bold text-[20px] text-on-surface mb-1">Urb. Miraflores Country Club IV Etapa · Mz. AU Lote 20 – Dpto. 10</h3>
              <p className="text-[15px] text-tertiary mb-4">Sede física de JYS Asesoría y Capacitación en Castilla – Piura. Salas ejecutivas reservadas para reuniones bilaterales.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center gap-2"><span className="material-symbols-outlined text-primary text-xl" aria-hidden>schedule</span><div><div className="text-[13px] text-tertiary font-bold uppercase">Horario</div><div className="text-[14px] text-on-surface font-semibold">Lun a Vie: 09:00 a 19:00 hrs</div></div></div>
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-xl" aria-hidden>car_rental</span><div><div className="text-[13px] text-tertiary font-bold uppercase">Parking</div><div className="text-[14px] text-on-surface font-semibold">Acceso concertado Planta -1</div></div></div>
              </div>
            </div>
            <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner bg-surface-container">
              <iframe
                title="Ubicación de JYS Asesoría y Capacitación"
                src="https://maps.google.com/maps?q=-5.1724,-80.61037&z=16&hl=es&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-base" aria-hidden>pin_drop</span>
                <span className="text-[13px] text-on-surface font-bold">Miraflores Country Club · Dpto. 10</span>
              </div>
              <a
                href="https://maps.app.goo.gl/GMVhHBCxtM4YiAjx9"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir ubicación en Google Maps"
                className="cursor-pointer absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-[13px] font-bold shadow-sm hover:bg-surface-container-lowest focus-ring"
              >
                Abrir en Maps <span className="material-symbols-outlined text-primary text-sm" aria-hidden>open_in_new</span>
              </a>
            </div>
          </section>
          <section aria-labelledby="gestor-title" data-reveal data-reveal-delay="120" className="lg:col-span-5 p-6 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4"><span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[13px] uppercase font-bold tracking-wide border border-secondary-fixed-dim">Servicio de Enlace VIP</span><span className="material-symbols-outlined text-secondary text-2xl" aria-hidden>video_call</span></div>
              <h3 id="gestor-title" className="font-bold text-[20px] text-on-surface mb-2">Asignación de Gestor Personal</h3>
              <p className="text-[15px] text-tertiary mb-6">¿Dudas sobre convenios? Conéctate de inmediato con tu asesor corporativo.</p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm mb-6">
                <div className="relative shrink-0"><img className="w-16 h-16 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Camila Sánchez Díaz, Consultora Senior de Convenios" loading="lazy" decoding="async" /><span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" aria-label="Disponible ahora"></span></div>
                <div><div className="font-bold text-on-surface text-[16px]">Camila Sánchez Díaz</div><div className="text-primary text-[13px] font-semibold">Consultora Senior de Convenios • JyS</div><div className="flex items-center gap-1 text-tertiary text-[14px] mt-0.5"><span className="material-symbols-outlined text-sm text-secondary" aria-hidden>star</span>Disponibilidad inmediata hoy</div></div>
              </div>
              <ul className="space-y-2 text-[14px] text-tertiary mb-6">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-primary-container" aria-hidden>timer</span>Videollamada express de 15 minutos sin compromiso.</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base text-primary-container" aria-hidden>shield</span>Resolución de dudas arancelarias y marco legal.</li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <IsometricPlayButton label="Ver demo de videollamada" onClick={() => setSchedOpen(true)} />
              <button onClick={() => setSchedOpen(true)} className="cursor-pointer flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-secondary-container text-on-secondary-container font-semibold text-[16px] hover:brightness-105 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 focus-ring border border-secondary-fixed-dim"><span className="material-symbols-outlined text-lg" aria-hidden>calendar_month</span>Agendar Videollamada de 15 Minutos</button>
            </div>
          </section>
        </div>

        <section aria-labelledby="convenio-title" data-reveal className="p-6 rounded-xl bg-surface-container-lowest shadow-sm relative overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0 border border-secondary-fixed-dim"><span className="material-symbols-outlined text-3xl" aria-hidden>contract_edit</span></div>
              <div>
                <div className="flex items-center gap-2 mb-1"><span id="convenio-title" className="font-bold text-[18px] text-on-surface">Convenio de Participación — Programa JyS Conectados</span><span className="material-symbols-outlined text-secondary text-xl" aria-hidden>verified</span></div>
                <p className="text-[15px] text-tertiary leading-relaxed mb-4">Resumen de términos del convenio que firman las empresas participantes con JYS Asesoría y Capacitación E.I.R.L.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-surface-container-low"><div className="text-[13px] text-tertiary font-bold uppercase mb-1">Participación</div><p className="text-[14px] text-on-surface-variant">Voluntaria y sin exclusividad para ninguna de las partes.</p></div>
                  <div className="p-3 rounded-lg bg-surface-container-low"><div className="text-[13px] text-tertiary font-bold uppercase mb-1">Beneficio comercial</div><p className="text-[14px] text-on-surface-variant">Descuento o condición preferencial definida en el convenio, no acumulable salvo acuerdo expreso.</p></div>
                  <div className="p-3 rounded-lg bg-surface-container-low"><div className="text-[13px] text-tertiary font-bold uppercase mb-1">Verificación de cliente activo</div><p className="text-[14px] text-on-surface-variant">El aliado debe validar con JyS la condición de cliente activo antes de aplicar el beneficio.</p></div>
                  <div className="p-3 rounded-lg bg-surface-container-low"><div className="text-[13px] text-tertiary font-bold uppercase mb-1">Vigencia</div><p className="text-[14px] text-on-surface-variant">12 meses renovables automáticamente, sin garantía de ventas o clientes.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="garantia-title" data-reveal className="p-6 rounded-xl bg-surface-container-lowest shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 border border-primary-fixed-dim"><span className="material-symbols-outlined text-3xl" aria-hidden>gavel</span></div>
              <div><div className="flex items-center gap-2 mb-1"><span id="garantia-title" className="font-bold text-[18px] text-on-surface">Compromiso y Garantía Jurídica JyS</span><span className="material-symbols-outlined text-primary text-xl" aria-hidden>verified</span></div><p className="text-[15px] text-tertiary leading-relaxed">Cada convenio pasa por rigurosa auditoría de solvencia comercial y fiscal dirigida por auditores y abogados colegiados de <strong>JYS Asesoría y Capacitación E.I.R.L.</strong></p></div>
            </div>
            <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-end">
              <div className="text-right hidden sm:block"><div className="text-[13px] text-tertiary uppercase font-bold tracking-wider">Certificación</div><div className="font-bold text-on-surface text-[14px]">ISO 27001 • Compliance 2026</div></div>
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface"><span className="material-symbols-outlined text-2xl" aria-hidden>policy</span></div>
            </div>
          </div>
        </section>
      </div>

      {/* Modals - hardened with aria */}
      {memberOpen && (
        <div className="fixed inset-0 z-[var(--z-modal)] bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="member-title">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl shadow-2xl p-6 relative animate-fadeUp">
            <button onClick={() => setMemberOpen(false)} aria-label="Cerrar" className="cursor-pointer absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary hover:text-on-surface transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-2xl" aria-hidden>close</span></button>
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-4 border border-primary-fixed-dim"><span className="material-symbols-outlined text-2xl" aria-hidden>badge</span></div>
            <h3 id="member-title" className="font-bold text-[20px] text-on-surface mb-1">Activa tu Afiliación Gratuita</h3>
            <p className="text-[14px] text-tertiary mb-4">Introduce tu información corporativa para expedir tus credenciales.</p>
            <form className="space-y-3" onSubmit={handleMember} noValidate>
              <div><label htmlFor="member-nombre" className="text-[14px] font-semibold text-on-surface mb-1 block">Nombre y Apellidos <span className="text-primary">*</span></label><input id="member-nombre" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="Roberto Fernández Vidal" required aria-required="true" type="text" /></div>
              <div><label htmlFor="member-ruc" className="text-[14px] font-semibold text-on-surface mb-1 block">RUC de la Empresa <span className="text-primary">*</span></label><input id="member-ruc" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="20608400959" required aria-required="true" type="text" inputMode="numeric" /></div>
              <div><label htmlFor="member-email" className="text-[14px] font-semibold text-on-surface mb-1 block">Correo Corporativo <span className="text-primary">*</span></label><input id="member-email" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="r.fernandez@miempresa.com" required aria-required="true" type="email" /></div>
              <div className="pt-2 flex items-center justify-end gap-2"><button type="button" onClick={() => setMemberOpen(false)} className="cursor-pointer px-4 py-2 min-h-[44px] text-tertiary text-[16px] hover:text-on-surface transition-colors duration-200 focus-ring rounded-lg">Cancelar</button><button type="submit" className="cursor-pointer px-6 py-2.5 min-h-[44px] rounded-xl bg-primary-container text-on-primary font-semibold text-[16px] hover:bg-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring border border-primary-container">Confirmar Afiliación</button></div>
            </form>
          </div>
        </div>
      )}

      {schedOpen && (
        <div className="fixed inset-0 z-[var(--z-modal)] bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="sched-title">
          <div className="bg-surface-container-lowest max-w-md w-full rounded-xl shadow-2xl p-6 relative animate-fadeUp">
            <button onClick={() => setSchedOpen(false)} aria-label="Cerrar" className="cursor-pointer absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary hover:text-on-surface transition-colors duration-200 focus-ring"><span className="material-symbols-outlined text-2xl" aria-hidden>close</span></button>
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-4 border border-secondary-fixed-dim"><span className="material-symbols-outlined text-2xl" aria-hidden>videocam</span></div>
            <h3 id="sched-title" className="font-bold text-[20px] text-on-surface mb-1">Agendar con Camila Sánchez Díaz</h3>
            <p className="text-[14px] text-tertiary mb-4">Sesión remota privada de 15 minutos.</p>
            <form className="space-y-3" onSubmit={handleSched} noValidate>
              <div><label htmlFor="sched-fecha" className="text-[14px] font-semibold text-on-surface mb-1 block">Fecha de Interés <span className="text-primary">*</span></label><input id="sched-fecha" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" required aria-required="true" type="date" /></div>
              <div><label htmlFor="sched-horario" className="text-[14px] font-semibold text-on-surface mb-1 block">Horario Preferido</label><select id="sched-horario" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200"><option>10:00 - 10:15 hrs (Mañana)</option><option>12:30 - 12:45 hrs (Mediodía)</option><option>16:00 - 16:15 hrs (Tarde)</option><option>18:00 - 18:15 hrs (Cierre)</option></select></div>
              <div><label htmlFor="sched-tel" className="text-[14px] font-semibold text-on-surface mb-1 block">Teléfono / WhatsApp <span className="text-primary">*</span></label><input id="sched-tel" className="w-full h-11 px-3 rounded-lg bg-surface-container-low border border-surface-container/40 text-on-surface text-[15px] focus:outline-none focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-colors duration-200" placeholder="+51 984 321 000" required aria-required="true" type="tel" inputMode="tel" /></div>
              <div className="pt-2 flex items-center justify-end gap-2"><button type="button" onClick={() => setSchedOpen(false)} className="cursor-pointer px-4 py-2 min-h-[44px] text-tertiary text-[16px] hover:text-on-surface transition-colors duration-200 focus-ring rounded-lg">Cerrar</button><button type="submit" className="cursor-pointer px-6 py-2.5 min-h-[44px] rounded-xl bg-secondary-container text-on-secondary-container font-semibold text-[16px] hover:brightness-105 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] focus-ring border border-secondary-fixed-dim">Confirmar Videollamada</button></div>
            </form>
          </div>
        </div>
      )}

      {toast && <div role="status" aria-live="polite" className="fixed bottom-6 right-6 z-[var(--z-toast)] flex items-center gap-3 p-4 bg-inverse-surface text-inverse-on-surface rounded-xl shadow-2xl border border-white/10 animate-fadeUp"><span className="material-symbols-outlined text-secondary-container" aria-hidden>check_circle</span><span className="text-[15px] font-semibold">{toast}</span></div>}
    </div>
  );
}
