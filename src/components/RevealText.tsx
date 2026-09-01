import type { PropsWithChildren } from 'react'

interface RevealTextProps extends PropsWithChildren {
  as?: 'p' | 'span'
  className?: string
}

export function RevealText({ as = 'p', children, className = '' }: RevealTextProps) {
  const Tag = as
  return <Tag className={`reveal-text ${className}`.trim()}>{children}</Tag>
}
