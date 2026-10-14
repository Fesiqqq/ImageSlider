import { useRef } from 'react'

export default function SliderStage({
  animals,
  currentIndex,
  onPrevious,
  onNext,
  onOpenDetails,
  onMouseEnter,
  onMouseLeave,
}) {
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      onNext()
    } else if (isRightSwipe) {
      onPrevious()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className="relative group isolate"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Ambient Glow behind the card */}
      <div
        className="absolute -inset-4 -z-10 rounded-[3rem] opacity-40 blur-3xl transition-all duration-1000 hidden sm:block"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${animals[currentIndex]?.accentColor || '#10b981'}44 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Main Card Stage */}
      <div
        className="relative isolate aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8.5] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-2xl shadow-black/80 ring-1 ring-white/10 select-none"
        tabIndex="0"
        aria-label="Apresentação de slides da vida selvagem"
      >
        {animals.map((animal, index) => {
          const isActive = index === currentIndex
          return (
            <article
              key={animal.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive ? 'z-10 opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image with slow cinematic presence */}
              <img
                src={animal.image}
                alt={`${animal.name}: ${animal.headline}`}
                className="size-full object-cover object-center transform transition-transform duration-1000 ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Multi-layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/30" />

              {/* Top Meta Badges */}
              <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  <span className="size-2 rounded-full" style={{ backgroundColor: animal.accentColor }} />
                  {animal.tag}
                </span>

                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${animal.conservation.badgeClass}`}
                >
                  {animal.conservation.status}
                </span>

                <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-zinc-300 backdrop-blur-md">
                  📍 {animal.region}
                </span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 lg:p-14 max-w-4xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400 drop-shadow">
                  {animal.categoryLabel}
                </p>

                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                    {animal.name}
                  </h2>
                  <span className="text-sm italic font-serif text-zinc-300 sm:text-lg">
                    ({animal.scientificName})
                  </span>
                </div>

                <p className="mt-2 text-base font-medium text-amber-200/90 sm:text-lg">
                  {animal.headline}
                </p>

                <p className="mt-3 max-w-2xl text-xs sm:text-sm sm:leading-relaxed text-zinc-300/90 line-clamp-3 sm:line-clamp-none">
                  {animal.summary}
                </p>

                {/* Call to action inside slide */}
                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenDetails}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition hover:border-amber-400 hover:bg-white/25 active:scale-95"
                  >
                    <span>Explorar Ficha Técnica</span>
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          )
        })}

        {/* Floating Side Arrow Controls */}
        <button
          type="button"
          onClick={onPrevious}
          className="absolute left-3 sm:left-6 top-1/2 z-30 -translate-y-1/2 flex size-11 sm:size-13 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:scale-110 hover:border-white/40 hover:bg-white hover:text-black active:scale-95 shadow-xl shadow-black/50"
          aria-label="Imagem anterior"
        >
          <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-3 sm:right-6 top-1/2 z-30 -translate-y-1/2 flex size-11 sm:size-13 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:scale-110 hover:border-white/40 hover:bg-white hover:text-black active:scale-95 shadow-xl shadow-black/50"
          aria-label="Próxima imagem"
        >
          <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
