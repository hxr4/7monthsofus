import type { PropsWithChildren } from 'react'

interface GlassSurfaceProps extends PropsWithChildren {
  className?: string
}

export function GlassSurface({ children, className = '' }: GlassSurfaceProps) {
  return <div className={`glass-surface ${className}`.trim()}>{children}</div>
}
