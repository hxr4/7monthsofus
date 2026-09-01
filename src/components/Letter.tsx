import { letterData } from '../data/letter'
import { ScrollReveal } from './ScrollReveal'

function renderLetterText(text: string) {
  const parts = text.split('*')
  return parts.map((part, index) => (index % 2 === 1 ? <em key={`${part}-${index}`}>{part}</em> : part))
}

export function Letter() {
  return (
    <section className="letter-section page-width" aria-labelledby="letter-title">
      <ScrollReveal className="letter-section__header">
        <span className="eyebrow">the letter</span>
        <h2 id="letter-title">anu,</h2>
      </ScrollReveal>
      <div className="letter-body">
        {letterData.paragraphs.map((paragraph, index) => {
          const isBeat = ['"oh."', '"what the fuck."', 'yeah.', 'you.', "it's you."].includes(paragraph)
          const beatClass = paragraph === 'yeah.' || paragraph === "it's you." ? 'letter-beat--sequence' : ''
          const isClosingBeat = paragraph === 'you.' && index === letterData.paragraphs.length - 1
          return isBeat ? (
            <ScrollReveal
              as="p"
              className={`letter-beat ${beatClass} ${isClosingBeat ? 'letter-beat--closing' : ''}`.trim()}
              key={`${paragraph}-${index}`}
            >
              {renderLetterText(paragraph)}
            </ScrollReveal>
          ) : (
            <ScrollReveal as="p" key={`${paragraph.slice(0, 16)}-${index}`}>
              {renderLetterText(paragraph)}
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
