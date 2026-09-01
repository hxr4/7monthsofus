import { useState, type CSSProperties } from 'react'
import { sevenMonths } from '../data/middle'
import { ScrollReveal } from './ScrollReveal'

export function SevenMonths() {
  const [revealed, setRevealed] = useState(0)
  const total = sevenMonths.length
  const progress = total > 0 ? Math.min(100, (revealed / total) * 100) : 0

  return (
    <section className="months-section page-width" aria-labelledby="months-title">
      <ScrollReveal className="months-section__header">
        <span className="eyebrow">seven months</span>
        <h2 id="months-title">not seven identical cards.</h2>
        <p>only the parts that exist get to take up space.</p>
      </ScrollReveal>
      <div className="timeline" style={{ '--timeline-progress': `${progress}%` } as CSSProperties}>
        <div className="timeline__spine" aria-hidden="true" />
        <div className="timeline__fill" aria-hidden="true" />
        <div className="timeline__list">
          {sevenMonths.map((month, index) => (
            <ScrollReveal
              key={month.id}
              delay={(index % 2) * 90}
              className={`timeline__node ${month.detail ? 'timeline__node--detailed' : ''} ${index % 2 === 0 ? 'timeline__node--a' : 'timeline__node--b'}`}
              onReveal={() => setRevealed((count) => Math.max(count, index + 1))}
            >
              <span className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card">
                <span className="eyebrow">{month.label}</span>
                <h3>{month.memoryLine}</h3>
                {month.detail && <p className="month-slot__detail">{month.detail}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
