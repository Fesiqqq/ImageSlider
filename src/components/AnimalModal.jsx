import { useEffect } from 'react'

export default function AnimalModal({ animal, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !animal) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 p-6 shadow-2xl shadow-black/80 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/15 hover:text-white"
          aria-label="Fechar ficha técnica"
        >
          ✕
        </button>

        {/* Header Details */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between pr-10">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                {animal.categoryLabel}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs text-zinc-400">{animal.region}</span>
            </div>
            <h2 id="modal-title" className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {animal.name}
            </h2>
            <p className="text-sm italic text-zinc-400 font-serif">{animal.scientificName}</p>
          </div>

          <div className="mt-2 sm:mt-0">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${animal.conservation.badgeClass}`}
            >
              <span className="size-1.5 rounded-full bg-current" />
              {animal.conservation.status}
            </span>
          </div>
        </div>

        {/* Image Preview Banner */}
        <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          <img src={animal.image} alt={animal.name} className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <p className="text-xs font-medium text-white/90 drop-shadow-md">{animal.headline}</p>
          </div>
        </div>

        {/* Ecology Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span className="text-emerald-400">🌍</span> Bioma & Habitat
            </div>
            <p className="mt-1.5 text-sm text-zinc-200">{animal.details.biome}</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span className="text-amber-400">🍃</span> Dieta & Alimentação
            </div>
            <p className="mt-1.5 text-sm text-zinc-200">{animal.details.diet}</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span className="text-sky-400">⏳</span> Expectativa de Vida
            </div>
            <p className="mt-1.5 text-sm text-zinc-200">{animal.details.lifespan}</p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span className="text-orange-400">⚖️</span> Porte & Peso
            </div>
            <p className="mt-1.5 text-sm text-zinc-200">{animal.details.weight}</p>
          </div>
        </div>

        {/* Curiosity Box */}
        <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <span>✨</span> Você sabia?
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{animal.details.curiosity}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            Fechar Ficha Técnica
          </button>
        </div>
      </div>
    </div>
  )
}
