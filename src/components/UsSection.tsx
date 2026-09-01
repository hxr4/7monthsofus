import { middlePhotos } from '../data/middle'
import { PhotoFrame } from './PhotoFrame'
import { ScrollReveal } from './ScrollReveal'

export function UsSection() {
  const photos = middlePhotos.filter((photo) => photo.section === 'Us')
  return (
    <section className="us-section page-width" aria-labelledby="us-section-title">
      <ScrollReveal className="us-section__header">
        <span className="eyebrow">us</span>
        <h2 id="us-section-title">a shared sense of ridiculous.</h2>
        <p>bullying. rage-baiting. judging strangers. being fully comfortable being stupid together. having each other's backs when it matters.</p>
      </ScrollReveal>
      <div className="photo-row">
        {photos.map((photo, index) => <ScrollReveal key={photo.id} delay={index * 80}><PhotoFrame photo={photo} index={index} /></ScrollReveal>)}
      </div>
    </section>
  )
}
