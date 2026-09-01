import { AmbientBackground } from './components/AmbientBackground'
import { GlassSurface } from './components/GlassSurface'
import { RevealText } from './components/RevealText'

function App() {
  return (
    <main className="site-shell">
      <AmbientBackground />
      <div className="site-shell__content">
        <header className="topbar page-width">
          <span className="eyebrow">foundation / 01</span>
          <span className="status-dot" aria-label="Foundation preview active" />
        </header>

        <section className="foundation-preview page-width" aria-labelledby="foundation-title">
          <div className="foundation-preview__intro">
            <span className="eyebrow">private / placeholder</span>
            <h1 id="foundation-title">A place for the specific things.</h1>
            <RevealText className="lede">
              The visual system is ready. The relationship content is intentionally not here yet.
            </RevealText>
          </div>

          <div className="foundation-preview__grid">
            <GlassSurface className="foundation-panel foundation-panel--large">
              <span className="panel-index">01</span>
              <h2>Content waits outside the components.</h2>
              <p>Typed data will feed the story, photographs, quiz, secret, letter, and ending.</p>
              <span className="placeholder-line" aria-hidden="true" />
            </GlassSurface>
            <div className="foundation-note">
              <span className="eyebrow">system note</span>
              <p>Motion should be felt, not noticed.</p>
            </div>
          </div>
        </section>

        <footer className="footer page-width">
          <span>phase 1 / foundation preview</span>
          <span>no personal content loaded</span>
        </footer>
      </div>
    </main>
  )
}

export default App
