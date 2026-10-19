/**
 * EmptyState — estado vacío con tarjetas flotantes que se separan al hover.
 * Inspirado en el patrón "No Emissions Found" (apilado que se dispersa).
 */
export default function EmptyState({
  icon = "search_off",
  title,
  description,
  action,
}) {
  return (
    <div className="w-full">
      <div className="group text-center py-14 px-6 border border-dashed border-surface-container rounded-xl bg-surface-container-low transition duration-500 hover:duration-200 hover:bg-surface-container">
        <div className="flex justify-center isolate mb-6">
          <div className="size-14 bg-surface-container-lowest grid place-items-center ring-1 ring-black/[0.08] rounded-2xl relative left-2.5 top-1.5 -rotate-6 shadow-lg group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
            <span className="material-symbols-outlined text-2xl text-tertiary" aria-hidden>{icon}</span>
          </div>
          <div className="size-14 bg-surface-container-lowest grid place-items-center ring-1 ring-black/[0.08] rounded-2xl z-10 shadow-lg group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
            <span className="material-symbols-outlined text-2xl text-primary" aria-hidden>{icon}</span>
          </div>
          <div className="size-14 bg-surface-container-lowest grid place-items-center ring-1 ring-black/[0.08] rounded-2xl relative right-2.5 top-1.5 rotate-6 shadow-lg group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
            <span className="material-symbols-outlined text-2xl text-secondary-container" aria-hidden>{icon}</span>
          </div>
        </div>
        <h2 className="text-base text-on-surface font-bold">{title}</h2>
        {description && <p className="text-sm text-tertiary mt-1 max-w-sm mx-auto">{description}</p>}
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  );
}
