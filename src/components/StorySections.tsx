import { storyBeats, summitDays } from '../data/middle'
import { ScrollReveal } from './ScrollReveal'

export function StorySections() {
  return (
    <section className="story-sections page-width" aria-label="The story so far">
      {storyBeats.map((beat, index) => (
        <ScrollReveal className={`story-beat story-beat--${beat.tone ?? 'default'}`} key={beat.id}>
          <span className="eyebrow">{beat.label}</span>
          {beat.id === 'beginning' ? <p className="story-beat__fact">deeksharambh / siva's team / instagram</p> : <h2>{beat.title}</h2>}
          {beat.id === 'beginning' && <p className="story-beat__oh">oh.</p>}
          <p className="story-beat__body">{beat.body}</p>
          {beat.id === 'mess' && <div className="mess-line" aria-hidden="true"><span /> <span /> <span /></div>}
          {beat.id === 'distance' && <div className="distance-line" aria-hidden="true"><span /></div>}
        </ScrollReveal>
      ))}

      <ScrollReveal className="summit-section" aria-labelledby="summit-title">
        <div className="summit-section__intro">
          <span className="eyebrow">four days</span>
          <h2 id="summit-title">summit</h2>
          <p>jan 29 — feb 1, 2026</p>
          <p className="summit-section__body">concerts, closeness, protectiveness, and four days of getting harder to ignore.</p>
        </div>
        <div className="summit-days">
          {summitDays.map((day) => (
            <div className="summit-day" key={day.id}>
              <span className="eyebrow">{day.dateLabel}</span>
              <span className="summit-day__placeholder">photo + memory line needed</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
