import { middlePhotos } from '../data/middle'
import { PhotoFrame } from './PhotoFrame'

export function UsSection() {
  const photos = middlePhotos.filter((photo) => photo.section === 'Us')
  return (
    <section className="us-section page-width" aria-labelledby="us-section-title">
      <div className="us-section__header">
        <span className="eyebrow">us</span>
        <h2 id="us-section-title">a shared sense of ridiculous.</h2>
        <p>bullying. rage-baiting. judging strangers. being fully comfortable being stupid together. having each other's backs when it matters.</p>
      </div>
      <div className="photo-row">
        {photos.map((photo, index) => <PhotoFrame key={photo.id} photo={photo} index={index} />)}
      </div>
    </section>
  )
}
