import { Link } from "react-router-dom";

export default function Nosotros() {
  return (
    <div className="w-full bg-background">
      <div className="w-full px-[clamp(18px,2.95vw,50px)] pb-10">
        {/* Hero */}
        <section aria-labelledby="nosotros-title" className="relative pt-[clamp(1rem,2vw,1.75rem)] pb-[clamp(1.5rem,3vw,2.5rem)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-fadeUp">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[13px] tracking-wider uppercase font-bold border border-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm text-primary" aria-hidden>history_edu</span>Socio Estratégico Empresarial
              </div>
              <h1 id="nosotros-title" className="font-extrabold text-[clamp(30px,3.75vw,50px)] leading-none tracking-tight text-on-surface pt-2">
                <span className="text-primary-container">Nosotros</span> en <span className="font-script font-bold text-[1.15em] leading-none text-primary-container">JyS</span>
              </h1>
              <p className="text-[clamp(15px,1.3vw,18px)] text-tertiary pt-2 max-w-[min(92%,42rem)]">
                Asesoría y capacitación empresarial integral para micro, mediana y gran empresa.
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low shadow-sm self-start md:self-auto animate-fadeUp delay-100">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 border border-primary/10">
                <span className="material-symbols-outlined text-2xl" aria-hidden>workspace_premium</span>
              </div>
              <div>
                <div className="font-bold text-on-surface text-[18px]">+14 Años</div>
                <div className="text-[13px] text-tertiary">De experiencia acompañando empresas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section aria-labelledby="historia-title" className="mb-8 animate-fadeUp delay-100">
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container p-6 md:p-10 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" aria-hidden></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-2 text-primary text-[13px] uppercase font-bold tracking-widest">
                <span className="material-symbols-outlined text-base" aria-hidden>auto_stories</span>Nuestra Historia
              </div>
              <h2 id="historia-title" className="font-bold text-[24px] md:text-[30px] text-on-surface mb-6 leading-tight">
                Un aliado estratégico, no solo un proveedor de servicios
              </h2>
              <div className="space-y-5 text-[16px] md:text-[17px] text-tertiary leading-relaxed max-w-4xl">
                <p>
                  JyS surge para responder a las crecientes demandas y desafíos que enfrentan las grandes empresas en un entorno altamente competitivo y en constante cambio. Tras un profundo análisis de las problemáticas que afectan a organizaciones consolidadas o en expansión, identificamos un patrón común: los servicios tradicionales de consultoría y contabilidad a menudo se enfocan únicamente en aspectos numéricos y transacciones reactivas, dejando de lado una visión integral y estratégica.
                </p>
                <p>
                  Entendemos que las grandes empresas no solo requieren un equipo que gestione sus números o cumpla con las obligaciones tributarias, sino que necesitan un aliado estratégico que abarque todas las dimensiones de su operación. Esto incluye desde la planificación financiera y la optimización administrativa, hasta la implementación de estrategias laborales, comerciales y de marketing que aseguren la rentabilidad, sostenibilidad y crecimiento continuo.
                </p>
                <p>
                  Con más de 14 años de experiencia, hemos trabajado junto a empresas de diversas industrias, adaptándonos a sus metas y necesidades particulares. Nos enorgullece ser parte de su evolución y éxito, estableciendo relaciones duraderas basadas en confianza, resultados tangibles y un compromiso constante por su progreso. En JyS, no solo brindamos asesoría; somos el socio estratégico que las grandes empresas necesitan para conquistar nuevos horizontes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión + Visión */}
        <section aria-labelledby="proposito-title" className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1rem,2vw,1.5rem)] mb-8">
          <article className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-inverse-surface to-tertiary text-inverse-on-surface shadow-md flex flex-col justify-between relative overflow-hidden border border-white/10" data-reveal>
            <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" aria-hidden></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-5 border border-secondary-fixed-dim">
                <span className="material-symbols-outlined text-2xl" aria-hidden>flag</span>
              </div>
              <div className="text-[13px] text-secondary-fixed-dim uppercase tracking-widest font-bold mb-1">Misión</div>
              <h3 className="font-bold text-[22px] text-inverse-on-surface mb-3 leading-snug">
                Facilitar y consolidar la actividad de nuestros clientes
              </h3>
              <p className="text-[16px] text-tertiary-fixed-dim leading-relaxed">
                Nuestro trabajo consiste en facilitar la actividad de nuestros clientes, comprendiendo sus necesidades y brindando asesoría personalizada a fin de que logren consolidarse.
              </p>
            </div>
          </article>

          <article className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative overflow-hidden border border-surface-container" data-reveal data-reveal-delay="120">
            <div className="absolute -left-10 -top-10 w-44 h-44 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none" aria-hidden></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-5 border border-primary-fixed-dim">
                <span className="material-symbols-outlined text-2xl" aria-hidden>visibility</span>
              </div>
              <div className="text-[13px] text-primary uppercase tracking-widest font-bold mb-1">Visión</div>
              <h3 className="font-bold text-[22px] text-on-surface mb-3 leading-snug">
                La asesoría empresarial más reconocida del país
              </h3>
              <p className="text-[16px] text-tertiary leading-relaxed">
                En los próximos cinco años, ser la empresa de asesoría empresarial para la micro, mediana y grande empresa más reconocida en el país.
              </p>
            </div>
          </article>
        </section>

        {/* CTA */}
        <section aria-labelledby="nosotros-cta" className="p-6 md:p-8 rounded-2xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5" data-reveal>
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 border border-primary-fixed-dim">
              <span className="material-symbols-outlined text-3xl" aria-hidden>handshake</span>
            </div>
            <div>
              <h3 className="font-bold text-[20px] text-on-surface mb-1">¿Listo para crecer con un socio estratégico?</h3>
              <p className="text-[15px] text-tertiary leading-relaxed">Únete al Programa de Beneficios JyS Conectados o conoce nuestro catálogo de convenios exclusivos.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link to="/catalogo" className="btn-shine group cursor-pointer inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl bg-primary-container text-on-primary font-semibold text-[16px] hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-md focus-ring">
              Ver Catálogo <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden>arrow_forward</span>
            </Link>
            <Link to="/afiliate" className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-xl bg-surface-container text-on-surface font-semibold text-[16px] hover:bg-surface-container-high transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] shadow-sm focus-ring">
              Afíliate <span className="material-symbols-outlined text-lg text-primary" aria-hidden>handshake</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
