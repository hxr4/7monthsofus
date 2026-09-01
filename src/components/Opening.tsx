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
    if (state === 'resolving') window.clearTimeout(timerRef.current)
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
          className="opening__hold"
          type="button"
          onPointerDown={begin}
          onPointerUp={release}
          onPointerCancel={release}
          onClick={reveal}
          aria-label={state === 'open' ? 'Opening revealed' : 'Hold or tap to reveal the opening'}
        >
          <span className="opening__instruction">{state === 'open' ? 'resolved' : 'hold.'}</span>
          <span key={display} className="opening__number" aria-live="polite">{display}</span>
          {state === 'open' && <span className="opening__unit">months</span>}
        </button>
        <h1 id="opening-title" className="sr-only">Seven months</h1>
      </div>
    </section>
  )
}
