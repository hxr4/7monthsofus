import { middlePhotos } from '../data/middle'
import { PhotoFrame } from './PhotoFrame'

const anuPhoto = middlePhotos.find((photo) => photo.id === 'pic-5')!

export function AnuSection() {
  return (
    <section className="anu-section page-width" aria-labelledby="anu-section-title">
      <div className="anu-section__copy">
        <span className="eyebrow">anu</span>
        <h2 id="anu-section-title">what i notice.</h2>
        <p>caring. friendly with everyone. softer when it's just us. clingy, dramatic, and somehow still the easiest person to deal with when there's food, a bed, and no heat.</p>
        <p>you like things organized, then get too lazy to keep them that way. you remember exactly what upset you. you brag about me to your friends. and you have very serious opinions about al baik.</p>
      </div>
      <PhotoFrame photo={anuPhoto} index={4} />
    </section>
  )
}
