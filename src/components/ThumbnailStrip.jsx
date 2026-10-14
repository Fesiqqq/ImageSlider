export default function ThumbnailStrip({ animals, currentIndex, onSelectSlide }) {
  return (
    <section aria-label="Galeria de miniaturas" className="mt-6 sm:mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
          Galeria de Espécies <span className="text-zinc-600 font-normal">({animals.length})</span>
        </h2>
        <span className="text-[11px] text-zinc-500">Clique para navegar diretamente</span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 sm:gap-3">
        {animals.map((animal, index) => {
          const isActive = index === currentIndex
          return (
            <button
              key={animal.id}
              type="button"
              onClick={() => onSelectSlide(index)}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                isActive
                  ? 'border-white/40 bg-white/10 shadow-xl shadow-black/60 ring-2 ring-white/20'
                  : 'border-white/5 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {/* Thumbnail image container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className={`size-full object-cover transition-transform duration-500 ${
                    isActive ? 'scale-105' : 'group-hover:scale-105'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                {/* Status indicator pill */}
                <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                  <span
                    className={`size-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-white/40'}`}
                  />
                  <span>0{index + 1}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-3">
                <div>
                  <p className="line-clamp-1 text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {animal.name}
                  </p>
                  <p className="line-clamp-1 text-[11px] text-zinc-400">{animal.categoryLabel}</p>
                </div>

                <div className="mt-2 flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-zinc-500">
                  <span className="truncate">{animal.region.split(',')[0]}</span>
                  {isActive && <span className="font-semibold text-emerald-400">Ativo</span>}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
