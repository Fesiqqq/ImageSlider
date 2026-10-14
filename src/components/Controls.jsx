export default function Controls({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onSelectSlide,
  isPaused,
  onTogglePause,
  progress, // 0 to 100
}) {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Progress & counter info */}
      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={onTogglePause}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          title={isPaused ? 'Retomar reprodução automática (Espaço)' : 'Pausar reprodução automática (Espaço)'}
          aria-label={isPaused ? 'Retomar autoplay' : 'Pausar autoplay'}
        >
          {isPaused ? (
            <svg className="size-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          )}
        </button>

        {/* Dynamic Progress Bar */}
        <div className="flex flex-col gap-1 w-36 sm:w-48">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>{isPaused ? 'PAUSADO' : 'TEMPO'}</span>
            <span className="text-zinc-200">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full transition-all duration-100 ${
                isPaused ? 'bg-amber-400/60' : 'bg-gradient-to-r from-amber-400 to-emerald-400'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Direct Dot Jump */}
        <div className="hidden items-center gap-1.5 sm:flex" role="tablist" aria-label="Seletor de slide">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Ir para a imagem ${index + 1}`}
                onClick={() => onSelectSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-7 bg-white' : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-between sm:justify-end gap-2">
        <div className="flex items-center gap-1.5 sm:hidden">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => onSelectSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevious}
            className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-semibold text-zinc-200 backdrop-blur-md transition hover:border-white/20 hover:bg-white/15 hover:text-white active:scale-95"
            aria-label="Imagem anterior (Seta para a esquerda)"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 text-xs font-semibold text-white shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-white/30 hover:bg-white/20 active:scale-95"
            aria-label="Próxima imagem (Seta para a direita)"
          >
            <span className="hidden sm:inline">Próxima</span>
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
