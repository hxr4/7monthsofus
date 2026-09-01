import { useEffect, useRef, useState } from 'react'
import { getAnniversaryElapsed } from '../lib/date'

type OpeningState = 'idle' | 'resolving' | 'open'

export function Opening() {
  const [state, setState] = useState<OpeningState>('idle')
  const [display, setDisplay] = useState('212')
  const timerRef = useRef<number | undefined>(undefined)
  const flickerRef = useRef<number | undefined>(undefined)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = () => {
    if (state === 'open') return
    window.clearInterval(flickerRef.current)
    setState('open')
    setDisplay(String(getAnniversaryElapsed(new Date()).months))
  }

  const begin = () => {
    if (state !== 'idle') return
    if (reducedMotion) {
      reveal()
      return
    }
    setState('resolving')
    flickerRef.current = window.setInterval(() => setDisplay(String(Math.floor(100 + Math.random() * 200))), 70)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(reveal, 900)
  }

  const release = () => {
    if (state === 'resolving') {
      window.clearTimeout(timerRef.current)
      window.clearInterval(flickerRef.current)
      setState('idle')
      setDisplay('212')
    }
  }

  useEffect(() => () => {
    window.clearTimeout(timerRef.current)
    window.clearInterval(flickerRef.current)
  }, [])

  return (
    <section className={`opening ${state === 'open' ? 'opening--open' : ''}`} aria-labelledby="opening-title">
      <div className="opening__grain" aria-hidden="true" />
      <div className="opening__content">
        <span className="eyebrow">a small beginning</span>
        <button
          className={`opening__hold ${state === 'resolving' ? 'opening__hold--charging' : ''}`}
          type="button"
          onPointerDown={begin}
          onPointerUp={release}
          onPointerCancel={release}
          onClick={reveal}
          aria-label={state === 'open' ? 'Opening revealed' : 'Hold or tap to reveal the opening'}
        >
          <svg className="opening__ring" viewBox="0 0 120 120" aria-hidden="true">
            <circle className="opening__ring-track" cx="60" cy="60" r="54" pathLength={100} />
            <circle className="opening__ring-fill" cx="60" cy="60" r="54" pathLength={100} />
          </svg>
          <span className="opening__burst" aria-hidden="true" />
          <span className="opening__instruction">{state === 'open' ? 'resolved' : 'hold.'}</span>
          <span key={display} className={`opening__number ${state === 'resolving' ? 'opening__number--charging' : ''}`} aria-live="polite">{display}</span>
          {state === 'open' && <span className="opening__unit">months</span>}
        </button>
        <h1 id="opening-title" className="sr-only">Seven months</h1>
      </div>
      {state === 'open' && <span className="opening__scroll-cue" aria-hidden="true">scroll</span>}
    </section>
  )
}
