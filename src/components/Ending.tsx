import { useEffect, useState } from 'react'
import { endingData } from '../data/ending'

function getElapsedLabel(now: Date) {
  const start = new Date(2026, 1, 1)
  let cursor = new Date(start)
  let months = 0
  while (true) {
    const next = new Date(cursor)
    next.setMonth(next.getMonth() + 1)
    if (next > now) break
    cursor = next
    months += 1
  }
  const days = Math.floor((now.getTime() - cursor.getTime()) / 86_400_000)
  const hours = now.getHours() - cursor.getHours() < 0 ? now.getHours() - cursor.getHours() + 24 : now.getHours() - cursor.getHours()
  const minutes = now.getMinutes() - cursor.getMinutes() < 0 ? now.getMinutes() - cursor.getMinutes() + 60 : now.getMinutes() - cursor.getMinutes()
  const seconds = now.getSeconds() - cursor.getSeconds() < 0 ? now.getSeconds() - cursor.getSeconds() + 60 : now.getSeconds() - cursor.getSeconds()
  return `${months} months · ${days} days · ${hours}h ${minutes}m ${seconds}s`
}

export function Ending() {
  const [elapsed, setElapsed] = useState(() => getElapsedLabel(new Date()))

  useEffect(() => {
    const interval = window.setInterval(() => setElapsed(getElapsedLabel(new Date())), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className={`ending-section page-width ${endingData.endingPhoto ? 'ending-section--with-photo' : 'ending-section--without-photo'}`} aria-labelledby="ending-title">
      <div className="ending-section__timer" aria-live="off">
        <span className="eyebrow">since february 1, 2026</span>
        <p className="ending-section__elapsed">{elapsed}</p>
        <p className="ending-section__timer-label">{endingData.timerLabel}</p>
      </div>
      {endingData.endingPhoto && <div className="ending-visual ending-visual--photo"><img src={endingData.endingPhoto.src} alt={endingData.endingPhoto.alt} /></div>}
      <h2 id="ending-title" className="ending-section__final-line">{endingData.finalLine}</h2>
    </section>
  )
}
