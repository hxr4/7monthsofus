import type { PhotoAsset } from '../data/types'
import type { FramePreset } from '../data/middle'

interface FramedPhoto extends PhotoAsset {
  width: number
  height: number
  preset: FramePreset
}

export function PhotoFrame({ photo, index = 0 }: { photo: FramedPhoto; index?: number }) {
  return (
    <figure className={`photo-frame photo-frame--${photo.preset} photo-frame--offset-${index % 3}`}>
      <div className="photo-frame__matte">
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  )
}
