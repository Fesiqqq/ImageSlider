import { useState, useEffect, useCallback } from 'react'
import { animals as rawAnimals, categories } from './data/animals'
import Header from './components/Header'
import SliderStage from './components/SliderStage'
import Controls from './components/Controls'
import ThumbnailStrip from './components/ThumbnailStrip'
import AnimalModal from './components/AnimalModal'
import KeyboardShortcuts from './components/KeyboardShortcuts'

const SLIDE_DURATION = 6000 // 6 seconds per slide

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Filter or highlight animals
  const displayedAnimals = rawAnimals

  const totalSlides = displayedAnimals.length

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setProgress(0)
  }, [totalSlides])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setProgress(0)
  }, [totalSlides])

  const handleSelectSlide = useCallback((index) => {
    setCurrentIndex(index)
    setProgress(0)
  }, [])

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId)
    if (categoryId === 'todos') {
      setCurrentIndex(0)
      setProgress(0)
      return
    }
    const targetIndex = displayedAnimals.findIndex((a) => a.category === categoryId)
    if (targetIndex !== -1) {
      setCurrentIndex(targetIndex)
      setProgress(0)
    }
  }

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Auto-play progress loop
  const effectivePaused = isPaused || isHovered || isDetailsOpen

  useEffect(() => {
    if (effectivePaused) return undefined

    const intervalStep = 50 // ms
    const increment = (intervalStep / SLIDE_DURATION) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext()
          return 0
        }
        return prev + increment
      })
    }, intervalStep)

    return () => clearInterval(timer)
  }, [effectivePaused, handleNext])

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if focus is inside input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsPaused((p) => !p)
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault()
        toggleFullscreen()
      } else if (e.key.toLowerCase() === 'i') {
        e.preventDefault()
        setIsDetailsOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrevious])

  const activeAnimal = displayedAnimals[currentIndex]

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-amber-400 selection:text-black">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${activeAnimal?.accentColor || '#10b981'}33 0%, transparent 60%)`,
        }}
      />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Header navigation */}
        <Header
          activeCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          categories={categories}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onOpenDetails={() => setIsDetailsOpen(true)}
        />

        {/* Main Slider Display */}
        <SliderStage
          animals={displayedAnimals}
          currentIndex={currentIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onOpenDetails={() => setIsDetailsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* Playback Controls & Progress */}
        <Controls
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSelectSlide={handleSelectSlide}
          isPaused={effectivePaused}
          onTogglePause={() => setIsPaused((prev) => !prev)}
          progress={progress}
        />

        {/* Interactive Thumbnail Gallery Strip */}
        <ThumbnailStrip
          animals={displayedAnimals}
          currentIndex={currentIndex}
          onSelectSlide={handleSelectSlide}
        />

        {/* Keyboard Navigation Shortcuts Bar */}
        <KeyboardShortcuts />
      </main>

      {/* Deep-dive Animal Details Modal */}
      <AnimalModal
        animal={activeAnimal}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  )
}
