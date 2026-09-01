import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type PropsWithChildren } from 'react'

type ScrollRevealProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  delay?: number
  onReveal?: () => void
}

export function ScrollReveal({ children, className = '', delay = 0, style, onReveal, ...props }: ScrollRevealProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const onRevealRef = useRef(onReveal)
  onRevealRef.current = onReveal

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

  return <div {...props} ref={ref} className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''} ${className}`.trim()} style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>
}
