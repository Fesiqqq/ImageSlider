export default function Header({
  activeCategory,
  onSelectCategory,
  categories,
  isFullscreen,
  onToggleFullscreen,
  onOpenDetails,
}) {
  return (
    <header className="mb-6 flex flex-col gap-4 lg:mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 via-emerald-500/20 to-sky-500/20 p-px shadow-lg shadow-emerald-950/40 ring-1 ring-white/15 sm:size-13">
            <div className="flex size-full items-center justify-center rounded-[15px] bg-zinc-950/90 backdrop-blur-md">
              <svg
                className="size-6 text-amber-400 sm:size-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                <path d="m14.5 9-5 5" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300">
                BIO·SPHERE
              </span>
              <span className="text-[11px] text-zinc-400">Edição 2026</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
              Wild Horizon <span className="text-zinc-500 font-light">| Fauna Global</span>
            </h1>
          </div>
        </div>

        {/* Action utility buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenDetails}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md transition hover:border-amber-400/40 hover:bg-white/10 hover:text-white"
            title="Ver ficha técnica detalhada da espécie"
          >
            <svg
              className="size-4 text-amber-400 transition group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Ficha da Espécie</span>
          </button>

          <button
            type="button"
            onClick={onToggleFullscreen}
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            title={isFullscreen ? 'Sair da tela cheia (F)' : 'Entrar em tela cheia (F)'}
            aria-label="Alternar tela cheia"
          >
            {isFullscreen ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Filter / Habitat Pills */}
      <nav aria-label="Filtro por ecossistema" className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none sm:gap-2">
        <span className="shrink-0 pr-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
          Ecossistema:
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 font-medium transition-all ${
                isActive
                  ? 'bg-white text-zinc-950 shadow-md shadow-white/10 font-semibold'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
