import { useEffect, useRef, useState, type CSSProperties, type ElementType, type HTMLAttributes, type PropsWithChildren } from 'react'

type ScrollRevealProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  delay?: number
  onReveal?: () => void
  as?: ElementType
}

export function ScrollReveal({ children, className = '', delay = 0, style, onReveal, as, ...props }: ScrollRevealProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const onRevealRef = useRef(onReveal)
  onRevealRef.current = onReveal
  const Tag = as ?? 'div'

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      onRevealRef.current?.()
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        onRevealRef.current?.()
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      {...props}
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
