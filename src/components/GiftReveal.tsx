import { useState } from 'react'
import { giftData } from '../data/gift'

export function GiftReveal() {
  const [revealed, setRevealed] = useState(false)

  const reveal = () => setRevealed(true)

  return (
    <section className={`gift-section page-width ${revealed ? 'gift-section--revealed' : ''}`} aria-labelledby="gift-title">
      <span className="eyebrow">one more thing</span>
      <h2 id="gift-title">{revealed ? 'tonight.' : 'a small surprise.'}</h2>
      <div
        className={`gift-box ${revealed ? 'gift-box--open' : ''}`}
        role="button"
        tabIndex={0}
        aria-pressed={revealed}
        aria-label={revealed ? 'Movie ticket revealed' : 'Pull the ribbon to reveal a surprise'}
        onClick={reveal}
        onKeyDown={(event) => {
          if (!revealed && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault()
            reveal()
          }
        }}
      >
        <div className="gift-box__ticket">
          <img src={giftData.ticketSrc} alt={giftData.ticketAlt} />
        </div>
        <span className="gift-box__ribbon gift-box__ribbon--v" aria-hidden="true" />
        <span className="gift-box__ribbon gift-box__ribbon--h" aria-hidden="true" />
        <span className="gift-box__tag" aria-hidden="true">pull</span>
      </div>
      {!revealed && <p className="gift-section__hint">tap the ribbon.</p>}
    </section>
  )
}
