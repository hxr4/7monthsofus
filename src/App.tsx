import { AmbientBackground } from './components/AmbientBackground'
import { Letter } from './components/Letter'
import { Ending } from './components/Ending'

function App() {
  return (
    <main className="site-shell">
      <AmbientBackground />
      <div className="site-shell__content">
        <header className="topbar page-width">
          <span className="eyebrow">letter / ending</span>
          <span className="status-dot" aria-label="Letter and ending active" />
        </header>

        <Letter />
        <Ending />
      </div>
    </main>
  )
}

export default App
