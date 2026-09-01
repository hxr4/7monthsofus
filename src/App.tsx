import { AmbientBackground } from './components/AmbientBackground'
import { Opening } from './components/Opening'
import { StorySections } from './components/StorySections'
import { AnuSection } from './components/AnuSection'
import { UsSection } from './components/UsSection'
import { SevenMonths } from './components/SevenMonths'
import { QuizExperience } from './components/QuizExperience'
import { Letter } from './components/Letter'
import { Ending } from './components/Ending'
import { GiftReveal } from './components/GiftReveal'

function App() {
  return (
    <main className="site-shell">
      <AmbientBackground />
      <div className="site-shell__content">
        <header className="topbar page-width">
          <span className="eyebrow">private / 7 months</span>
          <span className="status-dot" aria-label="Anniversary site active" />
        </header>

        <Opening />
        <StorySections />
        <AnuSection />
        <UsSection />
        <SevenMonths />
        <QuizExperience />
        <Letter />
        <Ending />
        <GiftReveal />
      </div>
    </main>
  )
}

export default App
