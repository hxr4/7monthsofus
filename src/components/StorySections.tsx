import { storyBeats, summitDays } from '../data/middle'
import { ScrollReveal } from './ScrollReveal'

export function StorySections() {
  return (
    <section className="story-sections page-width" aria-label="The story so far">
      {storyBeats.map((beat) => (
        <ScrollReveal className={`story-beat story-beat--${beat.tone ?? 'default'}`} key={beat.id}>
          <span className="eyebrow">{beat.label}</span>
          {beat.tone === 'opening' && <p className="story-beat__oh">{beat.beat}</p>}
          {beat.tone === 'quiet' && <h2 className="story-beat__quiet-beat">{beat.beat}</h2>}
          <p className="story-beat__body">{beat.body}</p>
        </ScrollReveal>
      ))}

      <ScrollReveal className="summit-section" aria-labelledby="summit-title">
        <div className="summit-section__intro">
          <span className="eyebrow">four days</span>
          <h2 id="summit-title">summit</h2>
          <p className="summit-section__body">concerts, closeness, protectiveness, and four days of getting harder to ignore.</p>
        </div>
        <div className="summit-days">
          {summitDays.map((day, index) => (
            <div className="summit-day" key={day.id}>
              <span className="summit-day__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="summit-day__memory">{day.memoryLine}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
