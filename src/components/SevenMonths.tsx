import { sevenMonths } from '../data/middle'
import { ScrollReveal } from './ScrollReveal'

export function SevenMonths() {
  return (
    <section className="months-section page-width" aria-labelledby="months-title">
      <ScrollReveal className="months-section__header">
        <span className="eyebrow">seven months</span>
        <h2 id="months-title">not seven identical cards.</h2>
        <p>only the parts that exist get to take up space.</p>
      </ScrollReveal>
      <div className="months-list">
        {sevenMonths.map((month, index) => (
          <ScrollReveal key={month.id} delay={index * 50} className={`month-slot month-slot--${month.status} ${month.detail ? 'month-slot--detailed' : ''}`}>
            <span className="eyebrow">{month.label}</span>
            <h3>{month.memoryLine}</h3>
            {month.detail && <p className="month-slot__detail">{month.detail}</p>}
            {month.dateLabel && <p className="month-slot__date">{month.dateLabel}</p>}
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
