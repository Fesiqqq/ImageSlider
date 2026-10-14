export default function KeyboardShortcuts() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-5 text-xs text-zinc-500">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-semibold uppercase tracking-wider text-zinc-400">Atalhos rápidos:</span>
        <div className="flex items-center gap-1.5">
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">←</kbd>
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">→</kbd>
          <span>Navegar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <kbd className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] text-zinc-300">Espaço</kbd>
          <span>Pausar / Retomar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">F</kbd>
          <span>Tela cheia</span>
        </div>
        <div className="flex items-center gap-1.5">
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">I</kbd>
          <span>Ficha Técnica</span>
        </div>
      </div>

      <div className="text-[11px] text-zinc-500">
        Desenvolvido com React 19 + Tailwind CSS + Vite
      </div>
    </div>
  )
}
