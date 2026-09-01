import { sevenMonths } from '../data/middle'

export function SevenMonths() {
  return (
    <section className="months-section page-width" aria-labelledby="months-title">
      <div className="months-section__header">
        <span className="eyebrow">seven months</span>
        <h2 id="months-title">not seven identical cards.</h2>
        <p>only the parts that exist get to take up space.</p>
      </div>
      <div className="months-list">
        {sevenMonths.map((month) => (
          <article className={`month-slot month-slot--${month.status}`} key={month.id}>
            <span className="eyebrow">{month.label}</span>
            <h3>{month.status === 'ready' ? month.memoryLine : 'content needed'}</h3>
            <p>{month.dateLabel}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
