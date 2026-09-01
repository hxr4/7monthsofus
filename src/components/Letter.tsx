import { letterData } from '../data/letter'

function renderLetterText(text: string) {
  const parts = text.split('*')
  return parts.map((part, index) => (index % 2 === 1 ? <em key={`${part}-${index}`}>{part}</em> : part))
}

export function Letter() {
  return (
    <section className="letter-section page-width" aria-labelledby="letter-title">
      <div className="letter-section__header">
        <span className="eyebrow">the letter</span>
        <h2 id="letter-title">anu,</h2>
      </div>
      <div className="letter-body">
        {letterData.paragraphs.map((paragraph, index) => {
          const isBeat = ['"oh."', '"what the fuck."', 'yeah.', 'you.', "it's you."].includes(paragraph)
          const beatClass = paragraph === 'yeah.' || paragraph === "it's you." ? 'letter-beat--sequence' : ''
          const isClosingBeat = paragraph === 'you.' && index === letterData.paragraphs.length - 1
          return isBeat ? (
            <p className={`letter-beat ${beatClass} ${isClosingBeat ? 'letter-beat--closing' : ''}`.trim()} key={`${paragraph}-${index}`}>
              {renderLetterText(paragraph)}
            </p>
          ) : (
            <p key={`${paragraph.slice(0, 16)}-${index}`}>{renderLetterText(paragraph)}</p>
          )
        })}
      </div>
    </section>
  )
}
