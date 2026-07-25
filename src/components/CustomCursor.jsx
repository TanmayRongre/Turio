import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/*
 * WHY PORTAL?
 * The cursor was rendering inside App's root <div>. Any ancestor element
 * with a CSS stacking context (transform, will-change, z-index + position,
 * filter, etc.) traps all fixed-position children inside its own paint layer —
 * even if those children have a very high z-index. Portaling directly into
 * document.body puts the cursor in the root stacking context, so it always
 * floats above everything.
 *
 * WHY z-index: 2147483647?
 * That's the maximum 32-bit signed integer — the highest z-index browsers
 * accept. Tailwind's z-9999 (9999) on the StickyNavbar was beating the old
 * 999999 value in certain stacking contexts.
 */

const lerp = (a, b, t) => a + (b - a) * t

const DOT_SIZE  = 5
const RING_SIZE = 38
const LERP_DOT  = 0.20
const LERP_RING = 0.09
const Z         = 2147483647   // max browser z-index

const HOVER_SEL = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]'

function CursorLayers() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)

  const mouse  = useRef({ x: -300, y: -300 })
  const dotPos = useRef({ x: -300, y: -300 })
  const rngPos = useRef({ x: -300, y: -300 })

  const isHover   = useRef(false)
  const isClicked = useRef(false)
  const rafId     = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onOver = (e) => {
      isHover.current = !!e.target.closest(HOVER_SEL)
    }

    const onDown = () => { isClicked.current = true  }
    const onUp   = () => { isClicked.current = false }

    const tick = () => {
      const mx  = mouse.current.x
      const my  = mouse.current.y
      const hov = isHover.current
      const clk = isClicked.current

      dotPos.current.x = lerp(dotPos.current.x, mx, LERP_DOT)
      dotPos.current.y = lerp(dotPos.current.y, my, LERP_DOT)
      rngPos.current.x = lerp(rngPos.current.x, mx, LERP_RING)
      rngPos.current.y = lerp(rngPos.current.y, my, LERP_RING)

      const dx = rngPos.current.x
      const dy = rngPos.current.y

      // dot — grows slightly on hover, squishes on click
      const dotScale = clk ? 0.5 : hov ? 1.4 : 1
      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) scale(${dotScale})`

      // ring — expands on hover, compresses on click, fills amber
      const ringScale = clk ? 0.78 : hov ? 2.0 : 1
      ring.style.transform       = `translate(${dx}px, ${dy}px) scale(${ringScale})`
      ring.style.borderColor     = hov ? 'rgba(255,204,5,0.90)' : 'rgba(255,255,255,0.50)'
      ring.style.borderWidth     = hov ? '1px' : '1.5px'
      ring.style.backgroundColor = hov ? 'rgba(255,204,5,0.08)' : 'rgba(255,255,255,0.03)'

      // glow blob
      const glowScale = clk ? 0.6 : hov ? 2.8 : 1
      glow.style.transform = `translate(${dx}px, ${dy}px) scale(${glowScale})`
      glow.style.opacity   = hov ? '0.22' : clk ? '0.30' : '0.12'

      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  const base = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    willChange: 'transform, opacity',
  }

  return (
    <>
      {/* 1 — Glow blob */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          ...base,
          width:  RING_SIZE * 2.2,
          height: RING_SIZE * 2.2,
          marginTop:  -(RING_SIZE * 1.1),
          marginLeft: -(RING_SIZE * 1.1),
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,204,5,0.65) 0%, transparent 68%)',
          filter: 'blur(4px)',
          opacity: 0.12,
          zIndex: Z - 2,
          transition: 'opacity 0.30s ease, transform 0.30s cubic-bezier(0.23,1,0.32,1)',
        }}
      />

      {/* 2 — Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width:  RING_SIZE,
          height: RING_SIZE,
          marginTop:  -(RING_SIZE / 2),
          marginLeft: -(RING_SIZE / 2),
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.50)',
          backgroundColor: 'rgba(255,255,255,0.03)',
          zIndex: Z - 1,
          transition: [
            'border-color 0.22s ease',
            'border-width 0.22s ease',
            'background-color 0.22s ease',
            'transform 0.20s cubic-bezier(0.23,1,0.32,1)',
          ].join(', '),
        }}
      />

      {/* 3 — Centre dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width:  DOT_SIZE,
          height: DOT_SIZE,
          marginTop:  -(DOT_SIZE / 2),
          marginLeft: -(DOT_SIZE / 2),
          borderRadius: '50%',
          backgroundColor: '#FFCC05',
          boxShadow: '0 0 7px 2px rgba(255,204,5,0.60)',
          zIndex: Z,
          transition: 'transform 0.12s cubic-bezier(0.23,1,0.32,1)',
        }}
      />
    </>
  )
}

export default function CustomCursor() {
  // Portal into document.body — escapes ALL stacking contexts
  return createPortal(<CursorLayers />, document.body)
}
